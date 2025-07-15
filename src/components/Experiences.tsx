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
    <section className="text-center text-lg m-auto w-2/3">
      <h2 className="text-4xl font-bold mb-10">{translations[lang].experiences}</h2>
      {experiences.length === 0 ? (
        <p>No experiences found.</p>
      ) : (
        <ul className="space-y-4 ">
          {experiences.map((exp, idx) => (
            <li key={idx} className=" pb-5 ">
              <div className="font-semibold">{exp.position} {translations[lang].at} <span className="bg-blue-100  font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">{exp.company}</span></div> 
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