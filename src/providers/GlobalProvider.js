import React, { createContext, useState, useMemo, useCallback } from "react";
import { Outlet } from 'react-router-dom';
export const GlobalContext = createContext({
    activeMenu: "Home",
    setActiveMenu: ()=>{},
});

export default function GlobalProvider (props) {
    const [activeMenu, setActiveMenu] = useState("Home");
    const globals = useMemo(()=> ()=>({activeMenu, setActiveMenu}), [activeMenu,setActiveMenu])
    return <GlobalContext.Provider value={globals}><Outlet />{props.children}</GlobalContext.Provider>
}