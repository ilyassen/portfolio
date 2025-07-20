"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

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
    <section className="text-center text-lg  text-gray-900 dark:text-white transition-colors">
      <h2 className="text-5xl font-bold text-gray-700 dark:text-gray-300 mb-10">
        {translations[lang].education}
      </h2>
      {education.length === 0 ? (
        <p>No education data found.</p>
      ) : (
        <ul className="space-y-6">
          {education.map((item, idx) => (
            <li
              key={idx}
              className="block m-auto max-w-4xl  my-10 bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors overflow-hidden"
            >
              <div className="flex ">
                {/* Image section - 30% */}
                <div className="h-50 w-4/12 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200
                              hover:from-blue-50 hover:to-indigo-100 dark:from-blue-900 dark:to-indigo-900 dark:hover:from-blue-800 dark:hover:to-indigo-800
                              hover:shadow-sm hover:scale-105 transition-all duration-200">
                  <img
                    src={item.logo}
                    alt={item.degree}
                    className="max-w-full max-h-24 object-contain"
                  />
                </div>

                {/* Content section - 70% */}
                <div className="w-9/12 p-6 flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="bg-gradient-to-r from-blue-50 to-indigo-100  dark:from-blue-900 dark:to-indigo-900 
                                 text-blue-700 dark:text-blue-200 font-semibold px-3 py-1 rounded-full text-sm
                                 border border-blue-200 dark:border-blue-700
                                 hover:shadow-sm hover:scale-105 transition-all duration-200">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.institution}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Education;
