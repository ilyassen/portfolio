"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

type Experience = {
  position: string;
  company: string;
  years: string;
  description: string;
  technologies?: string[];
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
    <section className="text-center text-lg m-auto w-2/3 transition-colors">
      <h2 className="text-6xl font-bold dark:text-gray-300 text-black mb-30 mt-50 text-shadow-lg/20 ">
        {translations[lang].experiences}
      </h2>
      {experiences.length === 0 ? (
        <p>No experiences found.</p>
      ) : (
        <div className="grid gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className=" p-10 my-10 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md
                        bg-stone-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300  hover:scale-105"
            >
              {/* Header with position and company */}
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-100 mb-2">
                    {exp.position}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-300">
                    {translations[lang].at}
                  </span>
                  <span
                    className="bg-gradient-to-r from-blue-50 to-indigo-100  dark:from-blue-900 dark:to-indigo-900 
                                 text-blue-700 dark:text-blue-200 font-semibold px-3 py-1 rounded-full text-sm
                                 border border-blue-200 dark:border-blue-700
                                 hover:shadow-sm hover:scale-105 transition-all duration-200"
                  >
                    {exp.company}
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {exp.years}
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 dark:border-gray-500 pt-4">
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-left mb-4">
                  {exp.description}
                </p>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 text-left">
                      {translations[lang].techUsed}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="inline-block px-3 py-1 text-xs font-medium rounded-full 
                                   bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900
                                   text-blue-700 dark:text-blue-200 
                                   border border-blue-200 dark:border-blue-700
                                   hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800 dark:hover:to-indigo-800
                                   hover:border-blue-300 dark:hover:border-blue-600
                                   hover:shadow-sm hover:scale-105
                                   transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Experiences;
