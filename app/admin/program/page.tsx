"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { DAYS, HALLS, PROGRAM, type Hall, type TalkKind } from "@/lib/program";

const TYPES: TalkKind[] = [
    "доклад", "доклад онлайн", "доклад снят", "дискуссия", "перерыв", "обед", "выставка",
    "фуршет", "собрание", "мастер-класс", "круглый стол", "регистрация", "церемония",
];

const TYPE_COLOR: Partial<Record<TalkKind, string>> = {
    "доклад онлайн": "#7fc18f",
    "доклад снят": "#E08A8A",
};

const PW_KEY = "ap_admin_pw_v1";

interface Item {
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

function seedItems(): Item[] {
    const out: Item[] = [];
    let id = 0;
    for (const s of PROGRAM) {
        if (s.talks && s.talks.length) {
            for (const t of s.talks) {
                out.push({
                    id: id++, day: s.day, hall: s.hall,
                    start: t.start, end: t.end, title: t.title,
                    speaker: t.speaker ?? "", type: t.kind ?? "доклад",
                });
            }
        } else {
            out.push({
                id: id++, day: s.day, hall: s.hall,
                start: s.start, end: s.end, title: s.title,
                speaker: s.moderators ?? "",
                type: s.kind === "сессия" ? "доклад" : (s.kind as TalkKind),
            });
        }
    }
    return out;
}

let nextId = 100000;

export default function AdminProgramPage() {
    const [mounted, setMounted] = useState(false);
    const [pw, setPw] = useState("");
    const [authed, setAuthed] = useState(false);
    const [loginError, setLoginError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [exporting, setExporting] = useState(false);
    const [uploadingId, setUploadingId] = useState<number | null>(null);
    const [filesToDelete, setFilesToDelete] = useState<string[]>([]);
    const [verifyItemId, setVerifyItemId] = useState<number | null>(null);

    const [day, setDay] = useState<string>(DAYS[0].id);
    const [hall, setHall] = useState<Hall>(HALLS[0]);
    const [items, setItems] = useState<Item[]>([]);
    const [toast, setToast] = useState<string | null>(null);
    const [toastOk, setToastOk] = useState(true);

    useEffect(() => {
        setMounted(true);
        try {
            const saved = sessionStorage.getItem(PW_KEY);
            if (saved) { setPw(saved); loadProgram(saved); }
        } catch { /* ignore */ }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (verifyItemId === null) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setVerifyItemId(null);
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [verifyItemId]);

    async function loadProgram(password: string) {
        setLoading(true);
        setLoginError(null);
        try {
            const res = await fetch(`/api/admin/program?pw=${encodeURIComponent(password)}`);
            const data = await res.json();
            if (res.ok && data.ok) {
                const loadedItems: Item[] = Array.isArray(data.items) ? data.items : seedItems();
                setItems(
                    loadedItems.map((item) => ({
                        ...item,
                        attachments: Array.isArray(item.attachments) ? item.attachments : [],
                        verified: item.verified === true,
                    })),
                );
                setAuthed(true);
                try { sessionStorage.setItem(PW_KEY, password); } catch { /* ignore */ }
            } else {
                setAuthed(false);
                setLoginError(data.message || "Неверный пароль.");
                try { sessionStorage.removeItem(PW_KEY); } catch { /* ignore */ }
            }
        } catch {
            setLoginError("Ошибка соединения.");
        } finally {
            setLoading(false);
        }
    }

    const rows = useMemo(
        () => items.filter((it) => it.day === day && it.hall === hall),
        [items, day, hall],
    );

    const update = (id: number, patch: Partial<Item>) =>
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch, verified: false } : it)));

    const setVerified = (id: number, verified: boolean) =>
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, verified } : it)));

    const remove = (id: number) => {
        const attachmentIds = items
            .find((item) => item.id === id)
            ?.attachments?.map((attachment) => attachment.id) ?? [];
        if (attachmentIds.length) {
            setFilesToDelete((prev) => [...new Set([...prev, ...attachmentIds])]);
        }
        setItems((prev) => prev.filter((it) => it.id !== id));
    };

    const add = () =>
        setItems((prev) => [
            ...prev,
            {
                id: ++nextId,
                day,
                hall,
                start: "",
                end: "",
                title: "",
                speaker: "",
                type: "доклад",
                attachments: [],
                verified: false,
            },
        ]);

    const moveRow = (id: number, dir: -1 | 1) => {
        setItems((prev) => {
            const viewIds = prev
                .filter((it) => it.day === day && it.hall === hall)
                .map((it) => it.id);
            const pos = viewIds.indexOf(id);
            const newPos = pos + dir;
            if (newPos < 0 || newPos >= viewIds.length) return prev;
            const a = prev.findIndex((it) => it.id === id);
            const b = prev.findIndex((it) => it.id === viewIds[newPos]);
            if (a === -1 || b === -1) return prev;
            const next = [...prev];
            [next[a], next[b]] = [next[b], next[a]];
            return next;
        });
    };

    const showToast = (msg: string, ok: boolean) => {
        setToast(msg); setToastOk(ok);
        setTimeout(() => setToast(null), 3500);
    };

    const save = async () => {
        setSaving(true);
        try {
            const res = await fetch(`/api/admin/program?pw=${encodeURIComponent(pw)}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items }),
            });
            const data = await res.json();
            if (res.ok && data.ok) {
                const deletedIds = [...filesToDelete];
                if (deletedIds.length) {
                    await Promise.all(
                        deletedIds.map((fileId) =>
                            fetch(
                                `/api/admin/program/files?pw=${encodeURIComponent(pw)}&file=${encodeURIComponent(fileId)}`,
                                { method: "DELETE" },
                            ).catch(() => null),
                        ),
                    );
                    setFilesToDelete((prev) => prev.filter((fileId) => !deletedIds.includes(fileId)));
                }
                showToast("Сохранено успешно.", true);
            } else {
                showToast(data.message || "Ошибка сохранения.", false);
            }
        } catch {
            showToast("Ошибка соединения.", false);
        } finally {
            setSaving(false);
        }
    };

    const exportProgram = async () => {
        setExporting(true);
        try {
            const exportItems = DAYS.flatMap((exportDay) =>
                HALLS.flatMap((exportHall) =>
                    items.filter((item) => item.day === exportDay.id && item.hall === exportHall),
                ),
            );
            const res = await fetch(`/api/admin/program/export?pw=${encodeURIComponent(pw)}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: exportItems }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => null);
                showToast(data?.message || "Ошибка выгрузки.", false);
                return;
            }

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `raspisanie-glp-planet-2026-${new Date().toISOString().slice(0, 10)}.xlsx`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
            showToast("Расписание выгружено в Excel.", true);
        } catch {
            showToast("Ошибка соединения.", false);
        } finally {
            setExporting(false);
        }
    };

    const uploadFiles = async (id: number, files: FileList | null) => {
        if (!files?.length) return;
        setUploadingId(id);
        const uploaded: Attachment[] = [];
        const failed: string[] = [];

        try {
            for (const file of Array.from(files)) {
                const formData = new FormData();
                formData.append("file", file);
                try {
                    const res = await fetch(`/api/admin/program/files?pw=${encodeURIComponent(pw)}`, {
                        method: "POST",
                        body: formData,
                    });
                    const data = await res.json().catch(() => null);
                    if (!res.ok || !data?.attachment) {
                        failed.push(data?.message || `${file.name}: ошибка загрузки`);
                        continue;
                    }
                    uploaded.push(data.attachment as Attachment);
                } catch {
                    failed.push(`${file.name}: ошибка соединения`);
                }
            }

            if (uploaded.length) {
                setItems((prev) =>
                    prev.map((item) =>
                        item.id === id
                            ? {
                                ...item,
                                attachments: [...(item.attachments ?? []), ...uploaded],
                                verified: false,
                            }
                            : item,
                    ),
                );
            }

            if (failed.length) {
                showToast(
                    uploaded.length
                        ? `Загружено: ${uploaded.length}. Ошибок: ${failed.length}.`
                        : failed[0],
                    false,
                );
            } else {
                showToast(`Файлы загружены: ${uploaded.length}. Нажмите «Сохранить».`, true);
            }
        } finally {
            setUploadingId(null);
        }
    };

    const removeAttachment = (itemId: number, attachmentId: string) => {
        setFilesToDelete((prev) => [...new Set([...prev, attachmentId])]);
        setItems((prev) =>
            prev.map((item) =>
                item.id === itemId
                    ? {
                        ...item,
                        attachments: (item.attachments ?? []).filter((attachment) => attachment.id !== attachmentId),
                        verified: false,
                    }
                    : item,
            ),
        );
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} Б`;
        if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} КБ`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
    };

    const verifyItem = verifyItemId === null
        ? null
        : items.find((item) => item.id === verifyItemId) ?? null;

    const handleTime = (raw: string): string => {
        const d = raw.replace(/\D/g, "").slice(0, 4);
        return d.length > 2 ? d.slice(0, 2) + ":" + d.slice(2) : d;
    };

    const logout = () => {
        try { sessionStorage.removeItem(PW_KEY); } catch { /* ignore */ }
        setAuthed(false);
        setPw("");
    };

    // ─── Экран входа ───
    if (!mounted) return null;
    if (!authed) {
        return (
            <main className="al-main">
                <div className="al-card">
                    <div className="al-brand">GLP-PLANET · Админ</div>
                    <h1 className="al-title">Расписание конференции</h1>
                    <p className="al-sub">Введите пароль администратора</p>
                    <form className="al-form" onSubmit={(e) => { e.preventDefault(); loadProgram(pw); }}>
                        <label className="al-field">
                            <span>Пароль</span>
                            <input
                                type="password"
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                                placeholder="••••••••"
                                autoFocus
                                autoComplete="off"
                            />
                        </label>
                        {loginError && <div className="al-err">{loginError}</div>}
                        <button type="submit" className="al-btn" disabled={loading || !pw}>
                            {loading ? "Проверка…" : "Войти"}
                        </button>
                    </form>
                    <Link href="/" className="al-back">← На главную</Link>
                </div>
                <style>{loginStyles}</style>
            </main>
        );
    }

    // ─── Редактор ───
    return (
        <div className="ap-wrap">
            <header className="ap-top">
                <div className="ap-top-left">
                    <div className="ap-brand">GLP-PLANET · Админ</div>
                    <h1 className="ap-h1">Расписание конференции</h1>
                </div>
                <div className="ap-top-right">
                    <Link href="/admin/registrations" className="ap-link">Заявки на МК</Link>
                    <Link href="/schedule" className="ap-link" target="_blank">Публичная страница ↗</Link>
                    <button className="ap-link" onClick={logout}>Выйти</button>
                </div>
            </header>

            <div className="ap-controls">
                <div className="ap-seg">
                    {DAYS.map((d) => (
                        <button
                            key={d.id}
                            className={`ap-seg-btn${d.id === day ? " active" : ""}`}
                            onClick={() => setDay(d.id)}
                        >
                            {d.label}
                        </button>
                    ))}
                </div>
                <div className="ap-seg">
                    {HALLS.map((h) => (
                        <button
                            key={h}
                            className={`ap-seg-btn${h === hall ? " active" : ""}`}
                            onClick={() => setHall(h)}
                        >
                            {h}
                        </button>
                    ))}
                </div>
            </div>

            <div className="ap-table">
                <div className="ap-row ap-head">
                    <div />
                    <div>Начало</div>
                    <div>Конец</div>
                    <div>Тип</div>
                    <div>Название</div>
                    <div>Докладчик / организация</div>
                    <div />
                </div>

                {rows.length === 0 && (
                    <div className="ap-empty">
                        В этом зале на выбранный день событий нет. Нажмите «Добавить».
                    </div>
                )}

                {rows.map((it, idx) => (
                    <div
                        key={it.id}
                        className={`ap-row${it.type === "доклад снят" ? " row-removed" : it.type === "доклад онлайн" ? " row-online" : ""}${(it.attachments?.length ?? 0) > 0 && it.verified !== true ? " status-pending" : (it.attachments?.length ?? 0) > 0 && it.verified === true ? " status-verified" : ""}`}
                    >
                        <div className="ap-move">
                            <button
                                className="ap-mv-btn"
                                onClick={() => moveRow(it.id, -1)}
                                disabled={idx === 0}
                                title="Вверх"
                            >↑</button>
                            <button
                                className="ap-mv-btn"
                                onClick={() => moveRow(it.id, 1)}
                                disabled={idx === rows.length - 1}
                                title="Вниз"
                            >↓</button>
                        </div>
                        <input
                            className="ap-in ap-time"
                            value={it.start}
                            placeholder="10:00"
                            inputMode="numeric"
                            maxLength={5}
                            onChange={(e) => update(it.id, { start: handleTime(e.target.value) })}
                        />
                        <input
                            className="ap-in ap-time"
                            value={it.end}
                            placeholder="11:30"
                            inputMode="numeric"
                            maxLength={5}
                            onChange={(e) => update(it.id, { end: handleTime(e.target.value) })}
                        />
                        <select
                            className="ap-in"
                            value={it.type}
                            onChange={(e) => update(it.id, { type: e.target.value as TalkKind })}
                            style={{ color: TYPE_COLOR[it.type] ?? "inherit" }}
                        >
                            {TYPES.map((t) => (
                                <option key={t} value={t} style={{ color: TYPE_COLOR[t] ?? "#fff" }}>
                                    {t}
                                </option>
                            ))}
                        </select>
                        <textarea
                            className="ap-in ap-area"
                            rows={2}
                            value={it.title}
                            placeholder="Название"
                            onChange={(e) => update(it.id, { title: e.target.value })}
                        />
                        <textarea
                            className="ap-in ap-area"
                            rows={2}
                            value={it.speaker}
                            placeholder="—"
                            onChange={(e) => update(it.id, { speaker: e.target.value })}
                        />
                        <button
                            className="ap-del"
                            onClick={() => remove(it.id)}
                            title="Удалить"
                            aria-label="Удалить"
                        >✕</button>
                        <div className="ap-item-tools">
                            {(it.attachments?.length ?? 0) > 0 && (
                                <label className={`ap-review-check${it.verified === true ? " checked" : ""}`}>
                                    <input
                                        type="checkbox"
                                        checked={it.verified === true}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setVerifyItemId(it.id);
                                            } else {
                                                setVerified(it.id, false);
                                            }
                                        }}
                                    />
                                    <span>{it.verified === true ? "Проверено" : "Не проверено"}</span>
                                </label>
                            )}

                            <div className="ap-files">
                                {(it.attachments ?? []).map((attachment) => (
                                    <div className="ap-file" key={attachment.id}>
                                        <a href={attachment.url} target="_blank" rel="noopener noreferrer" title={attachment.name}>
                                            <span className="ap-file-name">{attachment.name}</span>
                                            <span className="ap-file-size">{formatFileSize(attachment.size)}</span>
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => removeAttachment(it.id, attachment.id)}
                                            title="Открепить файл"
                                            aria-label={`Открепить ${attachment.name}`}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <label className={`ap-upload${uploadingId === it.id ? " loading" : ""}`}>
                                <input
                                    type="file"
                                    multiple
                                    disabled={uploadingId !== null}
                                    accept=".pdf,.ppt,.pptx,.doc,.docx,.xls,.xlsx,.csv,.txt,.rtf,.zip,.rar,.7z,.jpg,.jpeg,.png,.webp,.mp4"
                                    onChange={(e) => {
                                        void uploadFiles(it.id, e.target.files);
                                        e.currentTarget.value = "";
                                    }}
                                />
                                {uploadingId === it.id ? "Загрузка…" : "+ Прикрепить файлы"}
                            </label>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ap-actions">
                <button className="ap-add" onClick={add}>+ Добавить строку</button>
                <button className="ap-save" onClick={save} disabled={saving}>
                    {saving ? "Сохранение…" : "Сохранить"}
                </button>
                <button className="ap-export" onClick={exportProgram} disabled={exporting}>
                    {exporting ? "Выгрузка…" : "Выгрузить в Excel"}
                </button>
            </div>

            {verifyItem && (
                <div
                    className="ap-modal-backdrop"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setVerifyItemId(null);
                    }}
                >
                    <div className="ap-modal" role="dialog" aria-modal="true" aria-labelledby="verify-modal-title">
                        <div className="ap-modal-icon">✓</div>
                        <h2 id="verify-modal-title">Подтвердить проверку файлов?</h2>
                        <p>
                            Убедитесь, что вы открыли и проверили все файлы, прикреплённые к мероприятию:
                        </p>
                        <div className="ap-modal-event">{verifyItem.title || "Без названия"}</div>
                        <ul className="ap-modal-files">
                            {(verifyItem.attachments ?? []).map((attachment) => (
                                <li key={attachment.id}>
                                    <span>{attachment.name}</span>
                                    <small>{formatFileSize(attachment.size)}</small>
                                </li>
                            ))}
                        </ul>
                        <div className="ap-modal-actions">
                            <button type="button" className="ap-modal-cancel" onClick={() => setVerifyItemId(null)}>
                                Отмена
                            </button>
                            <button
                                type="button"
                                className="ap-modal-confirm"
                                onClick={() => {
                                    setVerified(verifyItem.id, true);
                                    setVerifyItemId(null);
                                }}
                                autoFocus
                            >
                                Да, файлы проверены
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {toast && (
                <div className={`ap-toast${toastOk ? "" : " err"}`}>{toast}</div>
            )}

            <style>{editorStyles}</style>
        </div>
    );
}

const loginStyles = `
  .al-main { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; background: linear-gradient(155deg, #080C24 0%, #141B4D 100%); font-family: 'Exo 2', sans-serif; }
  .al-card { width: 100%; max-width: 400px; background: rgba(255,255,255,0.04); border: 1px solid rgba(107,130,196,0.2); border-radius: 10px; padding: 40px 36px; }
  .al-brand { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #6B82C4; font-weight: 600; margin-bottom: 16px; }
  .al-title { font-size: 24px; font-weight: 700; color: #fff; margin-bottom: 6px; }
  .al-sub { font-size: 14px; color: rgba(255,255,255,0.55); margin-bottom: 24px; }
  .al-form { display: flex; flex-direction: column; gap: 16px; }
  .al-field { display: flex; flex-direction: column; gap: 6px; }
  .al-field span { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 1px; }
  .al-field input { padding: 12px 14px; border-radius: 6px; background: rgba(8,12,36,0.5); border: 1px solid rgba(107,130,196,0.25); color: #fff; font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s; }
  .al-field input:focus { border-color: #559CD6; }
  .al-err { color: #E08A8A; font-size: 13px; font-weight: 600; }
  .al-btn { margin-top: 8px; padding: 13px; border-radius: 6px; background: #559CD6; color: #fff; font-size: 15px; font-weight: 600; text-align: center; border: none; cursor: pointer; font-family: inherit; transition: background 0.2s; }
  .al-btn:hover:not(:disabled) { background: #4A8BC2; }
  .al-btn:disabled { opacity: 0.55; cursor: default; }
  .al-back { display: block; margin-top: 24px; text-align: center; color: rgba(255,255,255,0.5); font-size: 13px; text-decoration: none; transition: color 0.2s; }
  .al-back:hover { color: #fff; }
`;

const editorStyles = `
  .ap-wrap { min-height: 100vh; padding: 32px 40px 80px; background: #0E1330; color: #fff; font-family: 'Exo 2', sans-serif; }
  .ap-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 16px; }
  .ap-brand { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #6B82C4; font-weight: 600; margin-bottom: 6px; }
  .ap-h1 { font-size: 26px; font-weight: 700; }
  .ap-top-right { display: flex; gap: 18px; align-items: center; }
  .ap-link { color: rgba(255,255,255,0.6); font-size: 13px; text-decoration: none; background: none; border: none; cursor: pointer; font-family: inherit; transition: color 0.2s; }
  .ap-link:hover { color: #fff; }

  .ap-legend { display: flex; gap: 14px; margin-bottom: 18px; }
  .ap-leg-item { font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 4px; }
  .leg-online { background: rgba(127,193,143,0.15); color: #7fc18f; border: 1px solid rgba(127,193,143,0.3); }
  .leg-removed { background: rgba(224,138,138,0.15); color: #E08A8A; border: 1px solid rgba(224,138,138,0.3); }

  .ap-controls { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 20px; }
  .ap-seg { display: inline-flex; gap: 2px; padding: 3px; flex-wrap: wrap; background: rgba(8,12,36,0.5); border-radius: 6px; border: 1px solid rgba(107,130,196,0.2); }
  .ap-seg-btn { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; background: transparent; color: rgba(255,255,255,0.6); font-family: inherit; font-size: 13px; font-weight: 600; transition: all 0.15s; }
  .ap-seg-btn:hover { color: #fff; }
  .ap-seg-btn.active { background: #559CD6; color: #fff; }

  .ap-table { background: rgba(255,255,255,0.03); border: 1px solid rgba(107,130,196,0.15); border-radius: 8px; overflow: hidden; }
  .ap-row {
    display: grid; grid-template-columns: 40px 80px 80px 130px 1.4fr 1fr 40px;
    gap: 10px; padding: 10px 14px; align-items: start;
    border-bottom: 1px solid rgba(107,130,196,0.1);
  }
  .ap-row:last-child { border-bottom: none; }
  .ap-head {
    background: rgba(85,156,214,0.1); align-items: center;
    font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6B82C4; font-weight: 600;
  }
  .row-online { background: rgba(127,193,143,0.06); border-left: 3px solid rgba(127,193,143,0.4); padding-left: 11px; }
  .row-removed { background: rgba(224,138,138,0.06); border-left: 3px solid rgba(224,138,138,0.4); padding-left: 11px; }
  .ap-row.status-pending { background: rgba(224,146,52,0.12); border-left: 3px solid #E09234; padding-left: 11px; }
  .ap-row.status-verified { background: rgba(74,174,105,0.12); border-left: 3px solid #4AAE69; padding-left: 11px; }

  .ap-move { display: flex; flex-direction: column; gap: 3px; padding-top: 2px; }
  .ap-mv-btn { width: 28px; height: 20px; border-radius: 3px; cursor: pointer; background: rgba(107,130,196,0.1); border: 1px solid rgba(107,130,196,0.2); color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 700; transition: all 0.15s; display: flex; align-items: center; justify-content: center; padding: 0; }
  .ap-mv-btn:hover:not(:disabled) { background: rgba(107,130,196,0.3); color: #fff; }
  .ap-mv-btn:disabled { opacity: 0.25; cursor: default; }

  .ap-in { width: 100%; padding: 9px 10px; border-radius: 5px; background: rgba(8,12,36,0.5); border: 1px solid rgba(107,130,196,0.2); color: #fff; font-size: 13px; font-family: inherit; outline: none; transition: border-color 0.2s; }
  .ap-in:focus { border-color: #559CD6; }
  .ap-time { font-variant-numeric: tabular-nums; letter-spacing: 1px; text-align: center; }
  .ap-area { resize: vertical; line-height: 1.4; }
  .ap-del { width: 30px; height: 30px; border-radius: 5px; cursor: pointer; margin-top: 2px; background: rgba(196,90,90,0.12); border: 1px solid rgba(196,90,90,0.3); color: #E08A8A; font-size: 13px; transition: all 0.15s; }
  .ap-del:hover { background: rgba(196,90,90,0.25); color: #fff; }
  .ap-empty { padding: 28px; text-align: center; color: rgba(255,255,255,0.4); font-size: 14px; }

  .ap-item-tools {
    grid-column: 2 / 7; display: flex; align-items: center; flex-wrap: wrap; gap: 8px;
    padding: 2px 0 3px;
  }
  .ap-review-check {
    display: inline-flex; align-items: center; gap: 7px; padding: 7px 10px;
    border: 1px solid rgba(224,146,52,0.45); border-radius: 5px;
    color: #F0AE5C; font-size: 11px; font-weight: 700; cursor: pointer;
    background: rgba(224,146,52,0.08); white-space: nowrap;
  }
  .ap-review-check.checked { color: #77D394; border-color: rgba(74,174,105,0.5); background: rgba(74,174,105,0.1); }
  .ap-review-check input { width: 15px; height: 15px; accent-color: #4AAE69; cursor: pointer; }
  .ap-files { display: flex; align-items: center; flex-wrap: wrap; gap: 7px; }
  .ap-file {
    display: inline-flex; align-items: stretch; max-width: 310px;
    border: 1px solid rgba(107,130,196,0.25); border-radius: 5px;
    background: rgba(8,12,36,0.38); overflow: hidden;
  }
  .ap-file a {
    display: flex; align-items: center; gap: 7px; min-width: 0; padding: 7px 9px;
    color: #AFC7F1; text-decoration: none; font-size: 11px;
  }
  .ap-file a:hover { color: #fff; }
  .ap-file-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .ap-file-size { flex-shrink: 0; color: rgba(255,255,255,0.35); font-size: 10px; }
  .ap-file button {
    flex-shrink: 0; width: 28px; border: 0; border-left: 1px solid rgba(107,130,196,0.2);
    background: rgba(196,90,90,0.08); color: #E08A8A; cursor: pointer; font-size: 16px;
  }
  .ap-file button:hover { background: rgba(196,90,90,0.22); color: #fff; }
  .ap-upload {
    display: inline-flex; align-items: center; padding: 7px 11px; border-radius: 5px;
    border: 1px dashed rgba(107,130,196,0.45); color: rgba(255,255,255,0.65);
    font-size: 11px; font-weight: 600; cursor: pointer; transition: all 0.2s; white-space: nowrap;
  }
  .ap-upload:hover { border-color: #559CD6; color: #fff; background: rgba(85,156,214,0.08); }
  .ap-upload.loading { cursor: wait; opacity: 0.65; }
  .ap-upload input { display: none; }

  .ap-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 20px; }
  .ap-add, .ap-save, .ap-export { padding: 12px 22px; border-radius: 6px; cursor: pointer; font-family: inherit; font-size: 14px; font-weight: 600; transition: all 0.2s; }
  .ap-add { background: transparent; color: #fff; border: 1px solid rgba(107,130,196,0.4); }
  .ap-add:hover { background: rgba(107,130,196,0.15); }
  .ap-save { background: #559CD6; color: #fff; border: none; }
  .ap-save:hover:not(:disabled) { background: #4A8BC2; }
  .ap-export { background: #2e9e6b; color: #fff; border: none; }
  .ap-export:hover:not(:disabled) { background: #268057; }
  .ap-save:disabled, .ap-export:disabled { opacity: 0.6; cursor: default; }

  .ap-modal-backdrop {
    position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center;
    padding: 20px; background: rgba(4,7,24,0.78); backdrop-filter: blur(7px);
  }
  .ap-modal {
    width: 100%; max-width: 520px; padding: 30px; border-radius: 10px;
    background: #151C43; border: 1px solid rgba(107,130,196,0.3);
    box-shadow: 0 28px 80px rgba(0,0,0,0.5);
  }
  .ap-modal-icon {
    width: 42px; height: 42px; margin-bottom: 16px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: #77D394; background: rgba(74,174,105,0.12); border: 1px solid rgba(74,174,105,0.35);
    font-size: 20px; font-weight: 800;
  }
  .ap-modal h2 { margin: 0 0 10px; color: #fff; font-size: 21px; }
  .ap-modal p { margin: 0 0 14px; color: rgba(255,255,255,0.55); font-size: 13px; line-height: 1.6; }
  .ap-modal-event {
    margin-bottom: 12px; padding: 11px 13px; border-radius: 6px;
    background: rgba(8,12,36,0.45); color: rgba(255,255,255,0.82);
    font-size: 13px; font-weight: 600; line-height: 1.45;
  }
  .ap-modal-files {
    display: flex; flex-direction: column; gap: 6px; max-height: 190px; overflow-y: auto;
    margin: 0 0 24px; padding: 0; list-style: none;
  }
  .ap-modal-files li {
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
    padding: 8px 10px; border-radius: 5px; border: 1px solid rgba(107,130,196,0.16);
    color: #AFC7F1; font-size: 12px;
  }
  .ap-modal-files li span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .ap-modal-files li small { flex-shrink: 0; color: rgba(255,255,255,0.35); }
  .ap-modal-actions { display: flex; justify-content: flex-end; gap: 10px; }
  .ap-modal-actions button {
    padding: 11px 17px; border-radius: 6px; font-family: inherit;
    font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s;
  }
  .ap-modal-cancel { color: rgba(255,255,255,0.7); background: transparent; border: 1px solid rgba(107,130,196,0.35); }
  .ap-modal-cancel:hover { color: #fff; background: rgba(107,130,196,0.12); }
  .ap-modal-confirm { color: #fff; background: #3C9D5D; border: 1px solid #3C9D5D; }
  .ap-modal-confirm:hover { background: #348A51; border-color: #348A51; }

  .ap-toast {
    position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
    padding: 14px 22px; border-radius: 8px; background: #1a3a2a;
    border: 1px solid rgba(127,193,143,0.5); color: #fff; font-size: 13px; max-width: 90vw;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  }
  .ap-toast.err { background: #3a1a1a; border-color: rgba(224,138,138,0.5); }

  @media (max-width: 900px) {
    .ap-wrap { padding: 24px 16px 60px; }
    .ap-table { overflow-x: auto; }
    .ap-row { min-width: 820px; }
  }
  @media (max-width: 600px) {
    .ap-modal { padding: 22px 18px; }
    .ap-modal-actions { flex-direction: column-reverse; }
    .ap-modal-actions button { width: 100%; }
  }
`;
