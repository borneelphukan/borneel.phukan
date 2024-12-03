import "intersection-observer";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../card/ProjectCard";
import projectsData from "@/data/projects.json";
import Tabs from "../common/Tabs";

const Projects = () => {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

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

    const validElements = cardsRef.current.filter(
      (card): card is HTMLDivElement => card !== null
    );
    validElements.forEach((card) => observer.observe(card));

    return () => {
      validElements.forEach((card) => observer.unobserve(card));
    };
  }, [filteredProjects]);

  const handleTabChange = (category: string) => {
    if (category === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === category)
      );
    }
  };

  return (
    <div className="max-w-8xl text-lg p-5" id="Projects">
      <h1 className="text-4xl text-center font-semibold mb-3">PROJECTS</h1>

      <Tabs
        onTabChange={handleTabChange}
        tabs={[
          { id: "all", label: "All" },
          { id: "frontend", label: "Frontend" },
          { id: "fullstack", label: "Fullstack" },
          { id: "machine-learning", label: "ML/AI" },
        ]}
      />

      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-10 mb-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="transform transition-opacity duration-700 ease-in-out opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 0.2}s` }}
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
