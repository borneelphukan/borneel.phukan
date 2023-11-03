import React from "react";
import Image from "next/image";
import experiences from "@/data/experiences.json";

const Experience = () => {
  return (
    <div className="mx-4 md:mx-20 px-4 md:px-20 my-10 space-y-8 relative before:absolute before:inset-0 before:mx-auto before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-400 before:to-transparent">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
        >
          <div className="my-10 flex items-center justify-center w-20 h-20 md:w-10 md:h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Image
              height={100}
              width={100}
              src={experience.image}
              alt={experience.company}
              className="rounded-full w-full h-full"
            />
          </div>

          <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded border-2 bg-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-x-2 mb-1">
              <h1 className="font-bold text-slate-900">{experience.title}</h1>
              <time className="font-caveat font-medium text-blue-400">
                {experience.date}
              </time>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-x-2">
              <h1 className="font-base text-slate-900">{experience.company}</h1>
              <h2 className="font-base text-slate-900">
                {experience.location}
              </h2>
            </div>
            <div className="text-slate-500">
              <ul className="list-disc m-2 md:m-5">
                {experience.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
