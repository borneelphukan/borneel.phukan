import React from "react";
import ProjectCard from "../card/ProjectCard";
import projectsData from "@/data/projects.json";

const Projects = () => {
  return (
    <div className="max-w-8xl text-lg p-5">
      <p className="text-base text-center md:text-lg lg:text-neutral-500 py-2">
        HAVE A LOOK AT{" "}
        <span className="text-blue-400 font-semibold">MY PROJECTS ?</span>
      </p>
      <h1 className="text-4xl text-center font-semibold mb-3">PROJECTS</h1>
      <p className="max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400 mb-10">
        I make a lot of personal projects in-line. Feel free to have a look.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-10 mb-20">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
