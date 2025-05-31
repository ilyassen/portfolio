"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "EN" | "FR";

interface LanguageContextProps {
  lang: Language;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("EN");

  const toggleLang = () => setLang((prev) => (prev === "EN" ? "FR" : "EN"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}; 