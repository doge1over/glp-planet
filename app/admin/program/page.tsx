"use client";

import Link from "next/link";
import { useState } from "react";

type SessionType = "доклад" | "дискуссия" | "перерыв" | "регистрация" | "церемония";
const TYPES: SessionType[] = ["доклад", "дискуссия", "перерыв", "регистрация", "церемония"];

interface Item {
    id: number;
    start: string;
    end: string;
    title: string;
    speaker: string;
    type: SessionType;
}

const HALLS = ["Санкт-Петербург", "Стрельна", "Выборг"] as const;
type Hall = (typeof HALLS)[number];

const DAYS = [
    { id: "2026-07-01", label: "1 июля" },
    { id: "2026-07-02", label: "2 июля" },
    { id: "2026-07-03", label: "3 июля" },
];

let nextId = 100;

// Демо-данные. В рабочей версии загружаются из базы через Prisma.
const INITIAL: Item[] = [
    { id: 1, start: "09:00", end: "10:00", title: "Регистрация участников", speaker: "", type: "регистрация" },
    { id: 2, start: "10:00", end: "10:30", title: "Торжественное открытие конференции", speaker: "", type: "церемония" },
    { id: 3, start: "10:30", end: "12:00", title: "GLP-инжиниринг: инженерные решения для испытательных центров", speaker: "Докладчик уточняется", type: "доклад" },
    { id: 4, start: "12:00", end: "12:30", title: "Кофе-брейк", speaker: "", type: "перерыв" },
];

