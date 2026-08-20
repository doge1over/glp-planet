"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    DAYS,
    BROADCAST_HALLS,
    HALLS,
    hallsWithEvents,
    sessionsFor,
    type Hall,
    type TalkKind,
} from "@/lib/program";

const KIND_COLORS: Record<string, string> = {
    "доклад": "#559CD6",
    "доклад онлайн": "#6FCF97",
    "доклад снят": "#E08A8A",
    "дискуссия": "#8B6FC4",
    "перерыв": "#6B7280",
    "обед": "#6B7280",
    "выставка": "#3FA796",
    "фуршет": "#C48B5A",
    "собрание": "#C48B5A",
    "мастер-класс": "#3FA796",
    "круглый стол": "#8B6FC4",
    "регистрация": "#6B7280",
    "церемония": "#C48B5A",
};

function kindColor(kind?: TalkKind) {
    return KIND_COLORS[kind ?? "доклад"] ?? "#559CD6";
}


interface AdminItem {
    id: number;
    day: string;
    hall: Hall;
    start: string;
    end: string;
    title: string;
    speaker: string;
    type: TalkKind;
    attachments?: Attachment[];
    verified?: boolean;
}

interface Attachment {
    id: string;
    name: string;
    url: string;
    size: number;
    uploadedAt: string;
}

type Row =
    | { kind: "label"; title: string; moderators?: string }
    | { kind: "row"; start: string; end: string; title: string; speaker?: string; online?: boolean; removed?: boolean; type?: TalkKind; attachments?: Attachment[] };

// Статика: сессионная структура из lib/program.ts
function flatten(day: string, hall: Hall): Row[] {
    const out: Row[] = [];
    for (const s of sessionsFor(day, hall)) {
        if (s.talks && s.talks.length) {
            out.push({ kind: "label", title: s.title, moderators: s.moderators });
            for (const t of s.talks) {
                out.push({ kind: "row", start: t.start, end: t.end, title: t.title, speaker: t.speaker, online: t.online, type: t.kind });
            }
        } else {
            const type = (s.kind === "сессия" ? "доклад" : s.kind) as TalkKind;
            out.push({ kind: "row", start: s.start, end: s.end, title: s.title, speaker: s.moderators, type });
        }
    }
    return out;
}

// Из admin-overrides: плоский список без сессионных заголовков
function flattenFromAdmin(day: string, hall: Hall, items: AdminItem[]): Row[] {
    return items
        .filter((it) => it.day === day && it.hall === hall)
        .map((it) => ({
            kind: "row" as const,
            start: it.start,
            end: it.end,
            title: it.title,
            speaker: it.speaker || undefined,
            online: it.type === "доклад онлайн",
            removed: it.type === "доклад снят",
            type: it.type,
            attachments: it.verified === true ? it.attachments : [],
        }));
}

