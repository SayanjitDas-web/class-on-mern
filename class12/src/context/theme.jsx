import { useContext, createContext, useState, useEffect } from "react";

const themeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export const useTheme = () => useContext(themeContext);
