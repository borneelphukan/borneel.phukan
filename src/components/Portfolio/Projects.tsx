import "intersection-observer"; // Import the polyfill for older browsers if needed
import React, { useEffect, useRef } from "react";
import ProjectCard from "../card/ProjectCard";
import projectsData from "@/data/projects.json";

const Projects = () => {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]); // Define cardsRef as an array of nullable HTMLDivElements

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

    // Filter out any null values before observing
    const validElements = cardsRef.current.filter(
      (card): card is HTMLDivElement => card !== null
    );
    validElements.forEach((card) => observer.observe(card));

    return () => {
      // Filter out any null values before unobserving
      validElements.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="max-w-8xl text-lg p-5" id="Projects">
      <h1 className="text-4xl text-center font-semibold mb-3">PROJECTS</h1>
      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-10 mb-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="transform transition-opacity duration-700 ease-in-out opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
