import "intersection-observer";
import { useEffect, useRef } from "react";
import Image from "next/image";
import experiences from "@/data/experiences.json";

const Experience = () => {
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
      if (card) observer.observe(card); // Ensure card is not null
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card); // Add null check here
      });
    };
  }, []);

  return (
    <div className="max-w-8xl text-lg p-5 mt-10" id="Experience">
      <h1 className="text-4xl text-center font-semibold mb-3">
        WORK EXPERIENCES
      </h1>
      <div className="md:mx-20 md:px-20 my-10 space-y-8 relative before:absolute before:inset-0 before:mx-auto before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-400 before:to-transparent">
        {experiences.map((experience, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
            className="relative flex flex-col md:flex-row items-center justify-between md:justify-normal md:odd:flex-row-reverse group opacity-0 translate-y-10 transition-opacity transform duration-700 ease-in-out"
          >
            <div className="my-10 flex items-center justify-center w-24 h-24 md:w-10 md:h-10 rounded-full border-2 border-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                height={100}
                width={100}
                src={
                  experience.image
                    ? experience.image
                    : "/assets/icons/briefcase.svg"
                }
                alt={experience.company}
                className="rounded-full w-full h-full"
              />
            </div>

            <div className="border bg-white w-full md:w-[calc(50%-2.5rem)] px-10 py-6 rounded-xl border-1 shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-between space-x-2 md:items-start md:justify-between">
                <div>
                  <h1 className="font-semibold text-slate-600 text-center md:text-left">
                    {experience.title}
                  </h1>
                  <h1 className="font-base text-slate-600 text-center md:text-left">
                    {experience.company}
                    <br />
                    <span className="font-semibold text-sm text-slate-600">
                      ({experience.type})
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <time className="font-sm text-blue-400 text-right whitespace-nowrap">
                    {experience.date}
                  </time>
                  <h2 className="font-base text-slate-600 whitespace-nowrap">
                    {experience.location}
                  </h2>
                  <a
                    href={experience.reference}
                    className="font-semibold text-sm text-blue-600 text-right whitespace-nowrap underline underline-offset-4"
                    target="_blank"
                  >
                    {experience.reference ? "Reference Letter" : ""}
                  </a>
                </div>
              </div>
              <div>
                <p className="text-base font-bold dark:text-black">Skills: </p>
                <p className="text-base dark:text-black">{experience.skills}</p>
              </div>
              <ul className="list-disc m-2 md:m-5 text-base text-slate-600">
                {experience.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
