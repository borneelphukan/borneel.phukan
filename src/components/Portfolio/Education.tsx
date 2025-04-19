import "intersection-observer";
import { useEffect, useRef } from "react";
import Image from "next/image";
import educations from "@/data/education.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          } else {
            entry.target.classList.add("opacity-0", "translate-y-10");
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="max-w-8xl text-lg p-5" id="Education">
      <h1 className="text-4xl text-center font-semibold mb-3">EDUCATION</h1>
      <div className="mx-4 md:mx-20 px-4 md:px-20 my-10 space-y-8 relative before:absolute before:inset-0 before:mx-auto before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-400 before:to-transparent">
        {educations.map((education, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
            className="relative flex flex-col md:flex-row items-center justify-between md:justify-normal md:odd:flex-row-reverse group opacity-0 translate-y-10 transition-opacity transform duration-700 ease-in-out"
          >
            <div className="my-10 flex items-center justify-center w-24 h-24 md:w-10 md:h-10 rounded-full border-2 border-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                height={100}
                width={100}
                src={education.image}
                alt={education.university}
                className="rounded-full w-full h-full"
              />
            </div>

            <div className="border bg-white w-full md:w-[calc(50%-2.5rem)] px-10 py-6 rounded-xl border-1 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="flex flex-col space-y-1">
                  <h1 className="text-sm font-semibold text-blue-800 leading-tight">
                    {education.degree}
                  </h1>
                  <h1 className=" font-bold text-gray-800 leading-tight">
                    {education.course}
                  </h1>
                  <div className="flex items-center">
                    <h2 className="text-base font-medium text-gray-600">
                      {education.university}
                    </h2>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-end">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="w-3 h-3 mr-1.5 text-gray-400"
                    />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="w-3 h-3 mr-1.5 text-gray-400"
                    />
                    <time>{education.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
