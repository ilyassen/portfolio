"use client";

import { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hobbies = () => {
  const [hobbies, setHobbies] = useState<string[]>([]);
  const { lang } = useLanguage();

  useEffect(() => {
    import("../data/cv.json")
      .then((data) => {
        setHobbies(data.default?.hobbies || data.hobbies || []);
      })
      .catch(() => setHobbies([]));
  }, []);

  return (
    <section className="text-center text-lg m-auto w-2/3">
      <h2 className="text-4xl font-bold mb-10">{translations[lang].hobbies}</h2>
      {hobbies.length === 0 ? (
        <p>No hobbies found.</p>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {hobbies.map((hobby, idx) => (
            <li key={idx}>{hobby}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Hobbies; 