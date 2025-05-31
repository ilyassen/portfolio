"use client";

import { useEffect, useState } from "react";

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

const Education = () => {
  const [education, setEducation] = useState<EducationItem[]>([]);

  useEffect(() => {
    import("../data/profile.json")
      .then((data) => {
        setEducation(data.default?.education || data.education || []);
      })
      .catch(() => setEducation([]));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Education</h2>
      {education.length === 0 ? (
        <p>No education data found.</p>
      ) : (
        <ul className="space-y-4">
          {education.map((item, idx) => (
            <li key={idx} className="border-b pb-2">
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