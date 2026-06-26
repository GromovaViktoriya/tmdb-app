import {Header} from "@/common/components/Header/Header.tsx";
import {Footer} from "@/common/components/Footer/Footer.tsx";
import s from "./App.module.css"
import {Outlet} from "@/common/components/Outlet/Outlet.tsx";


function App() {

    return (
        <div className={s.app}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default App
