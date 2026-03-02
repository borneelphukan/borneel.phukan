import DefaultLayout from "@/layout/DefaultLayout";
import Experience from "@/components/Portfolio/Experience";
import Education from "@/components/Portfolio/Education";
import Publications from "@/components/Portfolio/Publications";
import Projects from "@/components/Portfolio/Projects";

const Portfolio = () => {
  return (
    <DefaultLayout>
      <Experience />
      <Education />
      <Publications />
      <Projects />
    </DefaultLayout>
  );
};

export default Portfolio;
