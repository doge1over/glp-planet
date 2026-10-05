import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BroadcastPage() {
    return (
        <>
            <Header />
            <main className="bc-main">
                <section className="bc-hero">
                    <div className="bc-container">
                        <div className="bc-label">Онлайн</div>
                        <h1 className="bc-title">Трансляция конференции</h1>
                        <p className="bc-subtitle">
                            Трансляция VIII Международной научно-практической конференции GLP-PLANET
                        </p>
                        <div className="bc-notice">
                            Онлайн-расписание и информация о трансляции пока уточняются
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .bc-main { min-height: 72vh; background: #141b4d; }
                .bc-container { width: 100%; max-width: 1240px; margin: 0 auto; }
                .bc-hero {
                    min-height: 72vh;
                    padding: 170px 48px 90px;
                    background: linear-gradient(155deg, #080c24 0%, #141b4d 100%);
                }
                .bc-label {
                    margin-bottom: 12px;
                    color: #6b82c4;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                }
                .bc-title {
                    margin-bottom: 16px;
                    color: #fff;
                    font-size: 42px;
                    font-weight: 700;
                    line-height: 1.2;
                }
                .bc-subtitle {
                    max-width: 720px;
                    margin-bottom: 30px;
                    color: rgba(255,255,255,0.68);
                    font-size: 16px;
                    line-height: 1.7;
                }
                .bc-notice {
                    display: inline-flex;
                    padding: 14px 20px;
                    border: 1px solid rgba(107,130,196,0.35);
                    border-radius: 4px;
                    color: rgba(255,255,255,0.82);
                    font-size: 14px;
                }
                @media (max-width: 600px) {
                    .bc-hero { padding: 130px 20px 70px; }
                    .bc-title { font-size: 32px; }
                    .bc-subtitle { font-size: 14px; }
                }
            `}</style>
        </>
    );
}
