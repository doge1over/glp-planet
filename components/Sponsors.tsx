"use client";

import Reveal from "./Reveal";
import Image from "next/image";

interface Sponsor {
    name: string;
    img: string;
    href?: string | null;
    scale?: number;
}

interface Tier {
    label: string;
    sponsors: Sponsor[];
    speed?: number;
}

// Заполните массивы спонсоров для каждого уровня.
// Если в массиве 4+ — будет автопрокрутка. Если меньше — выравнивание по центру без прокрутки.
const tiers: Tier[] = [
    {
        label: "Генеральные спонсоры",
        sponsors: [
            { name: "FarmBioLine", img: "/images/sponsors/logo_bronzovyj_sponsor_farmbiolajn-1.png", href: "https://farmbioline.ru/", scale: 1.6 }
        ],
        speed: 28,
    },
    {
        label: "Золотые спонсоры",
        sponsors: [
            { name: "БиоГен-Аналитика", img: "/images/sponsors/@logo.png", href: "https://bga.ru/" },
            { name: "БиоЛайн", img: "/images/sponsors/BL_rus_LOGO.png", href: " https://bioline.ru/" }
        ],
        speed: 32,
    },
    {
        label: "Спонсоры",
        sponsors: [
            { name: "ТехноИнфо", img: "/images/sponsors/ТехноИнфо_LOGO_2024 (5).png", href: "https://technoinfo.ru/" },
            { name: "Группа компаний «Р-Фарм»", img: "/images/sponsors/Р-Фарм.png", href: "https://www.r-pharm.com" },
            { name: "Лабнео", img: "/images/sponsors/labneo.png", href: "https://labneo.ru/" },
        ],
        speed: 35,
    },
    {
        label: "Информационные партнёры",
        sponsors: [
            { name: "Журнал «Разработка и регистрация лекарственных средств»", img: "/images/partners/rrl.png", href: "https://www.pharmjournal.ru/jour/announcement/view/618" },
            { name: "Лабораторные животные", img: "/images/sponsors/laj-logo-1862x518-transparent-bg.png", href: "https://labanimalsjournal.ru/" },
            { name: "SciCat — платформа научных каталогов", img: "/images/partners/scicat.png", href: "https://sci-cat.ru/" },
        ],
        speed: 38,
    },
];

const COPIES = 8;

function SponsorCard({ s }: { s: Sponsor }) {
    const inner = (
        <>
            <div className="sponsor-slide-inner">
                <Image
                    src={s.img}
                    alt={s.name}
                    width={200}
                    height={80}
                    style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: 180 * (s.scale ?? 1),
                        maxHeight: 70 * (s.scale ?? 1),
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="sponsor-slide-name">{s.name}</div>
        </>
    );

    if (s.href) {
        return (
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="sponsor-slide sponsor-slide-link">
                {inner}
            </a>
        );
    }
    return <div className="sponsor-slide">{inner}</div>;
}

