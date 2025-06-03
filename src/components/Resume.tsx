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
    <section>
      <h2 className="text-4xl font-bold mb-5">{translations[lang].resume}</h2>
      <p>{summary}</p>
    </section>
  );
};

export default Resume; 