export default function AdminProgramPage() {
    const [day, setDay] = useState(DAYS[0].id);
    const [hall, setHall] = useState<Hall>(HALLS[0]);
    const [items, setItems] = useState<Item[]>(INITIAL);
    const [toast, setToast] = useState<string | null>(null);

    const update = (id: number, patch: Partial<Item>) =>
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)));

    const remove = (id: number) => setItems((prev) => prev.filter((it) => it.id !== id));

    const add = () =>
        setItems((prev) => [
            ...prev,
            { id: ++nextId, start: "", end: "", title: "", speaker: "", type: "доклад" },
        ]);

    const fakeSave = () => {
        setToast("Демо-режим: изменения не сохраняются (база данных не подключена).");
        setTimeout(() => setToast(null), 3500);
    };

    return (
        <div className="ap-wrap">
            <header className="ap-top">
                <div className="ap-top-left">
                    <div className="ap-brand">GLP-PLANET · Админ</div>
                    <h1 className="ap-h1">Расписание конференции</h1>
                </div>
                <div className="ap-top-right">
                    <Link href="/schedule" className="ap-link" target="_blank">Открыть публичную страницу ↗</Link>
                    <Link href="/admin/login" className="ap-link">Выйти</Link>
                </div>
            </header>

            <div className="ap-demo">
                Демо-версия редактора. Изменения хранятся только в браузере и сбрасываются при перезагрузке —
                база данных, авторизация и сохранение будут подключены позже.
            </div>

            <div className="ap-controls">
                <div className="ap-seg">
                    {DAYS.map((d) => (
                        <button key={d.id} className={`ap-seg-btn${d.id === day ? " active" : ""}`} onClick={() => setDay(d.id)}>
                            {d.label}
                        </button>
                    ))}
                </div>
                <div className="ap-seg">
                    {HALLS.map((h) => (
                        <button key={h} className={`ap-seg-btn${h === hall ? " active" : ""}`} onClick={() => setHall(h)}>
                            {h}
                        </button>
                    ))}
                </div>
            </div>

            <div className="ap-table">
                <div className="ap-row ap-head">
                    <div>Начало</div>
                    <div>Конец</div>
                    <div>Тип</div>
                    <div>Название</div>
                    <div>Докладчик</div>
                    <div />
                </div>

                {items.length === 0 && <div className="ap-empty">Нет сессий. Нажмите «Добавить сессию».</div>}

                {items.map((it) => (
                    <div key={it.id} className="ap-row">
                        <input className="ap-in" value={it.start} placeholder="10:00" onChange={(e) => update(it.id, { start: e.target.value })} />
                        <input className="ap-in" value={it.end} placeholder="11:30" onChange={(e) => update(it.id, { end: e.target.value })} />
                        <select className="ap-in" value={it.type} onChange={(e) => update(it.id, { type: e.target.value as SessionType })}>
                            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <input className="ap-in" value={it.title} placeholder="Название сессии" onChange={(e) => update(it.id, { title: e.target.value })} />
                        <input className="ap-in" value={it.speaker} placeholder="—" onChange={(e) => update(it.id, { speaker: e.target.value })} />
                        <button className="ap-del" onClick={() => remove(it.id)} title="Удалить" aria-label="Удалить">✕</button>
                    </div>
                ))}
            </div>

            <div className="ap-actions">
                <button className="ap-add" onClick={add}>+ Добавить сессию</button>
                <button className="ap-save" onClick={fakeSave}>Сохранить</button>
            </div>

            {toast && <div className="ap-toast">{toast}</div>}

            <style>{`
        .ap-wrap {
          min-height: 100vh; padding: 32px 40px 80px;
          background: #0E1330; color: #fff;
          font-family: 'Exo 2', sans-serif;
        }
        .ap-top {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 20px; flex-wrap: wrap; margin-bottom: 20px;
        }
        .ap-brand { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #6B82C4; font-weight: 600; margin-bottom: 6px; }
        .ap-h1 { font-size: 26px; font-weight: 700; }
        .ap-top-right { display: flex; gap: 18px; align-items: center; }
        .ap-link { color: rgba(255,255,255,0.6); font-size: 13px; text-decoration: none; transition: color 0.2s; }
        .ap-link:hover { color: #fff; }

        .ap-demo {
          padding: 12px 16px; margin-bottom: 24px;
          background: rgba(196,139,90,0.12);
          border: 1px solid rgba(196,139,90,0.35);
          border-left: 3px solid #C48B5A;
          border-radius: 4px;
          color: rgba(255,255,255,0.85); font-size: 13px; line-height: 1.5;
        }

        .ap-controls { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 20px; }
        .ap-seg {
          display: inline-flex; gap: 2px; padding: 3px;
          background: rgba(8,12,36,0.5); border-radius: 6px;
          border: 1px solid rgba(107,130,196,0.2);
        }
        .ap-seg-btn {
          padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;
          background: transparent; color: rgba(255,255,255,0.6);
          font-family: inherit; font-size: 13px; font-weight: 600; transition: all 0.15s;
        }
        .ap-seg-btn:hover { color: #fff; }
        .ap-seg-btn.active { background: #559CD6; color: #fff; }

        .ap-table {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(107,130,196,0.15);
          border-radius: 8px; overflow: hidden;
        }
        .ap-row {
          display: grid;
          grid-template-columns: 90px 90px 130px 1fr 1fr 40px;
          gap: 10px; padding: 10px 14px; align-items: center;
          border-bottom: 1px solid rgba(107,130,196,0.1);
        }
        .ap-row:last-child { border-bottom: none; }
        .ap-head {
          background: rgba(85,156,214,0.1);
          font-size: 11px; text-transform: uppercase; letter-spacing: 1px;
          color: #6B82C4; font-weight: 600;
        }
        .ap-in {
          width: 100%; padding: 9px 10px; border-radius: 5px;
          background: rgba(8,12,36,0.5);
          border: 1px solid rgba(107,130,196,0.2);
          color: #fff; font-size: 13px; font-family: inherit;
          outline: none; transition: border-color 0.2s;
        }
        .ap-in:focus { border-color: #559CD6; }
        .ap-del {
          width: 30px; height: 30px; border-radius: 5px; cursor: pointer;
          background: rgba(196,90,90,0.12); border: 1px solid rgba(196,90,90,0.3);
          color: #E08A8A; font-size: 13px; transition: all 0.15s;
        }
        .ap-del:hover { background: rgba(196,90,90,0.25); color: #fff; }
        .ap-empty { padding: 28px; text-align: center; color: rgba(255,255,255,0.4); font-size: 14px; }

        .ap-actions { display: flex; gap: 12px; margin-top: 20px; }
        .ap-add, .ap-save {
          padding: 12px 22px; border-radius: 6px; cursor: pointer;
          font-family: inherit; font-size: 14px; font-weight: 600; transition: all 0.2s;
        }
        .ap-add { background: transparent; color: #fff; border: 1px solid rgba(107,130,196,0.4); }
        .ap-add:hover { background: rgba(107,130,196,0.15); }
        .ap-save { background: #559CD6; color: #fff; border: none; }
        .ap-save:hover { background: #4A8BC2; }

        .ap-toast {
          position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
          padding: 14px 22px; border-radius: 8px;
          background: #1F2A5E; border: 1px solid rgba(196,139,90,0.5);
          color: #fff; font-size: 13px; max-width: 90vw;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        @media (max-width: 900px) {
          .ap-wrap { padding: 24px 16px 60px; }
          .ap-table { overflow-x: auto; }
          .ap-row { min-width: 720px; }
        }
      `}</style>
        </div>
    );
}
