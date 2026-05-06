"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

declare global {
    interface Window {
        initIframe?: (id: string) => void;
    }
}

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set custom attributes that the Mashroom script reads
        const el = containerRef.current;
        if (!el) return;

        el.setAttribute("iframe-name", "pml-iframe-dsHlHhQP-platform");
        el.setAttribute("src", "https://embed-cdn.mashroom.online/?hash=dsHlHhQP");
        el.setAttribute("mode", "platform");
        el.setAttribute("activity-id", "10184");

        const containerId = "pml-iframe-container-dsHlHhQP-platform";

        // Try to init immediately, otherwise poll until the script loads
        const tryInit = () => {
            if (window.initIframe) {
                window.initIframe(containerId);
                return true;
            }
            return false;
        };

        if (!tryInit()) {
            const intervalId = setInterval(() => {
                if (tryInit()) clearInterval(intervalId);
            }, 50);
            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                <section className="bc-hero">
                    <div className="bc-container">
                        <div className="bc-label">Онлайн</div>
                        <h1 className="bc-title">Трансляция конференции</h1>
                        <p className="bc-subtitle">
                            Прямая трансляция и записи сессий VII Международной научно-практической конференции GLP-PLANET
                        </p>
                    </div>
                </section>

                <section className="bc-player-section">
                    <div className="bc-container">
                        <div className="bc-player-wrap">
                            <div className="bc-player-frame">
                                <div
                                    ref={containerRef}
                                    id="pml-iframe-container-dsHlHhQP-platform"
                                />
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
            </main>
            <Footer />

            <Script
                src="https://embed-cdn.mashroom.online/iframe/js/index.js"
                strategy="afterInteractive"
            />

            <style>{`
        .bc-container { max-width: 1200px; margin: 0 auto; }

        .bc-hero {
          padding: 140px 48px 60px;
          background: linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%);
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

        .bc-player-section {
          padding: 60px 48px 100px;
          background: linear-gradient(155deg, #0D1330 0%, #141B4D 50%, #1A2460 100%);
        }

        .bc-player-wrap {
          width: 100%;
          margin-bottom: 28px;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 30px 80px rgba(0,0,0,0.4);
          border: 1px solid rgba(107,130,196,0.15);
        }

        /* Responsive 16:9 frame */
        .bc-player-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }
        .bc-player-frame > div {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .bc-player-frame iframe {
          width: 100% !important;
          height: 100% !important;
          border: 0;
          display: block;
        }

        .bc-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
          .bc-player-section { padding: 48px 32px 80px; }
        }
        @media (max-width: 600px) {
          .bc-hero { padding: 100px 20px 36px; }
          .bc-label { font-size: 10px; letter-spacing: 2px; }
          .bc-title { font-size: 26px; margin-bottom: 12px; }
          .bc-subtitle { font-size: 14px; line-height: 1.65; }
          .bc-player-section { padding: 32px 16px 56px; }
          .bc-player-wrap { border-radius: 6px; margin-bottom: 20px; }
          .bc-info-card { padding: 14px 16px; gap: 12px; }
          .bc-info-icon { width: 32px; height: 32px; }
          .bc-info-icon svg { width: 16px; height: 16px; }
          .bc-info-text { font-size: 12px; padding-top: 5px; }
        }
      `}</style>
        </>
    );
}
