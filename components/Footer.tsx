"use client";

import Link from "next/link";
import Image from "next/image";
import { IconMail, IconPhone, IconChevron } from "./Icons";

const navItems = [
    { href: "/", label: "Главная" },
    { href: "/consultant", label: "Консультант" },
    { href: "/registration", label: "Регистрация" },
    { href: "/archive", label: "Архив" },
    { href: "/contacts", label: "Контакты" },
];

export default function Footer() {
    return (
        <footer id="contacts" className="footer-section">
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="footer-grid">
                    <div>
                        <div style={{ marginBottom: 18, display: "flex", alignItems: "center", gap: 16 }}>
                            <Image src="/images/logo.png" alt="GLP-PLANET" width={160} height={80} style={{ width: "auto", height: 80, objectFit: "contain" }} />
                            <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.12)" }} />
                            <Image src="/images/RusLASA_logo.png" alt="Rus-LASA" width={160} height={80} style={{ width: "auto", height: 80, objectFit: "contain" }} />
                        </div>
                        <p style={{ lineHeight: 1.8, fontSize: 13, maxWidth: 360 }}>
                            Конференция в области надлежащей лабораторной практики, фармакологии и доклинических исследований.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-heading">Контакты</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 13 }}>
                            <a href="mailto:sci.secretary@glp-planet.com" className="footer-contact-link">
                                <IconMail /> sci.secretary@glp-planet.com
                            </a>
                            <a href="tel:+79810410145" className="footer-contact-link">
                                <IconPhone /> +7 (981) 041-01-45
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading">Разделы</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                            {navItems.map((item) => (
                                <Link key={item.href} href={item.href} className="footer-link">
                                    <IconChevron />{item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>© 2026 GLP-PLANET</div>
                    <div>Совместно с Rus-LASA</div>
                </div>
            </div>

            <style>{`
        .footer-section { padding: 64px 48px 28px; background: var(--dark); color: rgba(255,255,255,0.6); }
        .footer-heading {
          color: #fff; font-weight: 600; margin-bottom: 16px;
          font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase;
        }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 44px; margin-bottom: 48px; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08); padding-top: 18px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 10px; font-size: 11px; color: rgba(255,255,255,0.4);
        }
        .footer-link {
          color: rgba(255,255,255,0.55); font-size: 13px; text-decoration: none;
          transition: color 0.3s; display: flex; align-items: center; gap: 4px;
        }
        .footer-link:hover { color: #fff; }
        .footer-contact-link {
          color: rgba(255,255,255,0.6); text-decoration: none;
          transition: color 0.3s; display: flex; align-items: center; gap: 8px;
        }
        .footer-contact-link:hover { color: #fff; }

        @media (max-width: 1024px) {
          .footer-section { padding: 48px 32px 24px; }
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-section { padding: 40px 20px 20px; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
        </footer>
    );
}