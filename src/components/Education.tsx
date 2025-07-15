"use client";

import { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

const Education = () => {
  const [education, setEducation] = useState<EducationItem[]>([]);
  const { lang } = useLanguage();

  useEffect(() => {
    import("../data/cv.json")
      .then((data) => {
        setEducation(data.default?.education || data.education || []);
      })
      .catch(() => setEducation([]));
  }, []);

  return (
    <section className="text-center text-lg" >
      <h2 className="text-4xl font-bold mb-10">{translations[lang].education}</h2>
      {education.length === 0 ? (
        <p>No education data found.</p>
      ) : (
        <ul className="space-y-4">
          {education.map((item, idx) => (
            <li key={idx} className=" pb-5">
              <div className="font-semibold">{item.degree}</div>
              <div className="text-sm text-gray-500">{item.institution} ({item.year})</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Education; 