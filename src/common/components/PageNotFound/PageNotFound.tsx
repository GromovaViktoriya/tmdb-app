import s from "./PageNotFound.module.css"
import {Path} from "@/common/routing";

export const PageNotFound = () => {
    return (
        <section className={s.page}>
            <div className={s.imageWrapper}>
                <svg viewBox="0 0 200 200" role="img" aria-hidden="true" className={s.image}>
                    <defs>
                        <linearGradient id="film-body-gradient-«r1»" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#38bdf8"></stop>
                            <stop offset="100%" stop-color="#2563eb"></stop>
                        </linearGradient>
                        <linearGradient id="film-clap-gradient-«r1»" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#facc15"></stop>
                            <stop offset="100%" stop-color="#f97316"></stop>
                        </linearGradient>
                    </defs>
                    <rect width="200" height="200" rx="28" fill="#0f172a"></rect>
                    <g transform="translate(50 34)">
                        <rect x="22" y="48" width="56" height="72" rx="16" fill="url(#film-body-gradient-«r1»)"></rect>
                        <circle cx="50" cy="60" r="24" fill="#fef9c3"></circle>
                        <ellipse cx="42" cy="54" rx="6" ry="8" fill="#0f172a"></ellipse>
                        <ellipse cx="58" cy="54" rx="6" ry="8" fill="#0f172a"></ellipse>
                        <path d="M42 68c3 4 13 4 16 0" stroke="#0f172a" stroke-width="4" stroke-linecap="round"></path>
                        <path d="M16 102c-10 16-12 30-4 34 8 4 18-4 28-20" stroke="#38bdf8" stroke-width="8"
                              stroke-linecap="round"></path>
                        <path d="M84 102c10 16 12 30 4 34-8 4-18-4-28-20" stroke="#38bdf8" stroke-width="8"
                              stroke-linecap="round"></path>
                        <g transform="translate(-18 10) rotate(-8 50 40)">
                            <rect x="8" y="36" width="84" height="32" rx="6" fill="#1f2937" stroke="#475569"
                                  stroke-width="4"></rect>
                            <path d="M16 36h20l-8-16h-20z" fill="#0ea5e9"></path>
                            <path d="M48 36h20l-8-16h-20z" fill="#f472b6"></path>
                            <path d="M80 36h16l-8-16h-16z" fill="#facc15"></path>
                            <path d="M16 68h20l-8 16h-20z" fill="#38bdf8"></path>
                            <path d="M48 68h20l-8 16h-20z" fill="#fb7185"></path>
                            <path d="M80 68h16l-8 16h-16z" fill="#f97316"></path>
                        </g>
                        <g transform="translate(12 -12)">
                            <rect x="26" y="16" width="48" height="16" rx="8"
                                  fill="url(#film-clap-gradient-«r1»)"></rect>
                            <rect x="14" y="20" width="72" height="12" rx="6" fill="#fef08a" opacity="0.8"></rect>
                            <path d="M26 16 14 4" stroke="#fef08a" stroke-width="6" stroke-linecap="round"></path>
                            <path d="M38 16 26 4" stroke="#fef08a" stroke-width="6" stroke-linecap="round"></path>
                            <path d="M50 16 38 4" stroke="#fef08a" stroke-width="6" stroke-linecap="round"></path>
                            <path d="M62 16 50 4" stroke="#fef08a" stroke-width="6" stroke-linecap="round"></path>
                            <path d="M74 16 62 4" stroke="#fef08a" stroke-width="6" stroke-linecap="round"></path>
                            <path d="M86 16 74 4" stroke="#fef08a" stroke-width="6" stroke-linecap="round"></path>
                            <circle cx="30" cy="48" r="6" fill="#22d3ee"></circle>
                            <circle cx="58" cy="48" r="6" fill="#fb7185"></circle>
                        </g>
                    </g>
                </svg>
            </div>
            <h1 className={s.title}>404</h1>
            <p className={s.subtitle}>Page not found. We can’t find what you’re looking for</p>
            <div className={s.actions}>
                <a href={Path.Main} data-discover="true" className={`button variantMain sizeMedium`} >To main page</a>
            </div>
        </section>
    )
}