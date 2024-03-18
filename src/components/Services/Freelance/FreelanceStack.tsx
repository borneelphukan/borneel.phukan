import React from "react";
import FreelanceCard from "../Freelance/FreelanceCard";
import freelanceData from "@/data/freelance-data.json";

const Projects = () => {
  return (
    <div className="max-w-8xl text-lg mt-20 mx-5">
      <p className="text-base text-center md:text-lg lg:text-neutral-500 py-2">
       MY NOTABLE FREELANCE{" "}
        <span className="text-blue-400 font-semibold">PROJECTS ?</span>
      </p>
      <h1 className="text-4xl text-center font-semibold mb-3">FREELANCE</h1>
      <p className="max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400">
        I make a lot of personal projects in-line. Feel free to have a look.
      </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
        {freelanceData.map((project, index) => (
          <FreelanceCard key={index} {...project} />
        ))}
      </div>

      
    </div>
  );
};

export default Projects;