function TierRow({ tier }: { tier: Tier }) {
    const { label, sponsors, speed = 30 } = tier;
    const shouldScroll = sponsors.length >= 4;
    const track = shouldScroll
        ? Array.from({ length: COPIES }, () => sponsors).flat()
        : sponsors;

    return (
        <div className="tier-row">
            <div className="tier-label-wrap">
                <div className="tier-label">{label}</div>
                <div className="tier-divider" />
            </div>

            {sponsors.length === 0 ? (
                <div className="tier-empty-wrap">
                    <div className="tier-empty">Скоро…</div>
                </div>
            ) : shouldScroll ? (
                <div className="tier-carousel">
                    <div
                        className="tier-track tier-track-scroll"
                        style={{
                            animationDuration: `${speed}s`,
                            ["--count" as string]: sponsors.length,
                        }}
                    >
                        {track.map((s, i) => (
                            <SponsorCard key={i} s={s} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="tier-static-wrap">
                    {sponsors.map((s, i) => (
                        <SponsorCard key={i} s={s} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Sponsors() {
    return (
        <section className="sponsors-section">
            <div className="sponsors-header">
                <Reveal><div className="section-label">Спонсоры</div></Reveal>
                <Reveal delay={60}>
                    <h2 className="section-title" style={{ marginBottom: 16 }}>Нас поддерживают</h2>
                </Reveal>
                <Reveal delay={100}>
                    <p className="sponsors-desc">
                        Мы благодарим наших партнёров и спонсоров за поддержку конференции
                    </p>
                </Reveal>
            </div>

            <div className="tiers-wrap">
                {tiers.map((tier, i) => (
                    <Reveal key={i} delay={140 + i * 80}>
                        <TierRow tier={tier} />
                    </Reveal>
                ))}
            </div>

            <style>{`
                .sponsors-section {
                    padding: 100px 0 110px;
                    background: linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%);
                    position: relative;
                }
                .sponsors-header { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
                .sponsors-section .section-label { color: #6B82C4; }
                .sponsors-section .section-title { color: #fff; }
                .sponsors-desc {
                    font-size: 15px;
                    color: rgba(255,255,255,0.4);
                    line-height: 1.7;
                    max-width: 480px;
                    margin-bottom: 56px;
                }

                .tiers-wrap {
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }

                .tier-row { width: 100%; }

                .tier-label-wrap {
                    max-width: 1200px;
                    margin: 0 auto 20px;
                    padding: 0 48px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .tier-label {
                    font-size: 11px;
                    color: rgba(255,255,255,0.5);
                    font-weight: 600;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    flex-shrink: 0;
                }
                .tier-divider {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(to right, rgba(107,130,196,0.3), transparent);
                }

                .tier-empty-wrap {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 48px;
                    box-sizing: border-box;
                }
                .tier-empty {
                    height: 110px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255,255,255,0.2);
                    font-size: 12px;
                    font-style: italic;
                    letter-spacing: 1px;
                    border: 1px dashed rgba(107,130,196,0.12);
                    border-radius: 6px;
                }

                .tier-static-wrap {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 16px 48px;
                    display: flex;
                    gap: 32px;
                    justify-content: center;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                }

                .tier-carousel {
                    width: 100%;
                    overflow-x: hidden;
                    overflow-y: visible;
                    padding: 16px 0;
                    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
                    mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
                }

                .tier-track {
                    --slide-w: 240px;
                    --gap: 32px;
                    display: flex;
                    gap: var(--gap);
                    align-items: flex-start;
                }
                .tier-track-scroll {
                    width: max-content;
                    animation-name: sponsorScroll;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    will-change: transform;
                }
                .tier-track-scroll:hover {
                    animation-play-state: paused;
                }

                @keyframes sponsorScroll {
                    from { transform: translate3d(0, 0, 0); }
                    to   { transform: translate3d(calc(-1 * var(--count) * (var(--slide-w) + var(--gap))), 0, 0); }
                }

                .sponsor-slide {
                    flex-shrink: 0;
                    width: 240px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                    text-decoration: none;
                }
                .sponsor-slide-inner {
                    width: 240px;
                    height: 110px;
                    background: rgba(255,255,255,0.95);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px 24px;
                    transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
                    border: 1px solid rgba(107,130,196,0.1);
                    overflow: hidden;
                    box-sizing: border-box;
                }
                .sponsor-slide:hover .sponsor-slide-inner {
                    transform: translateY(-6px);
                    box-shadow: 0 16px 40px rgba(0,0,0,0.2);
                    border-color: rgba(107,130,196,0.25);
                }
                .sponsor-slide-name {
                    font-size: 11px;
                    color: rgba(255,255,255,0.35);
                    font-weight: 500;
                    letter-spacing: 0.5px;
                    text-align: center;
                    transition: color 0.3s;
                    max-width: 240px;
                    line-height: 1.4;
                }
                .sponsor-slide:hover .sponsor-slide-name {
                    color: rgba(255,255,255,0.6);
                }

                @media (max-width: 1024px) {
                    .sponsors-section { padding: 80px 0 90px; }
                    .sponsors-header { padding: 0 32px; }
                    .sponsors-desc { margin-bottom: 44px; }
                    .tier-label-wrap { padding: 0 32px; }
                    .tier-empty-wrap { padding: 0 32px; }
                    .tier-static-wrap { padding: 16px 32px; gap: 24px; }
                    .tier-track { --slide-w: 200px; }
                    .sponsor-slide { width: 200px; }
                    .sponsor-slide-inner { width: 200px; height: 100px; padding: 18px 20px; }
                    .sponsor-slide-name { max-width: 200px; }
                    .tiers-wrap { gap: 36px; }
                }
                @media (max-width: 600px) {
                    .sponsors-section { padding: 60px 0 70px; }
                    .sponsors-header { padding: 0 20px; }
                    .sponsors-desc { font-size: 14px; margin-bottom: 36px; }
                    .tier-label-wrap { padding: 0 20px; margin-bottom: 14px; }
                    .tier-empty-wrap { padding: 0 20px; }
                    .tier-empty { height: 90px; font-size: 11px; }
                    .tier-static-wrap { padding: 16px 20px; gap: 16px; }
                    .tier-track { --slide-w: 170px; --gap: 20px; }
                    .sponsor-slide { width: 170px; }
                    .sponsor-slide-inner { width: 170px; height: 85px; padding: 16px; }
                    .sponsor-slide-inner img { max-width: 140px !important; max-height: 55px !important; }
                    .sponsor-slide-name { font-size: 10px; max-width: 170px; }
                    .tiers-wrap { gap: 28px; }
                    .tier-label { font-size: 10px; letter-spacing: 1.5px; }
                }
            `}</style>
        </section>
    );
}