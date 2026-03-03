import "intersection-observer";
import { useRef } from "react";
import FreelanceCard from "../../card/FreelanceCard";
import freelanceData from "@/data/freelance-data.json";

import { useSlideInObserver } from "@/hooks/observers";

const FreelanceStack = () => {

  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useSlideInObserver(cardsRef);

  return (
    <section className="bg-white py-16 sm:py-24" id="Projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mx-auto w-full relative sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[image:radial-gradient(#e5e7eb_3px,transparent_3px)] bg-[size:35px_35px] -z-10 bg-center"></div>
          
          <div className="flex items-center gap-6 mb-8 mt-2 lg:ml-8">
            <div className="h-[3px] w-12 md:w-16 bg-gray-900"></div>
            <span className="text-sm md:text-base font-medium tracking-[0.2em] text-gray-900 uppercase">
              Work
            </span>
          </div>
          <h2 className="text-4xl font-medium sm:text-4xl lg:text-4xl tracking-normal">
            Stuff I've done.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-none">
          <div className="grid grid-cols-1 gap-y-16 gap-x-12 lg:grid-cols-2">
            {freelanceData.map((project, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="transform transition-opacity duration-700 ease-in-out opacity-0 translate-y-10 flex" // Added flex here
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <FreelanceCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceStack;
