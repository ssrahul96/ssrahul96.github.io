import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeProviderState {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

/** Reads the theme already applied by the inline bootstrap script, then falls back safely. */
function getInitialTheme(): Theme {
  if (typeof document !== "undefined" && document.documentElement.classList.contains("light")) {
    return "light";
  }

  return "dark";
}

/** Provides a persistent light/dark theme without sending preference data off-device. */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // The visual theme still works when browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/** Returns the active theme context and reports incorrect provider usage clearly. */
export function useTheme(): ThemeProviderState {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
