"use client";

import { useEffect, useState } from "react";

type Experience = {
  position: string;
  company: string;
  years: string;
  description: string;
};

const Work = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    import("../data/profile.json")
      .then((data) => {
        setExperiences(data.default?.Experiences || data.Experiences || []);
      })
      .catch(() => setExperiences([]));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Work Experience</h2>
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

export default Work; 