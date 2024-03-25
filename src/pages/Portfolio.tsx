import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import Experience from "@/components/Portfolio/Experience";
import Education from "@/components/Portfolio/Education";
import Skills from "@/components/Portfolio/Skills";
import Publications from "@/components/Portfolio/Publications";
import Projects from "@/components/Portfolio/Projects";
import FreelanceStack from "@/components/Services/Freelance/FreelanceStack";

const Portfolio = () => {
  return (
    <DefaultLayout>
      <Experience />
      <FreelanceStack/>
      <Education />
      <Skills />
      <Publications />
      <Projects />
    </DefaultLayout>
  );
};

export default Portfolio;
