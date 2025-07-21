"use client";

// import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import React, {  useEffect } from "react";

const Resume = () => {
  // const [summary, setSummary] = useState("");
  const { lang } = useLanguage();

  // useEffect(() => {
  //   import("../data/cv.json")
  //     .then((data) => {
  //       setSummary(data.default?.resume?.summary || data.resume?.summary || "");
  //     })
  //     .catch(() => setSummary("Could not load resume summary."));
  // }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const arrowElement = document.getElementById("Arrow");
      const bracketElement = document.getElementById("LeftBracket");
      
      // Show/Hide Arrow when above 100px
      if(scrollTop >= 100){
        arrowElement?.classList.add("hidden");
      }else{
        arrowElement?.classList.remove("hidden");
      }
      
      // Animate the < symbol based on scroll
      if(bracketElement) {
        // Calculate movement: move left as we scroll down (max 50px)
        const maxScroll = 300; // Maximum scroll distance to consider
        const maxMovement = 200; // Maximum pixels to move left
        const movement = Math.min((scrollTop / maxScroll) * maxMovement, maxMovement);
        
        bracketElement.style.transform = `translateX(-${movement}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderIntroWithStyledName = (text: string) => {
    // Split the text around "Ilyas" and style it differently
    const parts = text.split("Ilyas");
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 dark:from-purple-700 dark:to-indigo-100 bg-clip-text text-transparent">
            Ilyas
          </span>
          {parts[1]}
        </>
      );
    }
    return text;
  };
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
    <section className="flex items-center justify-center h-screen mx-auto text-lg w-2/3 text-gray-900 dark:text-white transition-colors font-cabinet">
      <div className="text-center space-y-6 -mt-30">
        {/* <h2 className="w-full text-4xl font-bold mb-10 text-gray-900 dark:text-white">{translations[lang].resume}</h2> */}
        <p 
          id="LeftBracket"
          className="text-7xl duration-700 ease-in-out font-medium text-left text-shadow-lg/20 text-blue-500 dark:text-purple-700 transition-transform "
        >
          &lt;
        </p>
        <p className="text-4xl mb-20 font-medium">
          {renderIntroWithStyledName(translations[lang].intro)}
        </p>
        <p className="text-lg font-normal">{translations[lang].summary}</p>
        <p className="text-center mt-80" id="Arrow">
          <svg className="size-8 animate-bounce m-auto" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </p>
        
      </div>
    </section>
  );
};

export default Resume;
