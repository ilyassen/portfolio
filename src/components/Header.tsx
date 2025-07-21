"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../data/translations";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Show header when above 100px, hide when below 100px
      setIsHeaderVisible(scrollTop >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`sticky top-0 z-50 w-full py-4 bg-gray-700 dark:bg-stone-100 text-white dark:text-gray-800 text-center text-2xl font-bold shadow-md flex justify-between items-center px-8 transition-transform duration-300 transition-colors ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center">
        <img
          alt="logo"
          src={
            theme === "light"
              ? "/icons/logo/logo-light.png"
              : "/icons/logo/logo.png"
          }
          className="h-10 w-auto object-contain transition-all duration-300"
        />
      </div>
      <div className="flex items-center gap-2">
        <a
          href="/src/data/Curriculum-Vitae-B.-Ilyas-2025.docx"
          download="Curriculum-Vitae-B.-Ilyas-2025.docx"
          className="bg-gray-600 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-2 rounded hover:bg-gray-500 dark:hover:bg-gray-400 transition-colors text-xs font-semibold h-10 flex items-center justify-center"
          aria-label="Download CV"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          CV
        </a>
        <button
          onClick={toggleLang}
          className="bg-gray-600 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-2 rounded hover:bg-gray-500 dark:hover:bg-gray-400 transition-colors text-xs font-semibold h-10 min-w-[40px] flex items-center justify-center"
          aria-label="Switch language"
        >
          {lang}
        </button>

        <button
          onClick={toggleTheme}
          className="bg-gray-600 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-2 rounded hover:bg-gray-500 dark:hover:bg-gray-400 transition-colors h-10 w-10 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            // Sun icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"
              />
            </svg>
          ) : (
            // Moon icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
