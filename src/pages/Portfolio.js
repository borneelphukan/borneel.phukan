"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import Experience from "@/components/Portfolio/Experience";
import Education from "@/components/Portfolio/Education";
import Skills from "@/components/Portfolio/Skills";
import Publications from "@/components/Portfolio/Publications";

const Portfolio = () => {
  return (
    <DefaultLayout>
      <Experience />
      <Education />
      <Skills />
      <Publications/>
    </DefaultLayout>
  );
};

export default Portfolio;
