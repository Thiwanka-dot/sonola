import { createContext, useEffect, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = async () => {
    // If inside Electron, use native theme toggle
    if (window.darkMode) {
      const isDark = await window.darkMode.toggle();
      const newTheme = isDark ? "light" : "dark";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    } else {
      // Web fallback
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
