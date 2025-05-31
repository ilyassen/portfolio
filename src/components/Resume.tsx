"use client";

import { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Resume = () => {
  const [summary, setSummary] = useState("");
  const { lang } = useLanguage();

  useEffect(() => {
    import("../data/profile.json")
      .then((data) => {
        setSummary(data.default?.resume?.summary || data.resume?.summary || "");
      })
      .catch(() => setSummary("Could not load resume summary."));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-2">{translations[lang].resume}</h2>
      {/* <p>{summary}</p> */}
      <p>{translations[lang].summary}</p>
    </section>
  );
};

export default Resume; 