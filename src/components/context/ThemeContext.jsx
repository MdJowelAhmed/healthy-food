import { createContext, useContext, useState, useEffect } from "react";

// Create a ThemeContext to manage theme states across the app
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    if (savedTheme) {
      document.body.classList.add("dark"); // Add "dark" class to enable dark mode
    }
  }, []);

  // Toggle dark mode and update localStorage accordingly
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);
