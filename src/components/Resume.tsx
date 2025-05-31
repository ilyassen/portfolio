"use client";

import { useEffect, useState } from "react";

const Resume = () => {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    import("../data/profile.json")
      .then((data) => {
        setSummary(data.default?.resume?.summary || data.resume?.summary || "");
      })
      .catch(() => setSummary("Could not load resume summary."));
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Resume</h2>
      <p>{summary}</p>
    </section>
  );
};

export default Resume; 