import "intersection-observer";
import { useEffect, useRef } from "react";
import Image from "next/image";
import experiences from "@/data/experiences.json";
import ExperienceCard from "../card/ExperienceCard";

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

            <ExperienceCard
              title={experience.title}
              company={experience.company}
              type={experience.type}
              date={experience.date}
              location={experience.location}
              reference={experience.reference}
              skills={experience.skills}
              description={experience.description}
              image={experience.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
