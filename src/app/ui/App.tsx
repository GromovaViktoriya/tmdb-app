import {Header} from "@/common/components/Header/Header.tsx";
import {Footer} from "@/common/components/Footer/Footer.tsx";
import s from "./App.module.css"
import {Outlet} from "@/common/components/Outlet/Outlet.tsx";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";
import {ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/model/store.ts";


function App() {
    const isGlobalFetching = useSelector((state: RootState) => {
        const queries = state.baseApi.queries;
        return Object.values(queries).some(query => query?.status === 'pending');
    });
    return (
        <div className={s.app}>
            <Header/>
            {isGlobalFetching  && <LinearProgress/>}
            <Outlet/>
            <Footer/>
            <ToastContainer />
        </div>
    )
}

export default App
