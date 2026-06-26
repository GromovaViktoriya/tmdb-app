import s from "./Main.module.css"

export const Main = () => {
    return (
        <section className={s.main}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <section className={s.page}>
                        <section className={s.section}>
                            <div className={s.content}>
                                <h1 className={s.title}>Welcome</h1>
                                <h2 className={s.subtitle}>Browse highlighted titles from TMDB</h2>
                            </div>
                        </section>
                        <section className={s.sections}></section>
                    </section>
                </div>
            </div>
        </section>
    )
}