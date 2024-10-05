import React from "react";
import ProjectCard from "../card/ProjectCard";
import projectsData from "@/data/projects.json";

const Projects = () => {
  return (
    <div className="max-w-8xl text-lg p-5" id="Projects">
      <h1 className="text-4xl text-center font-semibold mb-3">PROJECTS</h1>
      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-10 mb-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
