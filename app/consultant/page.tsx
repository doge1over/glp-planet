import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Консультант GLP-PLANET — Монографии",
    description:
        "Коллективная монография «Консультант GLP-PLANET. Мнение фармацевтической отрасли»",
};

const monographs = [
    {
        year: 2021,
        cover: "/images/monographs/2021.jpg",
        pdf: "https://glp-planet.com/wp-content/uploads/2022/11/monografiya_consultant_glp-planet_2021_final_compressed.pdf",
    },
    {
        year: 2022,
        cover: "/images/monographs/2022.jpg",
        pdf: "https://glp-planet.com/wp-content/uploads/2022/11/monografiya_consultant_glp-planet_2022f.pdf",
    },
    {
        year: 2023,
        cover: "/images/monographs/2023.png",
        pdf: "https://cdn.glp-planet.com/2023/book/consultant-glp-planet-2023.pdf",
    },
    {
        year: 2024,
        cover: "/images/monographs/2024.png",
        pdf: "https://cdn.glp-planet.com/2024/book/consultant-glp-planet-2024.pdf",
    },
    {
        year: 2025,
        cover: "/images/monographs/2025.jpg",
        pdf: "https://cdn.glp-planet.com/2025/book/consultant-glp-planet-2025.pdf",
    },
];

export default function ConsultantPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                {/* Hero */}
                <section
                    style={{
                        padding: "140px 48px 60px",
                        background:
                            "linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%)",
                    }}
                >
                    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                        <div
                            style={{
                                fontSize: 11,
                                color: "#6B82C4",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: 3,
                                marginBottom: 12,
                            }}
                        >
                            Монографии
                        </div>
                        <h1
                            style={{
                                fontSize: 42,
                                fontWeight: 700,
                                color: "#fff",
                                lineHeight: 1.2,
                                marginBottom: 16,
                            }}
                        >
                            Консультант GLP-PLANET
                        </h1>
                        <p
                            style={{
                                fontSize: 16,
                                color: "rgba(255,255,255,0.45)",
                                lineHeight: 1.8,
                                maxWidth: 620,
                            }}
                        >
                            По итогам каждой конференции выпускается коллективная монография
                            «Консультант GLP-PLANET. Мнение фармацевтической отрасли»
                        </p>
                    </div>
                </section>

                {/* Monographs grid */}
                <section style={{ padding: "80px 48px 100px" }}>
                    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                        <div className="monographs-grid">
                            {monographs.map((m) => (
                                <a
                                    key={m.year}
                                    href={m.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="monograph-card"
                                >
                                    <div className="monograph-cover">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={m.cover}
                                            alt={`Консультант GLP-PLANET ${m.year}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block",
                                            }}
                                        />
                                        <div className="monograph-overlay">
                                            <div className="monograph-overlay-btn">Читать</div>
                                        </div>
                                    </div>

                                    <div style={{ padding: "20px 4px 12px", textAlign: "center" }}>
                                        <div
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: "var(--primary)",
                                                letterSpacing: 0.5,
                                            }}
                                        >
                                            Консультант GLP-PLANET
                                        </div>
                                        <div
                                            style={{
                                                fontSize: 28,
                                                fontWeight: 800,
                                                color: "var(--primary)",
                                                marginTop: 4,
                                            }}
                                        >
                                            {m.year}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
        .monographs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .monograph-card {
        text-decoration: none;
        display: block;
        transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .monograph-card:hover {
        transform: translateY(-6px);
        }
        .monograph-cover {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          background: var(--light);
          aspect-ratio: 0.71;
          box-shadow: 0 6px 24px rgba(20, 27, 77, 0.1);
          transition: box-shadow 0.35s;
        }
        .monograph-card:hover .monograph-cover {
          box-shadow: 0 20px 50px rgba(20, 27, 77, 0.2);
        }
        .monograph-overlay {
        position: absolute;
        inset: 0;
        background: rgba(8, 12, 36, 0.75);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 100px;
        opacity: 0;
        transition: opacity 0.3s;
        }
        .monograph-card:hover .monograph-overlay {
          opacity: 1;
        }
        .monograph-overlay-btn {
          padding: 12px 36px;
          border: 1.5px solid rgba(255,255,255,0.6);
          border-radius: 3px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-family: 'Exo 2', sans-serif;
          transition: background 0.3s, border-color 0.3s;
        }
        .monograph-overlay-btn:hover {
          background: rgba(255,255,255,0.15);
          border-color: #fff;
        }
        @media (max-width: 1000px) {
          .monographs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (max-width: 600px) {
          .monographs-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            max-width: 380px;
            margin: 0 auto;
          }
        }
      `}</style>
        </>
    );
}