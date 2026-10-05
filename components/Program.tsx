"use client";

import Reveal from "./Reveal";

export default function Program() {
    return (
        <section id="program" className="program-section">
            <div className="program-inner">
                <Reveal><div className="section-label">Программа</div></Reveal>
                <Reveal delay={60}>
                    <h2 className="section-title">Программа конференции пока уточняется</h2>
                </Reveal>
                <Reveal delay={100}>
                    <div className="section-divider" />
                </Reveal>
                <Reveal delay={140}>
                    <p className="program-desc">
                        Тематические сессии, мастер-классы и круглые столы GLP-PLANET VIII будут опубликованы позднее.
                    </p>
                </Reveal>
            </div>

            <style>{`
                .program-section { padding: 110px 48px; background: var(--white); }
                .program-inner { max-width: 1000px; margin: 0 auto; }
                .program-desc { max-width: 720px; color: #4a5060; font-size: 16px; line-height: 1.75; }
                @media (max-width: 1024px) { .program-section { padding: 80px 32px; } }
                @media (max-width: 600px) {
                    .program-section { padding: 60px 20px; }
                    .program-desc { font-size: 14px; }
                }
            `}</style>
        </section>
    );
}
