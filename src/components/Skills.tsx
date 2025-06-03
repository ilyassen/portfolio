"use client";

import { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Skills = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const { lang } = useLanguage();

  useEffect(() => {
    import("../data/cv.json")
      .then((data) => {
        setSkills(data.default?.skills || data.skills || []);
      })
      .catch(() => setSkills([]));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-2">{translations[lang].skills}</h2>
      {skills.length === 0 ? (
        <p>No skills found.</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 list-none p-0">
          {skills.map((skill, idx) => (
            <li key={idx} className="bg-gray-200  rounded px-3 py-1 text-center">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Skills; 