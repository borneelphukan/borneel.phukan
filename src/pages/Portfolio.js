"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import Experience from "@/components/Portfolio/Experience";
import Education from "@/components/Portfolio/Education";
import Skills from "@/components/Portfolio/Skills";

const Portfolio = () => {
  return (
    <DefaultLayout>
      <Experience />
      <Education />
      <Skills />
    </DefaultLayout>
  );
};

export default Portfolio;