function hallsFromAdmin(day: string, items: AdminItem[]): Hall[] {
    const set = new Set(items.filter((it) => it.day === day).map((it) => it.hall));
    return HALLS.filter((h) => set.has(h));
}

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState<string>(DAYS[0].id);
    const [activeHall, setActiveHall] = useState<Hall | "Все">("Все");
    const [adminItems, setAdminItems] = useState<AdminItem[] | null>(null);
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const load = () =>
            fetch("/api/program")
                .then((r) => r.json())
                .then((d) => { if (d.ok && Array.isArray(d.items)) setAdminItems(d.items); })
                .catch(() => {});
        load();
        const id = setInterval(load, 60_000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 60_000);
        return () => clearInterval(id);
    }, []);

    function isPast(day: string, end: string): boolean {
        const [h, m] = end.split(":").map(Number);
        const t = new Date(day);
        t.setHours(h, m, 0, 0);
        return now > t;
    }

    const halls = adminItems ? hallsFromAdmin(activeDay, adminItems) : hallsWithEvents(activeDay);
    const shownHalls = activeHall === "Все" ? halls : halls.filter((h) => h === activeHall);

    return (
        <>
            <Header />
            <main className="sc-main">
                <section className="sc-hero">
                    <div className="sc-container">
                        <div className="sc-label">Онлайн</div>
                        <h1 className="sc-title">Расписание конференции</h1>
                        <p className="sc-subtitle">
                            Программа VII Международной научно-практической конференции GLP-PLANET.
                            1–3 июля 2026, отель «Санкт-Петербург», Пироговская наб., д. 5/2.
                        </p>
                    </div>
                </section>

                <section className="sc-body">
                    <div className="sc-container">
                        <div className="sc-days">
                            {DAYS.map((d) => (
                                <button
                                    key={d.id}
                                    type="button"
                                    className={`sc-day${d.id === activeDay ? " active" : ""}`}
                                    onClick={() => setActiveDay(d.id)}
                                >
                                    {d.label}
                                </button>
                            ))}
                        </div>

                        <div className="sc-halls">
                            <button
                                className={`sc-hall-chip${activeHall === "Все" ? " active" : ""}`}
                                onClick={() => setActiveHall("Все")}
                            >
                                Все залы
                            </button>
                            {halls.map((h) => (
                                <button
                                    key={h}
                                    className={`sc-hall-chip${activeHall === h ? " active" : ""}`}
                                    onClick={() => setActiveHall(h)}
                                >
                                    {h}
                                    {!BROADCAST_HALLS.includes(h) && <span className="sc-chip-note">без трансляции</span>}
                                </button>
                            ))}
                        </div>

                        <div className="sc-list">
                            {shownHalls.map((hall) => {
                                const rows = adminItems
                                    ? flattenFromAdmin(activeDay, hall, adminItems)
                                    : flatten(activeDay, hall);
                                const broadcast = BROADCAST_HALLS.includes(hall);
                                return (
                                    <div key={hall} className="sc-hall-group">
                                        <div className="sc-hall-head">
                                            <span className="sc-hall-name">Зал «{hall}»</span>
                                            <span className={`sc-bc ${broadcast ? "on" : "off"}`}>
                                                {broadcast ? "Трансляция" : "Без трансляции"}
                                            </span>
                                        </div>

                                        <div className="sc-rows">
                                            {rows.map((r, i) =>
                                                r.kind === "label" ? (
                                                    <div key={i} className="sc-sess-label">
                                                        <div className="sc-sess-title">{r.title}</div>
                                                        {r.moderators && <div className="sc-sess-mod">Модераторы: {r.moderators}</div>}
                                                    </div>
                                                ) : (
                                                    (() => {
                                                        const removed = r.removed || r.type === "доклад снят";
                                                        const past = !removed && isPast(activeDay, r.end);
                                                        const type = r.type ?? "доклад";
                                                        const color = kindColor(r.type);
                                                        return (
                                                            <div key={i} className={`sc-talk${past ? " past" : ""}${removed ? " removed" : ""}`}>
                                                                <div className="sc-talk-time">{r.start}<span>–{r.end}</span></div>
                                                                <div className="sc-talk-main">
                                                                    <div className="sc-talk-tags">
                                                                        <span className="sc-talk-type" style={{ color, borderColor: color }}>{type}</span>
                                                                        {r.online && !removed && <span className="sc-online">онлайн</span>}
                                                                        {removed && <span className="sc-removed-badge">снят</span>}
                                                                    </div>
                                                                    <div className={`sc-talk-title${removed ? " sc-strikethrough" : ""}`}>{r.title}</div>
                                                                    {r.speaker && <div className="sc-talk-speaker">{r.speaker}</div>}
                                                                    {!!r.attachments?.length && (
                                                                        <div className="sc-talk-files">
                                                                            {r.attachments.map((attachment) => (
                                                                                <a
                                                                                    key={attachment.id}
                                                                                    href={attachment.url}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="sc-talk-file"
                                                                                >
                                                                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                                                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                                                        <polyline points="14,2 14,8 20,8" />
                                                                                    </svg>
                                                                                    <span>{attachment.name}</span>
                                                                                </a>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        );
                                                    })()
                                                ),
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
        .sc-main { min-height: 100vh; background: #141B4D; }
        .sc-container { max-width: 1100px; margin: 0 auto; }

        .sc-hero { padding: 140px 48px 50px; background: linear-gradient(155deg, #080C24 0%, #141B4D 100%); }
        .sc-label { font-size: 11px; color: #6B82C4; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px; }
        .sc-title { font-size: 42px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 16px; }
        .sc-subtitle { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.7; max-width: 680px; }

        .sc-body { padding: 36px 48px 100px; }

        .sc-days { display: flex; gap: 10px; margin-bottom: 18px; flex-wrap: wrap; }
        .sc-day {
          padding: 10px 26px; border-radius: 4px; cursor: pointer;
          font-family: inherit; font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.7);
          background: rgba(107,130,196,0.1); border: 1px solid rgba(107,130,196,0.2); transition: all 0.2s ease;
        }
        .sc-day:hover { color: #fff; background: rgba(107,130,196,0.2); }
        .sc-day.active { color: #fff; background: #559CD6; border-color: #559CD6; }

        .sc-halls { display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap; }
        .sc-hall-chip {
          display: inline-flex; align-items: center; gap: 8px; padding: 7px 16px; border-radius: 20px; cursor: pointer;
          font-family: inherit; font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.65);
          background: transparent; border: 1px solid rgba(107,130,196,0.25); transition: all 0.2s ease;
        }
        .sc-hall-chip:hover { color: #fff; border-color: rgba(107,130,196,0.5); }
        .sc-hall-chip.active { color: #fff; background: rgba(85,156,214,0.18); border-color: #559CD6; }
        .sc-chip-note { font-size: 10px; color: rgba(255,255,255,0.4); }

        .sc-list { display: flex; flex-direction: column; gap: 36px; }
        .sc-hall-group { display: flex; flex-direction: column; }
        .sc-hall-head {
          display: flex; align-items: center; gap: 12px; padding-bottom: 10px; margin-bottom: 4px;
          border-bottom: 1px solid rgba(107,130,196,0.2);
        }
        .sc-hall-name { font-size: 19px; font-weight: 700; color: #fff; }
        .sc-bc { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; padding: 3px 10px; border-radius: 3px; }
        .sc-bc.on { color: #6FCF97; background: rgba(63,167,150,0.15); border: 1px solid rgba(63,167,150,0.4); }
        .sc-bc.off { color: rgba(255,255,255,0.45); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); }

        .sc-rows { display: flex; flex-direction: column; }

        .sc-sess-label { padding: 18px 14px 8px; }
        .sc-sess-title {
          font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
          color: #6FA0D8; line-height: 1.5;
        }
        .sc-sess-mod { margin-top: 4px; font-size: 12px; color: rgba(255,255,255,0.45); line-height: 1.5; }

        .sc-talk {
          position: relative; display: flex; gap: 14px; padding: 12px 14px;
          border-top: 1px solid rgba(107,130,196,0.08);
        }
        .sc-talk:hover { background: rgba(8,12,36,0.35); }
        .sc-talk.past { opacity: 0.4; }
        .sc-talk.removed { opacity: 0.5; }

        .sc-talk-time {
          flex-shrink: 0; width: 92px; font-size: 13px; font-weight: 700; color: #fff;
          font-variant-numeric: tabular-nums; line-height: 1.4;
        }
        .sc-talk-time span { font-weight: 500; color: rgba(255,255,255,0.4); }
        .sc-talk-main { flex: 1; min-width: 0; }
        .sc-talk-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; }
        .sc-talk-type {
          display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; padding: 2px 9px; border: 1px solid; border-radius: 3px; line-height: 1.5;
        }
        .sc-talk-title { font-size: 14px; color: rgba(255,255,255,0.92); line-height: 1.5; }
        .sc-strikethrough { text-decoration: line-through; color: rgba(255,255,255,0.45); }
        .sc-talk-speaker { margin-top: 4px; font-size: 12.5px; color: rgba(133,178,224,0.85); line-height: 1.5; }
        .sc-talk-files { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 10px; }
        .sc-talk-file {
          display: inline-flex; align-items: center; gap: 6px; max-width: 100%; padding: 6px 9px;
          border-radius: 4px; border: 1px solid rgba(85,156,214,0.3);
          background: rgba(85,156,214,0.08); color: #8DBCE3; text-decoration: none;
          font-size: 11px; font-weight: 600; transition: all 0.2s;
        }
        .sc-talk-file span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .sc-talk-file:hover { color: #fff; border-color: rgba(85,156,214,0.6); background: rgba(85,156,214,0.16); }
        .sc-online {
          display: inline-block; font-size: 10px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.5px; color: #6FCF97; border: 1px solid rgba(63,167,150,0.4);
          border-radius: 3px; padding: 2px 8px; line-height: 1.5;
        }
        .sc-removed-badge {
          display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.5px; color: #E08A8A; border: 1px solid rgba(224,138,138,0.4);
          border-radius: 3px; padding: 2px 8px; line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .sc-hero { padding: 120px 32px 44px; }
          .sc-title { font-size: 34px; }
          .sc-body { padding: 28px 32px 70px; }
        }
        @media (max-width: 600px) {
          .sc-hero { padding: 100px 20px 36px; }
          .sc-title { font-size: 26px; }
          .sc-subtitle { font-size: 14px; }
          .sc-body { padding: 24px 16px 56px; }
          .sc-day { padding: 8px 18px; font-size: 14px; }
          .sc-talk { flex-wrap: wrap; gap: 4px; }
          .sc-talk-time { width: 100%; }
        }
      `}</style>
        </>
    );
}
