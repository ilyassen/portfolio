"use client";

import { useEffect, useState } from "react";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState<string[]>([]);

  useEffect(() => {
    import("../data/profile.json")
      .then((data) => {
        setHobbies(data.default?.hobbies || data.hobbies || []);
      })
      .catch(() => setHobbies([]));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Hobbies</h2>
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