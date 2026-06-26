import {Routing} from "@/common/routing";
import s from "./Outlet.module.css"

export const Outlet = ()=>{
    return (
    <section className={s.main}>
        <div className={s.wrapper}>
            <div className={s.container}>
                  <Routing/>
            </div>
        </div>
    </section>

    )
}