import React from "react";
import Image from "next/image";
import educations from "@/data/education.json";

const Education = () => {
  return (
    <div className="max-w-8xl text-lg p-5 my-10">
      <p className="text-base text-center md:text-lg lg:text-neutral-500 py-2">
        WONDERING IF I GOT A{" "}
        <span className="text-blue-400 font-semibold">RELEVANT DEGREE</span> ?
      </p>
      <h1 className="text-4xl text-center font-semibold mb-3">EDUCATION</h1>
      <p className=" max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400 mb-20">
        &ldquo;Education is the kindling of a flame, not the filling of a
        vessel.&rdquo; <span className="font-semibold">~ Socrates</span>
      </p>
      <div className="mx-4 md:mx-20 px-4 md:px-20 my-10 space-y-8 relative before:absolute before:inset-0 before:mx-auto before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-400 before:to-transparent">
        {educations.map((education, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active transition-transform ease-in-out duration-300 transform hover:scale-105`}
          >
            <div className="my-10 flex items-center justify-center w-20 h-20 md:w-10 md:h-10 rounded-full border-2 border-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                height={100}
                width={100}
                src={education.image}
                alt={education.company}
                className="rounded-full w-full h-full"
              />
            </div>

            <div className="w-full md:w-[calc(50%-2.5rem)] px-10 py-6 rounded border-1 bg-slate-100 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between space-x-2 mb-1">
                <h1 className="font-bold max-w-sm justify-center text-slate-900">
                  {education.degree}
                </h1>
                <time className="font-caveat font-medium text-blue-400">
                  {education.date}
                </time>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between space-x-2">
                <h1 className="font-base text-slate-900">
                  {education.university}{" "}
                </h1>
                <h2 className="font-base text-slate-900">
                  {education.location}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
