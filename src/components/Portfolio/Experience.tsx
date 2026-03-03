import "intersection-observer";
import { useEffect, useRef } from "react";
import Image from "next/image";
import experiences from "@/data/experiences.json";
import ExperienceCard from "../card/ExperienceCard";

const Experience = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    const handleScroll = () => {
      // The point on the screen (50% down) at which the line begins filling
      const fillPoint = window.innerHeight * 0.6; 
      
      linesRef.current.forEach((lineEl) => {
        if (!lineEl) return;
        const rect = lineEl.getBoundingClientRect();
        
        // Ensure lines near the top of the page don't pre-fill before scrolling starts
        // We use Math.min to force the fill point to initially sit slightly above the element
        const absoluteY = rect.top + window.scrollY;
        const fillPoint = Math.min(window.innerHeight * 0.5, absoluteY - 50);
        
        let progress = (fillPoint - rect.top) / rect.height;
        progress = Math.max(0, Math.min(1, progress));
        
        const blueLine = lineEl.firstElementChild as HTMLElement;
        if (blueLine) {
          blueLine.style.transform = `scaleY(${progress})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-8xl text-lg p-5 mt-10" id="Experience">
      <div className="flex flex-col mx-auto w-full relative sm:px-6 lg:px-8 mb-16">
        
        <div className="flex items-center gap-4 mb-8 mt-2 lg:ml-8">
          <div className="h-[3px] w-12 md:w-16 bg-gray-900"></div>
          <span className="text-sm md:text-base font-medium tracking-[0.2em] text-gray-900 uppercase">
            Story
          </span>
        </div>
         <h2 className="text-3xl font-medium sm:text-3xl lg:text-3xl tracking-normal">
          My Development Journey
        </h2>
      </div>
      <div className="relative mx-auto w-full max-w-5xl px-0 sm:px-6 lg:px-8 mt-12 mb-20">
        <div className="flex flex-col gap-8 sm:gap-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
              className="relative flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-8 group opacity-0 translate-y-10 transition-all transform duration-700 ease-in-out"
            >
              {/* Timeline Line Container */}
              {index !== experiences.length - 1 && (
                <div 
                  ref={(el) => { linesRef.current[index] = el; }}
                  className="absolute left-1/2 sm:left-[2.25rem] top-[3.5rem] sm:top-[4.5rem] -bottom-8 sm:-bottom-12 w-[2px] bg-gray-100 -z-10 -translate-x-1/2"
                >
                  {/* Animated Blue line covering the background line using smooth scroll scale */}
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#3b82f6] origin-top scale-y-0 transition-none z-0"></div>
                </div>
              )}

              {/* Timeline Column */}
              <div className="relative flex flex-col items-center w-14 sm:w-[4.5rem] shrink-0">
                {/* Circle */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full border-[2px] border-gray-100 bg-white shadow-sm mt-0 overflow-hidden group-[.opacity-100]:border-[#3b82f6] transition-colors duration-[1000ms] delay-300">
                  <Image
                    height={100}
                    width={100}
                    src={
                      experience.image
                        ? experience.image
                        : "/assets/icons/briefcase.svg"
                    }
                    alt={experience.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Card Column */}
              <div className="flex-1 pb-2 w-full">
                <ExperienceCard
                  title={experience.title}
                  company={experience.company}
                  date={experience.date}
                  location={experience.location}
                  reference={experience.reference}
                  skills={experience.skills}
                  description={experience.description}
                  image={experience.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
