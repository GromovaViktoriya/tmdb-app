import s from "./PageNotFound.module.css"
import {Path} from "@/common/routing";
import {Link} from "react-router";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";

export const PageNotFound = () => {
    const language = useSelector(selectLanguage);
    const isRu = language === "ru-RU";

    const text = {
        subtitle: isRu
            ? "Страница не найдена. Мы не можем найти то, что вы ищете"
            : "Page not found. We can’t find what you’re looking for",
        button: isRu ? "На главную" : "To main page",
    };
    return (
        <section className={s.page}>
            <div className={s.imageWrapper}>
                <svg viewBox="0 0 200 200" role="img" aria-hidden="true" className={s.image}>
                    <defs>
                        <linearGradient id="film-body-gradient-«r1»" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8"></stop>
                            <stop offset="100%" stopColor="#2563eb"></stop>
                        </linearGradient>
                        <linearGradient id="film-clap-gradient-«r1»" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#facc15"></stop>
                            <stop offset="100%" stopColor="#f97316"></stop>
                        </linearGradient>
                    </defs>
                    <rect width="200" height="200" rx="28" fill="#0f172a"></rect>
                    <g transform="translate(50 34)">
                        <rect x="22" y="48" width="56" height="72" rx="16" fill="url(#film-body-gradient-«r1»)"></rect>
                        <circle cx="50" cy="60" r="24" fill="#fef9c3"></circle>
                        <ellipse cx="42" cy="54" rx="6" ry="8" fill="#0f172a"></ellipse>
                        <ellipse cx="58" cy="54" rx="6" ry="8" fill="#0f172a"></ellipse>
                        <path d="M42 68c3 4 13 4 16 0" stroke="#0f172a" strokeWidth="4" strokeLinecap="round"></path>
                        <path d="M16 102c-10 16-12 30-4 34 8 4 18-4 28-20" stroke="#38bdf8" strokeWidth="8"
                              strokeLinecap="round"></path>
                        <path d="M84 102c10 16 12 30 4 34-8 4-18-4-28-20" stroke="#38bdf8" strokeWidth="8"
                              strokeLinecap="round"></path>
                        <g transform="translate(-18 10) rotate(-8 50 40)">
                            <rect x="8" y="36" width="84" height="32" rx="6" fill="#1f2937" stroke="#475569"
                                  strokeWidth="4"></rect>
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
                            <path d="M26 16 14 4" stroke="#fef08a" strokeWidth="6" strokeLinecap="round"></path>
                            <path d="M38 16 26 4" stroke="#fef08a" strokeWidth="6" strokeLinecap="round"></path>
                            <path d="M50 16 38 4" stroke="#fef08a" strokeWidth="6" strokeLinecap="round"></path>
                            <path d="M62 16 50 4" stroke="#fef08a" strokeWidth="6" strokeLinecap="round"></path>
                            <path d="M74 16 62 4" stroke="#fef08a" strokeWidth="6" strokeLinecap="round"></path>
                            <path d="M86 16 74 4" stroke="#fef08a" strokeWidth="6" strokeLinecap="round"></path>
                            <circle cx="30" cy="48" r="6" fill="#22d3ee"></circle>
                            <circle cx="58" cy="48" r="6" fill="#fb7185"></circle>
                        </g>
                    </g>
                </svg>
            </div>
            <h1 className={s.title}>404</h1>
            <p className={s.subtitle}>{text.subtitle}</p>
            <div className={s.actions}>
                <Link to={Path.Main} data-discover="true" className={`button variantMain sizeMedium`} >{text.button}</Link>
            </div>
        </section>
    )
}