import { useState, useEffect } from "react";
import './DarkModeToggle.css'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {

    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.style.setProperty("--body-bg", "#1a1a1a");
      document.documentElement.style.setProperty("--text-primary", "#ffffff");
      document.documentElement.style.setProperty("--banner-details-header", "#F3F3EF");
      document.documentElement.style.setProperty("--banner-text-decoration", "#ffffff");
      document.documentElement.style.setProperty("--banner-details-price", "#F3F3EF");
      document.documentElement.style.setProperty("--card-bg", "#000000");
      document.documentElement.style.setProperty("--footer-bg", "#000000");
      document.documentElement.style.setProperty("--banner-btn", "#11823B");
      document.documentElement.style.setProperty("--mid-grey", "#F3F3EF");
      document.documentElement.style.setProperty("--btn-bg", "#000000");
    } else {
      document.documentElement.style.setProperty("--body-bg", "#F3F3EF");
      document.documentElement.style.setProperty("--text-primary", "#000000");
      document.documentElement.style.setProperty("--banner-details-header", "#1D1D21");
      document.documentElement.style.setProperty("--banner-text-decoration", "#EB5757");
      document.documentElement.style.setProperty("--banner-details-price", "#333333");
      document.documentElement.style.setProperty("--card-bg", "#ffffff");
      document.documentElement.style.setProperty("--footer-bg", "#ECECE8");
      document.documentElement.style.setProperty("--banner-btn", "#000000");
      document.documentElement.style.setProperty("--mid-grey", "#444444");
      document.documentElement.style.setProperty("--btn-bg", "#DFE3E8");
    }
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  return (
    <div className="dark-mode-toggle">
      <span className="toggle-label">{darkMode ? "Dark Mode" : "Light Mode"}</span>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;

