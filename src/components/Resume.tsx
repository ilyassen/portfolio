"use client";

import { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Resume = () => {
  const [summary, setSummary] = useState("");
  const { lang } = useLanguage();

  useEffect(() => {
    import("../data/cv.json")
      .then((data) => {
        setSummary(data.default?.resume?.summary || data.resume?.summary || "");
      })
      .catch(() => setSummary("Could not load resume summary."));
  }, []);

  return (
    <section className="text-center text-lg m-auto w-2/3">
      <h2 className="text-4xl font-bold mb-10">{translations[lang].resume}</h2>
      <p className="text-lg mb-10">{summary}</p>
    </section>
  );
};

export default Resume; 