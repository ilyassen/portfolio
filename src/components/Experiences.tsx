"use client";

import { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

type Experience = {
  position: string;
  company: string;
  years: string;
  description: string;
};

const Experiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const { lang } = useLanguage();

  useEffect(() => {
    import("../data/cv.json")
      .then((data) => {
        setExperiences(data.default?.Experiences || data.Experiences || []);
      })
      .catch(() => setExperiences([]));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-2">{translations[lang].experiences}</h2>
      {experiences.length === 0 ? (
        <p>No experiences found.</p>
      ) : (
        <ul className="space-y-4">
          {experiences.map((exp, idx) => (
            <li key={idx} className="border-b pb-2">
              <div className="font-semibold">{exp.position} @ {exp.company}</div>
              <div className="text-sm text-gray-500">{exp.years}</div>
              <div>{exp.description}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Experiences; 