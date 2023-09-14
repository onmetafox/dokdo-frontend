import React, { createContext, useState, useMemo, useCallback } from "react";


export const GlobalContext = createContext({
    theme: 'dark',
    toggleTheme: (theme)=>{},
});

const initTheme = localStorage.getItem('_theme_') || 'dark';

export default function GlobalProvider ({children}) {
    const [theme, setTheme] = useState(initTheme);

    const toggleTheme = useCallback(() => {
        setTheme(prev => {
            const newTheme = prev === 'dark' ? 'light': 'dark';
            localStorage.setItem('_theme_', newTheme);
            return newTheme;
        })
    }, []);

    const globals = useMemo(()=> {
        return { theme, toggleTheme }
    }, [theme,toggleTheme]);

    return <GlobalContext.Provider value={globals}>{children}</GlobalContext.Provider>
}