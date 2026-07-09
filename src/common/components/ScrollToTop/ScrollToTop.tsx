import { useEffect } from "react";
import {useLocation, useNavigationType} from "react-router";

export const ScrollToTop = () => {
    const { pathname, search } = useLocation();
    const navType = useNavigationType();

    // "POP" - нажатие кнопок Назад/Вперед в браузере
    useEffect(() => {
        if (navType !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [navType, pathname, search]);
    return null;
};