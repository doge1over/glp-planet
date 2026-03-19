"use client";

import Link from "next/link";
import { IconMail, IconPhone, IconPin, IconChevron } from "./Icons";

const navItems = [
    { href: "/consultant", label: "Консультант" },
    { href: "/#about", label: "Участникам" },
    { href: "/archive", label: "Архив" },
    { href: "/contacts", label: "Контакты" },
];

export default function Footer() {
    return (
        <footer id="contacts" style={{ padding: "64px 48px 28px", background: "var(--dark)", color: "rgba(255,255,255,0.48)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="footer-grid">
                    {/* About */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/logo.png"
                                alt="GLP-PLANET"
                                style={{ height: 80, width: "auto", objectFit: "contain" }}
                            />
                        </div>
                        <p style={{ lineHeight: 1.8, fontSize: 13, maxWidth: 360 }}>
                            Конференция в области надлежащей лабораторной практики, фармакологии и доклинических исследований.
                        </p>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: 16, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase" }}>
                            Контакты
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 13 }}>
                            <a href="mailto:sci.secretary@glp-planet.com" className="footer-contact-link" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <IconMail /> sci.secretary@glp-planet.com
                            </a>
                            <a href="tel:+79810410145" className="footer-contact-link" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <IconPhone /> +7 (981) 041-01-45
                            </a>
                        </div>
                    </div>

                    {/* Nav */}
                    <div>
                        <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: 16, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase" }}>
                            Разделы
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="footer-link"
                                >
                                    <IconChevron />
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        paddingTop: 18,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 10,
                        fontSize: 11,
                        color: "rgba(255,255,255,0.25)",
                    }}
                >
                    <div>© 2026 GLP-PLANET</div>
                    <div>Совместно с Rus-LASA</div>
                </div>
            </div>

            <style jsx>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr;
                    gap: 44px;
                    margin-bottom: 48px;
                }
                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            <style jsx global>{`
                .footer-link {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 13px;
                    cursor: pointer;
                    text-align: left;
                    text-decoration: none;
                    transition: color 0.3s;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                .footer-link:hover {
                    color: #fff;
                }
                .footer-contact-link {
                    color: rgba(255, 255, 255, 0.48);
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .footer-contact-link:hover {
                    color: #fff;
                }
            `}</style>
        </footer>
    );
}