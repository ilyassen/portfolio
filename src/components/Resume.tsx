"use client";

import { useEffect, useState } from "react";
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../data/translations';

const Resume = () => {
  const [summary, setSummary] = useState("");
  const [intro, setIntro] = useState("");
  // const { lang } = useLanguage();

  useEffect(() => {
    import("../data/cv.json")
      .then((data) => {
        setSummary(data.default?.resume?.summary || data.resume?.summary || "");
        setIntro(data.default?.resume?.intro || data.resume?.intro || "");
      })
      .catch(() => setSummary("Could not load resume summary."));
  }, []);
    /* 
    
  <a href="#" className="h-screen flex flex-col items-center  mx-auto bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700  dark:hover:bg-gray-100">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/ilyas_ceremonie.jpg" alt=""></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{translations[lang].resume}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{summary}</p>
          
      </div>
    </a>  
    
    */
  return (


    <section className="flex items-center flex-wrap justify-center h-screen mx-auto  text-lg  w-2/3">
      {/* <h2 className="w-full  text-4xl font-bold mb-10 ">{translations[lang].resume}</h2> */}
      <p className=" text-lg mb-10">{intro}</p>
    </section> 
  );
};

export default Resume; 