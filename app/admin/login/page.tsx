"use client";

import Link from "next/link";
import { useState } from "react";

const PW_KEY = "ap_admin_pw_v1";

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/program?pw=${encodeURIComponent(password)}`);
            const data = await res.json();
            if (res.ok && data.ok) {
                try { sessionStorage.setItem(PW_KEY, password); } catch { /* ignore */ }
                window.location.href = "/admin/program";
            } else {
                setError(data.message || "Неверный пароль.");
            }
        } catch {
            setError("Ошибка соединения.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="al-main">
            <div className="al-card">
                <div className="al-brand">GLP-PLANET · Админ</div>
                <h1 className="al-title">Вход в панель</h1>
                <p className="al-sub">Расписание и управление конференцией</p>

                <form className="al-form" onSubmit={handleSubmit}>
                    <label className="al-field">
                        <span>Пароль</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            autoFocus
                            autoComplete="off"
                        />
                    </label>
                    {error && <div className="al-err">{error}</div>}
                    <button type="submit" className="al-btn" disabled={loading || !password}>
                        {loading ? "Проверка…" : "Войти"}
                    </button>
                </form>

                <div className="al-divider" />

                <div className="al-links">
                    <Link href="/admin/registrations" className="al-alt-link">
                        Заявки на мастер-классы →
                    </Link>
                </div>

                <Link href="/" className="al-back">← На главную</Link>
            </div>

            <style>{`
        .al-main {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          padding: 24px;
          background: linear-gradient(155deg, #080C24 0%, #141B4D 100%);
          font-family: 'Exo 2', sans-serif;
        }
        .al-card {
          width: 100%; max-width: 400px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(107,130,196,0.2);
          border-radius: 10px;
          padding: 40px 36px;
        }
        .al-brand {
          font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
          color: #6B82C4; font-weight: 600; margin-bottom: 16px;
        }
        .al-title { font-size: 26px; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .al-sub { font-size: 14px; color: rgba(255,255,255,0.55); margin-bottom: 28px; }
        .al-form { display: flex; flex-direction: column; gap: 16px; }
        .al-field { display: flex; flex-direction: column; gap: 6px; }
        .al-field span {
          font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.7);
          text-transform: uppercase; letter-spacing: 1px;
        }
        .al-field input {
          padding: 12px 14px; border-radius: 6px;
          background: rgba(8,12,36,0.5);
          border: 1px solid rgba(107,130,196,0.25);
          color: #fff; font-size: 14px; font-family: inherit;
          outline: none; transition: border-color 0.2s;
        }
        .al-field input:focus { border-color: #559CD6; }
        .al-err { color: #E08A8A; font-size: 13px; font-weight: 600; }
        .al-btn {
          margin-top: 8px; padding: 13px; border-radius: 6px;
          background: #559CD6; color: #fff; border: none; cursor: pointer;
          font-size: 15px; font-weight: 600; font-family: inherit;
          transition: background 0.2s;
        }
        .al-btn:hover:not(:disabled) { background: #4A8BC2; }
        .al-btn:disabled { opacity: 0.55; cursor: default; }
        .al-divider { height: 1px; background: rgba(255,255,255,0.08); margin: 24px 0; }
        .al-links { display: flex; flex-direction: column; gap: 10px; }
        .al-alt-link {
          color: rgba(255,255,255,0.5); font-size: 13px; text-decoration: none;
          transition: color 0.2s;
        }
        .al-alt-link:hover { color: #fff; }
        .al-back {
          display: block; margin-top: 24px; text-align: center;
          color: rgba(255,255,255,0.35); font-size: 13px; text-decoration: none;
          transition: color 0.2s;
        }
        .al-back:hover { color: #fff; }
      `}</style>
        </main>
    );
}
