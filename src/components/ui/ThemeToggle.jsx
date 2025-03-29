import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );


    // Toggle Dark Mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (

        <>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </>
    )
}

