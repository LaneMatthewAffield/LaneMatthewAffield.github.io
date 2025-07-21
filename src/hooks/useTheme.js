// src/hooks/useTheme.js
import { useState, useEffect, useCallback } from 'react';

// Define your theme names for easy reference
const LIGHT_THEME_NAME = "Light Portfolio";
const DARK_THEME_NAME = "Dark Portfolio";

const useTheme = () => {
  // State to hold the current active theme name (e.g., "Light Portfolio" or "Dark Portfolio")
  const [currentTheme, setCurrentTheme] = useState(() => {
    // 1. Try to get theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === LIGHT_THEME_NAME || storedTheme === DARK_THEME_NAME) {
      return storedTheme;
    }

    // 2. If no stored theme, default to system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME_NAME;
    }

    // 3. Otherwise, default to the light theme
    return LIGHT_THEME_NAME;
  });

  // Effect to apply 'data-theme' attribute on <html> and update localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);

    // Optional: You can also update a meta tag for browser UI if needed,
    // though DaisyUI handles most of the visual changes through CSS variables.
    // const metaThemeColor = document.querySelector("meta[name='theme-color']");
    // if (metaThemeColor) {
    //   // You'd need to map your theme name to a specific background color here
    //   // For example, if "Dark Portfolio" has --color-base-100 as #1f2937, set that.
    //   metaThemeColor.setAttribute("content", currentTheme === DARK_THEME_NAME ? "#1f2937" : "#ffffff");
    // }

  }, [currentTheme]); // Re-run effect whenever currentTheme changes

  // Function to toggle between your defined light and dark themes
  const toggleTheme = useCallback(() => {
    setCurrentTheme(prevTheme =>
      prevTheme === LIGHT_THEME_NAME ? DARK_THEME_NAME : LIGHT_THEME_NAME
    );
  }, []);

  // Return the current theme name and the toggle function
  return { currentTheme, toggleTheme, LIGHT_THEME_NAME, DARK_THEME_NAME };
};

export default useTheme;