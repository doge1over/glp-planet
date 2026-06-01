"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main className="al-main">
            <div className="al-card">
                <div className="al-brand">GLP-PLANET</div>
                <h1 className="al-title">Админ-панель</h1>
                <p className="al-sub">Управление расписанием конференции</p>

                <div className="al-demo">
                    Демо-версия — авторизация не подключена.
                </div>

                {/* Форма-заглушка: реального входа нет, кнопка просто открывает редактор */}
                <form className="al-form" onSubmit={(e) => e.preventDefault()}>
                    <label className="al-field">
                        <span>E-mail</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@glp-planet.ru"
                            autoComplete="off"
                        />
                    </label>
                    <label className="al-field">
                        <span>Пароль</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            autoComplete="off"
                        />
                    </label>

                    <Link href="/admin/program" className="al-btn">
                        Войти в демо-режиме
                    </Link>
                </form>

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
        .al-sub { font-size: 14px; color: rgba(255,255,255,0.55); margin-bottom: 24px; }
        .al-demo {
          padding: 10px 14px; margin-bottom: 24px;
          background: rgba(196,139,90,0.12);
          border: 1px solid rgba(196,139,90,0.35);
          border-left: 3px solid #C48B5A;
          border-radius: 4px;
          color: rgba(255,255,255,0.85); font-size: 13px;
        }
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
        .al-btn {
          margin-top: 8px; padding: 13px; border-radius: 6px;
          background: #559CD6; color: #fff;
          font-size: 15px; font-weight: 600; text-align: center;
          text-decoration: none; transition: background 0.2s;
        }
        .al-btn:hover { background: #4A8BC2; }
        .al-back {
          display: block; margin-top: 24px; text-align: center;
          color: rgba(255,255,255,0.5); font-size: 13px; text-decoration: none;
          transition: color 0.2s;
        }
        .al-back:hover { color: #fff; }
      `}</style>
        </main>
    );
}
