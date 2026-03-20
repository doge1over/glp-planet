"use client";

import Reveal from "./Reveal";
import Image from "next/image";

const years = [
    { year: 2020, roman: "I", label: "GLP — Planet конференция 1.0", img: "/images/archive/2020.jpg", href: "https://glp-planet.com/conference2020/" },
    { year: 2021, roman: "II", label: "GLP — Planet конференция 2.0", img: "/images/archive/2021.jpg", href: "https://glp-planet.com/glp-planet-konferencziya-2021/" },
    { year: 2022, roman: "III", label: "GLP — Planet конференция 3.0", img: "/images/archive/2022.jpg", href: "https://glp-planet.com/glp-planet-konferencziya-2022/" },
    { year: 2023, roman: "IV", label: "GLP — Planet конференция 4.0", img: "/images/archive/2023.jpg", href: "https://glp-planet.com/conference2023/" },
    { year: 2024, roman: "V", label: "GLP — Planet конференция 5.0", img: "/images/archive/2024.jpg", href: "https://glp-planet.com/glp-planet-konferencziya-2024/" },
    { year: 2025, roman: "VI", label: "GLP — Planet конференция 6.0", img: "/images/archive/2025.jpg", href: "https://glp-planet.com/glp-planet-konferencziya-2025/" },
];

export default function ArchiveSection() {
    return (
        <section id="archive-section" className="archive-home-section">
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <Reveal><div className="section-label">История</div></Reveal>
                <Reveal delay={60}><h2 className="section-title" style={{ marginBottom: 44 }}>Архив конференций</h2></Reveal>

                <div className="archive-home-grid">
                    {years.map((item, i) => (
                        <Reveal key={item.year} delay={120 + i * 50}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="archive-home-card">
                                <Image src={item.img} alt={item.label} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" className="archive-home-card-img" />
                                <div className="archive-home-card-overlay" />
                                <div className="archive-home-card-content">
                                    <div className="archive-home-card-year">{item.year}</div>
                                    <div className="archive-home-card-label">{item.label}</div>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>

            <style>{`
        .archive-home-section { padding: 110px 48px; background: var(--light); }
        .archive-home-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .archive-home-card {
          display: block; position: relative; overflow: hidden;
          border-radius: 4px; aspect-ratio: 1.5; text-decoration: none;
        }
        .archive-home-card-img {
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .archive-home-card:hover .archive-home-card-img { transform: scale(1.12); }
        .archive-home-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(20,27,77,0.85) 0%, rgba(20,27,77,0.5) 50%, rgba(20,27,77,0.35) 100%);
          transition: background 0.6s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .archive-home-card:hover .archive-home-card-overlay {
          background: linear-gradient(to top, rgba(20,27,77,0.9) 0%, rgba(20,27,77,0.55) 50%, rgba(20,27,77,0.4) 100%);
        }
        .archive-home-card-content {
          position: absolute; inset: 0; display: flex; flex-direction: column;
          justify-content: flex-end; padding: 22px; z-index: 2;
        }
        .archive-home-card-year { font-size: 36px; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 4px; }
        .archive-home-card-label { font-size: 12px; color: rgba(255,255,255,0.55); }

        @media (max-width: 1024px) { .archive-home-section { padding: 80px 32px; } }
        @media (max-width: 900px) { .archive-home-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) {
          .archive-home-section { padding: 60px 20px; }
          .archive-home-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
}