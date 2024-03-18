import React, { useState } from "react";
import Image from "next/image";
import experiences from "@/data/experiences.json";

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpandCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="max-w-8xl text-lg p-5 mt-10">
      <p className="text-base text-center md:text-lg lg:text-neutral-500 py-2">
        WHAT I HAVE{" "}
        <span className="text-blue-400 font-semibold">DONE SO FAR ?</span>
      </p>
      <h1 className="text-4xl text-center font-semibold mb-3">
        WORK EXPERIENCES
      </h1>
      <p className=" max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400 mb-10">
        Unlocking the Past, Present, and Future: My Professional Journey So Far!
      </p>
      
      <div className="md:mx-20 md:px-20 my-10 space-y-8 relative before:absolute before:inset-0 before:mx-auto before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-400 before:to-transparent">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active transition-transform ease-in-out duration-300 transform hover:scale-105`}
          >
            <div className="my-10 flex items-center justify-center w-20 h-20 md:w-10 md:h-10 rounded-full border-2 border-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                height={100}
                width={100}
                src={experience.image}
                alt={experience.company}
                className="rounded-full w-full h-full"
              />
            </div>

            <div className="border bg-white w-full md:w-[calc(50%-2.5rem)] px-10 py-6 rounded-xl border-1 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between space-x-2 md:items-start md:justify-between">
                <div>
                  <h1 className="font-semibold text-slate-600 text-center md:text-left">{experience.title}</h1>
                  <h1 className="font-base text-slate-600 text-center md:text-left">{experience.company}<br />
                    <span className="font-semibold text-sm text-slate-600">({experience.type})</span>
                  </h1>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <time className="font-sm text-blue-400 text-right whitespace-nowrap">{experience.date}</time>
                  <h2 className="font-base text-slate-600 whitespace-nowrap">{experience.location}</h2>
                </div>
              </div>
              <ul className="list-disc m-2 md:m-5 text-base text-slate-600">
                {experience.description.slice(0, 3).map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
                {expandedCard === index &&
                  experience.description.slice(2).map((point, i) => (
                    <li key={i + 3}>{point}</li>
                  ))}
              </ul>
              {experience.description.length > 3 && (
                <button
                  onClick={() => toggleExpandCard(index)}
                  className="text-blue-400 cursor-pointer focus:outline-none"
                >
                  {expandedCard === index ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
