// This component needs to be a Client Component to use browser APIs like localStorage and window.
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(
        storedTheme === "light" ? "light" : "dark"
      );
      document.documentElement.classList.remove(
        storedTheme === "light" ? "dark" : "light"
      );
    } else {
      // If no theme is stored, explicitly set the initial theme to 'dark'.
      const initialTheme = "dark";
      setTheme(initialTheme);
      document.documentElement.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    if (theme === "light") {
      document.documentElement.classList.add("light");
    }
    // Save the new theme preference to localStorage.
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle between 'light' and 'dark' themes.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Provide the theme state and toggle function to all children components.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to consume the ThemeContext.
 * Throws an error if used outside of a ThemeProvider.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
