"use client";

import { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  logo: string;
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
            <a href="#" key={idx} className="block text-center m-auto max-w-sm p-10 mb-10 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-100">

            <li key={idx} className=" pb-5">
              <div><img src={item.logo} alt={item.degree} className="w-25 h-20 text-center mx-auto m-1" /></div>
              <div className="text-center m-auto text-blue-900 bg-blue-300  rounded-2xl w-30">{item.year}</div>
              <div className="font-semibold">{item.degree}</div>
              <div className="text-sm text-gray-500">{item.institution} </div>
            </li>
            </a>
          ))}
          
        </ul>
      )}
    </section>
  );
};

export default Education; 