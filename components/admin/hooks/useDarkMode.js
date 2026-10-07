import { useState, useEffect } from "react";

/**
 * useDarkMode — reads cms_settings from localStorage and listens for
 * live changes dispatched by Settings.jsx when preferences are saved.
 *
 * Returns: { isDark }
 */
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cms_settings");
      if (saved) return JSON.parse(saved).darkMode || false;
    }
    return false;
  });

  useEffect(() => {
    const handleChange = () => {
      const saved = localStorage.getItem("cms_settings");
      if (saved) {
        setIsDark(JSON.parse(saved).darkMode || false);
      }
    };

    window.addEventListener("cms_settings_changed", handleChange);
    return () => window.removeEventListener("cms_settings_changed", handleChange);
  }, []);

  return { isDark };
};

export default useDarkMode;
