import { useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    localStorage.setItem("darkMode", !darkMode ? "dark" : "light");

    document.body.classList.toggle("dark");
  };

  return { darkMode, toggleDarkMode };
};
