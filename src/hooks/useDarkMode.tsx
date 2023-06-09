import React, { useState, useContext } from "react";

interface DarkModeProviderProps {
  children: React.ReactNode;
}

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = React.createContext({} as DarkModeContextProps);

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    localStorage.setItem("darkMode", !darkMode ? "dark" : "light");

    document.body.classList.toggle("dark");
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const darkModeContext = useContext(DarkModeContext);

  return darkModeContext;
};
