"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };



 let lastScrollTop = 100;

window.addEventListener('scroll', function() {
 
  const header = document.getElementById('header');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop <= lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }

});

  return (
    <header id='header' className="sticky top-0 z-50  w-full py-4 bg-gray-900 text-white text-center text-2xl font-bold shadow-md flex justify-between items-center px-8 hidden">
      <span>{translations[lang].portfolio}</span>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleLang}
          className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600 transition-colors text-xs font-semibold"
          aria-label="Switch language"
        >
          {lang}
        </button>
        <button
          onClick={toggleTheme}
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            // Sun icon
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
            </svg>
          ) : (
            // Moon icon
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header; 