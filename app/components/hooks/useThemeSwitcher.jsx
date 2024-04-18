import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: light)";
    const [mode, setMode] = useState("");

    const handleChange = (darkMode) => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            window.localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        const userPref = window.localStorage.getItem("theme");
        
        if (userPref) {
            setMode(userPref);
            handleChange(userPref === "dark");
        } else {
            const mediaQuery = window.matchMedia(preferDarkQuery);
            setMode(mediaQuery.matches ? "dark" : "light");
            handleChange(mediaQuery.matches);
        }
    }, []);

    const toggleTheme = () => {
        setMode(prevMode => {
            const newMode = prevMode === "dark" ? "light" : "dark";
            handleChange(newMode === "dark");
            return newMode;
        });
    };

    return [mode, toggleTheme];
};

export default useThemeSwitcher;
