"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { technologyIcons } from "../data/iconConfig";
import Image from "next/image";

const Skills = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    import("../data/cv.json")
      .then((data) => {
        setSkills(data.default?.skills || data.skills || []);
      })
      .catch(() => setSkills([]));
  }, []);

  return (
    <section className="relative text-center text-lg m-auto w-2/3 mb-10 text-gray-900 dark:text-white transition-colors">
      <h2 className="text-6xl font-bold dark:text-gray-300 text-black mt-20 mb-30 text-shadow-lg/20 ">
        {translations[lang].skills}
      </h2>
      {skills.length === 0 ? (
        <p>No skills found.</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 list-none p-0 skills">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="bg-gradient-to-r from-gray-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 
                         text-gray-800 dark:text-gray-200 
                         rounded-xl px-4 py-3 text-center relative font-medium text-sm
                         border border-gray-200 dark:border-gray-600
                         hover:from-blue-50 hover:to-indigo-100 dark:hover:from-blue-800 dark:hover:to-indigo-800
                         hover:border-blue-300 dark:hover:border-blue-500
                         hover:shadow-lg hover:scale-105 hover:-translate-y-1
                         transition-all duration-300 cursor-pointer
                         backdrop-blur-sm"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skill}
              {hoveredSkill === skill && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 transition-colors">
                  {technologyIcons.find(
                    (icon: { name: string }) =>
                      icon.name.toLowerCase() === skill.toLowerCase()
                  ) ? (
                    <Image
                      src={
                        technologyIcons.find(
                          (icon) =>
                            icon.name.toLowerCase() === skill.toLowerCase()
                        )!.link
                      }
                      alt={skill}
                      className="w-12 h-12 mx-auto mb-1"
                      width="50"
                      height="50"
                    />
                  ) : (
                    <div className="w-12 h-12 mb-1 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {skill[0]}
                      </span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Skills;
