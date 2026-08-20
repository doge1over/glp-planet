"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProtectedVideos from "@/components/ProtectedVideos";

declare global {
    interface Window {
        initIframe?: (id: string) => void;
        destroyIframe?: (name: string) => void;
    }
}

type Room = {
    hash: string;
    activityId: string;
    label: string;
};

const ROOMS: Room[] = [
    { hash: "YpiOqOhG", activityId: "10741", label: "1. Зал «Санкт-Петербург»" },
    { hash: "QXbaznQV", activityId: "10742", label: "2. Зал «Стрельна»" },
    { hash: "liBQmque", activityId: "10743", label: "3. Зал «Выборг»" },
];

const MODE = "platform";

export default function BroadcastPage() {
    const [activeHash, setActiveHash] = useState<string>(ROOMS[0].hash);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        const room = ROOMS.find((r) => r.hash === activeHash);
        if (!room) return;

        const containerId = `pml-iframe-container-${room.hash}-${MODE}`;
        const iframeName = `pml-iframe-${room.hash}-${MODE}`;
        const src = `https://embed-cdn.mashroom.online/?hash=${room.hash}`;

        const div = document.createElement("div");
        div.setAttribute("id", containerId);
        div.setAttribute("iframe-name", iframeName);
        div.setAttribute("src", src);
        div.setAttribute("mode", MODE);
        div.setAttribute("activity-id", room.activityId);
        div.classList.add(`pml-container-iframe-${MODE}`);

        content.innerHTML = "";
        content.appendChild(div);

        let intervalId: ReturnType<typeof setInterval> | null = null;

        const tryInit = () => {
            if (window.initIframe) {
                window.initIframe(containerId);
                return true;
            }
            return false;
        };

        if (!tryInit()) {
            intervalId = setInterval(() => {
                if (tryInit() && intervalId) clearInterval(intervalId);
            }, 50);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
            if (window.destroyIframe) {
                try {
                    window.destroyIframe(iframeName);
                } catch {
                    /* noop */
                }
            }
        };
    }, [activeHash]);

    return (
        <>
            <Header />
            <main className="bc-main">
                <section className="bc-hero">
                    <div className="bc-container">
                        <div className="bc-label">Онлайн</div>
                        <h1 className="bc-title">Трансляция конференции</h1>
                        <p className="bc-subtitle">
                            Прямая трансляция и записи сессий VII Международной научно-практической конференции GLP-PLANET
                        </p>
                        <a href="/schedule" target="_blank" rel="noopener noreferrer" className="bc-schedule-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>Онлайн расписание</span>
                        </a>
                    </div>
                </section>

                <section className="bc-player-section">
                    <div className="bc-container">
                        <div className="bc-player-wrap">
                            <div className="tabs">
                                <div className="tabs__controls">
                                    {ROOMS.map((room) => (
                                        <button
                                            key={room.hash}
                                            type="button"
                                            className={`tabs__control${room.hash === activeHash ? " active" : ""}`}
                                            onClick={() => setActiveHash(room.hash)}
                                        >
                                            {room.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="tabs__content">
                                    <div className="bc-player-frame">
                                        <div ref={contentRef} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bc-info">
                            <div className="bc-info-card">
                                <div className="bc-info-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="6" x2="12" y2="12" />
                                        <line x1="12" y1="12" x2="16" y2="14" />
                                    </svg>
                                </div>
                                <div className="bc-info-text">
                                    Если плеер не загружается — обновите страницу или попробуйте отключить блокировщик рекламы
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ProtectedVideos />
            </main>
            <Footer />

            <link
                rel="stylesheet"
                href="https://embed-cdn.mashroom.online/iframe/css/index.css"
            />
            <Script
                src="https://embed-cdn.mashroom.online/iframe/js/index.js"
                strategy="afterInteractive"
            />

            <style>{`
        .bc-main {
          min-height: 100vh;
          background: #141B4D;
        }
        .bc-container { max-width: 1240px; margin: 0 auto; }

        .bc-hero {
          padding: 140px 48px 60px;
          background: linear-gradient(155deg, #080C24 0%, #141B4D 100%);
        }
        .bc-label {
          font-size: 11px; color: #6B82C4; font-weight: 600;
          text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;
        }
        .bc-title {
          font-size: 42px; font-weight: 700; color: #fff;
          line-height: 1.2; margin-bottom: 16px;
        }
        .bc-subtitle {
          font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.7;
          max-width: 600px;
        }
        .bc-schedule-btn {
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: 24px; padding: 12px 24px;
          border: 1px solid #559CD6; border-radius: 4px;
          background: transparent; color: #fff;
          font-size: 15px; font-weight: 600; text-decoration: none;
          transition: all 0.2s ease;
        }
        .bc-schedule-btn:hover { background: #559CD6; }
        .bc-schedule-btn svg { flex-shrink: 0; color: #559CD6; transition: color 0.2s ease; }
        .bc-schedule-btn:hover svg { color: #fff; }

        .bc-player-section {
          padding: 50px 48px 100px;
          background: #141B4D;
        }

        .bc-player-wrap {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto 32px;
          border-radius: 8px;
          background: #000;
          box-shadow: 0 30px 80px rgba(0,0,0,0.4);
          border: 1px solid rgba(107,130,196,0.15);
        }

        .tabs {
          --border-color: #559CD6;
          --bg-color: #FFFFFF;
          --text-color: #559CD6;
          --bg-active-color: #559CD6;
          --text-active-color: #FFFFFF;
        }
        .tabs__controls {
          display: flex;
          flex-wrap: wrap;
        }
        .tabs__control {
          position: relative;
          padding: 8px 24px;
          flex: 1 50%;
          font-size: 20px;
          line-height: 1.6;
          color: var(--text-color);
          letter-spacing: 0.9px;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          border: none;
          box-shadow: 0 0 0 1px var(--border-color);
          background-color: var(--bg-color);
          border-radius: 0;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .tabs__content {
          margin-top: 1px;
          width: 100%;
        }
        .tabs__control.active {
          cursor: initial;
          color: var(--text-active-color);
          background-color: var(--bg-active-color);
        }
        @media (min-width: 1024px) {
          .tabs__control {
            flex: 1 20%;
          }
        }

        .bc-player-frame {
          width: 100%;
        }
        .bc-player-frame > div {
          width: 100%;
        }
        .bc-player-frame iframe {
          width: 100% !important;
          border: 0;
          display: block;
        }

        .bc-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .bc-info-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          background: rgba(73,100,162,0.1);
          border: 1px solid rgba(107,130,196,0.18);
          border-left: 3px solid #6B82C4;
          border-radius: 4px;
        }
        .bc-info-icon {
          flex-shrink: 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(107,130,196,0.18);
          color: #6B82C4;
        }
        .bc-info-text {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          padding-top: 7px;
        }

        @media (max-width: 1024px) {
          .bc-hero { padding: 120px 32px 48px; }
          .bc-title { font-size: 34px; }
          .bc-player-section { padding: 40px 32px 70px; }
          .tabs__control { font-size: 16px; padding: 8px 16px; }
        }
        @media (max-width: 768px) {
          .tabs__control { font-size: 14px; padding: 8px 12px; letter-spacing: 0.5px; }
        }
        @media (max-width: 600px) {
          .bc-hero { padding: 100px 20px 36px; }
          .bc-label { font-size: 10px; letter-spacing: 2px; }
          .bc-title { font-size: 26px; margin-bottom: 12px; }
          .bc-subtitle { font-size: 14px; line-height: 1.65; }
          .bc-player-section { padding: 28px 16px 56px; }
          .bc-player-wrap { border-radius: 6px; margin-bottom: 20px; }
          .bc-info-card { padding: 14px 16px; gap: 12px; }
          .bc-info-icon { width: 32px; height: 32px; }
          .bc-info-icon svg { width: 16px; height: 16px; }
          .bc-info-text { font-size: 12px; padding-top: 5px; }
          .tabs__control { font-size: 12px; padding: 6px 8px; letter-spacing: 0.3px; }
        }
      `}</style>
        </>
    );
}
