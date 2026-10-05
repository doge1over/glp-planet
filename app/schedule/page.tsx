import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SchedulePage() {
    return (
        <>
            <Header />
            <main className="schedule-main">
                <section className="schedule-card">
                    <div className="schedule-label">Онлайн-расписание</div>
                    <h1>Расписание пока уточняется</h1>
                    <p>
                        Онлайн-расписание конференции GLP-PLANET VIII будет опубликовано позднее.
                    </p>
                </section>
            </main>
            <Footer />

            <style>{`
                .schedule-main {
                    min-height: 72vh;
                    padding: 170px 24px 100px;
                    background: var(--light);
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                }
                .schedule-card {
                    width: 100%;
                    max-width: 760px;
                    padding: 64px 48px;
                    background: #fff;
                    border-radius: 6px;
                    text-align: center;
                    box-shadow: 0 18px 50px rgba(31, 42, 94, 0.08);
                }
                .schedule-label {
                    margin-bottom: 18px;
                    color: var(--secondary);
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }
                .schedule-card h1 {
                    margin-bottom: 18px;
                    color: var(--primary);
                    font-size: 36px;
                    line-height: 1.25;
                }
                .schedule-card p {
                    color: var(--muted);
                    font-size: 16px;
                    line-height: 1.7;
                }
                @media (max-width: 600px) {
                    .schedule-main { padding: 130px 20px 70px; }
                    .schedule-card { padding: 44px 24px; }
                    .schedule-card h1 { font-size: 28px; }
                }
            `}</style>
        </>
    );
}
