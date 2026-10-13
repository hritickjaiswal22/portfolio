// src/components/ThemeProvider.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "paper" | "high-contrast";
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({
  theme: "paper",
  setTheme: () => {},
});

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("paper");

  useEffect(() => {
    const saved = localStorage.getItem("sub-theme") as Theme;
    if (saved) {
      setThemeState(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "paper");
    }
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("sub-theme", t);
    document.documentElement.setAttribute("data-theme", t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useCustomTheme = () => useContext(ThemeContext);
