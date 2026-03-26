"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { href: "/consultant", label: "Консультант" },
    { href: "/#about", label: "Участникам" },
    { href: "/registration", label: "Регистрация" },
    { href: "/archive", label: "Архив" },
    { href: "/contacts", label: "Контакты" },
];

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handle = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handle, { passive: true });
        return () => window.removeEventListener("scroll", handle);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const scrolled = scrollY > 60;

    return (
        <>
            <style>{`
        .header-inner {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 64px; display: flex; align-items: center;
          justify-content: space-between;
          max-width: 1240px; margin: 0 auto; padding: 0 48px;
        }
        .header-nav-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 0;
          position: relative;
          cursor: pointer;
          transition: color 0.3s;
        }
        .header-nav-link:hover { color: #fff; }
        .header-nav-link::after {
          content: ""; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px; background: #6b82c4; transition: width 0.3s;
        }
        .header-nav-link:hover::after { width: 100%; }

        .header-desktop-nav { display: flex; align-items: center; gap: 36px; }
        .header-date {
          color: rgba(255,255,255,0.75); font-size: 10px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase; white-space: nowrap;
        }

        .header-mobile-toggle {
          display: none;
          position: fixed;
          top: 20px;
          right: 48px;
          z-index: 1100;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          flex-direction: column;
          gap: 5px;
        }

        .header-mobile-menu {
          position: fixed; inset: 0; background: #141b4d; z-index: 1050;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 32px;
          animation: fadeIn 0.3s ease-out;
        }
        .header-mobile-menu-link {
          color: rgba(255,255,255,0.72); text-decoration: none;
          font-size: 18px; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; padding: 8px 0; transition: color 0.3s;
        }
        .header-mobile-menu-link:hover { color: #fff; }

        @media (max-width: 900px) {
          .header-inner { padding: 0 24px; }
          .header-desktop-nav { display: none !important; }
          .header-date { display: none !important; }
          .header-mobile-toggle { display: flex !important; right: 24px; }
        }
        @media (max-width: 600px) {
          .header-inner { padding: 0 20px; }
          .header-mobile-toggle { right: 20px; }
          .header-mobile-menu-link { font-size: 16px; letter-spacing: 2px; }
        }
      `}</style>

            {/* Full-width background bar */}
            <div
                style={{
                    position: "fixed", top: 0, left: 0, right: 0, height: 64, zIndex: 99,
                    background: scrolled ? "rgba(8,12,36,0.94)" : "transparent",
                    backdropFilter: scrolled ? "blur(14px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(73,100,162,0.1)" : "none",
                    transition: "all 0.35s", pointerEvents: "none",
                }}
            />

            {/* Header content */}
            <header className="header-inner">
                <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                    <Image
                        src="/images/logo.png"
                        alt="GLP-PLANET"
                        width={100}
                        height={50}
                        style={{ width: "auto", height: 50, objectFit: "contain" }}
                        priority
                    />
                </Link>

                <div className="header-date">
                    01 — 03 июля 2026 · Санкт-Петербург
                </div>

                <nav className="header-desktop-nav">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="header-nav-link">
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Burger button — OUTSIDE header, fixed, always on top */}
            <button
                className="header-mobile-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Меню"
            >
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        style={{
                            width: 22, height: 2, background: "#fff", borderRadius: 1,
                            transition: "all 0.35s cubic-bezier(0.33, 1, 0.68, 1)",
                            ...(menuOpen && i === 0 ? { transform: "rotate(45deg) translate(4px, 5px)" } : {}),
                            ...(menuOpen && i === 1 ? { opacity: 0, transform: "scaleX(0)" } : {}),
                            ...(menuOpen && i === 2 ? { transform: "rotate(-45deg) translate(4px, -5px)" } : {}),
                        }}
                    />
                ))}
            </button>

            {/* Mobile fullscreen menu */}
            {menuOpen && (
                <div className="header-mobile-menu">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="header-mobile-menu-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}