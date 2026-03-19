"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
    { href: "/consultant", label: "Консультант" },
    { href: "/#about", label: "Участникам" },
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
        .header-nav-link {
          color: rgba(255,255,255,0.55);
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
        .header-nav-link:hover {
          color: #fff;
        }
        .header-nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #6b82c4;
          transition: width 0.3s;
        }
        .header-nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 900px) {
          .header-desktop-nav {
            display: none !important;
          }
          .header-mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>

            {/* Full-width background */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 64,
                    zIndex: 99,
                    background: scrolled ? "rgba(8,12,36,0.94)" : "transparent",
                    backdropFilter: scrolled ? "blur(14px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(73,100,162,0.1)" : "none",
                    transition: "all 0.35s",
                    pointerEvents: "none",
                }}
            />

            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: 1240,
                    margin: "0 auto",
                    padding: "0 48px",
                }}
            >
                {/* Logo — image, shifted down */}
                <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center"}}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/logo.png"
                        alt="GLP-PLANET"
                        style={{ height: 50, width: "auto", objectFit: "contain" }}
                    />
                </Link>

                {/* Desktop nav */}
                <nav
                    className="header-desktop-nav"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 36,
                    }}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="header-nav-link"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <button
                    className="header-mobile-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Меню"
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 8,
                        flexDirection: "column" as const,
                        gap: 5,
                    }}
                >
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            style={{
                                width: 20,
                                height: 1.5,
                                background: "#fff",
                                borderRadius: 1,
                                transition: "all 0.3s",
                                ...(menuOpen && i === 0 ? { transform: "rotate(45deg) translateY(6px)" } : {}),
                                ...(menuOpen && i === 1 ? { opacity: 0 } : {}),
                                ...(menuOpen && i === 2 ? { transform: "rotate(-45deg) translateY(-6px)" } : {}),
                            }}
                        />
                    ))}
                </button>

                {/* Mobile fullscreen menu */}
                {menuOpen && (
                    <div
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "#141b4d",
                            zIndex: 999,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 28,
                            animation: "fadeIn 0.25s ease-out",
                        }}
                    >
                        <button
                            onClick={() => setMenuOpen(false)}
                            style={{
                                position: "absolute",
                                top: 16,
                                right: 24,
                                background: "none",
                                border: "none",
                                color: "#fff",
                                fontSize: 26,
                                cursor: "pointer",
                                fontWeight: 300,
                            }}
                        >
                            ×
                        </button>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="header-nav-link"
                                style={{ fontSize: 17, letterSpacing: 3 }}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </header>
        </>
    );
}