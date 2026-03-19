import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Архив конференций — GLP-Planet",
    description: "Архив конференций GLP-PLANET с 2020 по 2025 год",
};

const conferences = [
    { year: 2020, roman: "I", label: "GLP — Planet конференция 1.0", img: "/images/archive/2020.jpg", href: "https://glp-planet.com/conference2020/" },
    { year: 2021, roman: "II", label: "GLP — Planet конференция 2.0", img: "/images/archive/2021.jpg", href: "https://glp-planet.com/glp-planet-konferencziya-2021/" },
    { year: 2022, roman: "III", label: "GLP — Planet конференция 3.0", img: "/images/archive/2022.jpg", href: "https://glp-planet.com/glp-planet-konferencziya-2022/" },
    { year: 2023, roman: "IV", label: "GLP — Planet конференция 4.0", img: "/images/archive/2023.jpg", href: "https://glp-planet.com/conference2023/" },
    { year: 2024, roman: "V", label: "GLP — Planet конференция 5.0", img: "/images/archive/2024.jpg", href: "https://glp-planet.com/glp-planet-konferencziya-2024/" },
    { year: 2025, roman: "VI", label: "GLP — Planet конференция 6.0", img: "/images/archive/2020.jpg", href: "https://glp-planet.com/glp-planet-konferencziya-2025/" },
];

export default function ArchivePage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                <section
                    style={{
                        padding: "140px 48px 60px",
                        background: "linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%)",
                    }}
                >
                    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                        <div style={{ fontSize: 11, color: "#6B82C4", fontWeight: 600, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>
                            История
                        </div>
                        <h1 style={{ fontSize: 42, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
                            Архив конференций
                        </h1>
                        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 560 }}>
                            Все прошедшие конференции GLP-PLANET
                        </p>
                    </div>
                </section>

                <section style={{ padding: "80px 48px 100px" }}>
                    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                        <div className="archive-page-grid">
                            {conferences.map((conf) => (
                                <a key={conf.year} href={conf.href} target="_blank" rel="noopener noreferrer" className="archive-card">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={conf.img} alt={conf.label} className="archive-card-img" />
                                    <div className="archive-card-overlay" />
                                    <div className="archive-card-content">
                                        <div className="archive-card-year">{conf.year}</div>
                                        <div className="archive-card-label">{conf.label}</div>
                                        <div className="archive-card-btn">Перейти</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
        .archive-page-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .archive-card {
          display: block;
          position: relative;
          overflow: hidden;
          border-radius: 6px;
          aspect-ratio: 1.5;
          text-decoration: none;
        }
        .archive-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .archive-card:hover .archive-card-img {
          transform: scale(1.12);
        }
        .archive-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20, 27, 77, 0.88) 0%,
            rgba(20, 27, 77, 0.55) 50%,
            rgba(20, 27, 77, 0.4) 100%
          );
          transition: background 0.6s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .archive-card:hover .archive-card-overlay {
          background: linear-gradient(
            to top,
            rgba(20, 27, 77, 0.92) 0%,
            rgba(20, 27, 77, 0.6) 50%,
            rgba(20, 27, 77, 0.45) 100%
          );
        }
        .archive-card-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px;
          z-index: 2;
        }
        .archive-card-year {
          font-size: 52px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          margin-bottom: 6px;
        }
        .archive-card-label {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 16px;
        }
        .archive-card-btn {
          display: inline-block;
          padding: 8px 22px;
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 3px;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'Exo 2', sans-serif;
          width: fit-content;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .archive-card:hover .archive-card-btn {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 900px) {
          .archive-page-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 500px) {
          .archive-page-grid {
            grid-template-columns: 1fr;
          }
          .archive-card {
            aspect-ratio: 1.6;
          }
        }
      `}</style>
        </>
    );
}