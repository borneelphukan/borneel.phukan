import Image from "next/image";
import skillsData from "@/data/skills.json";

const SkillCategory = ({
  title,
  skills,
  gridClasses,
}: {
  title: string;
  skills: { name: string; imageUrl: string }[];
  gridClasses: string;
}) => (
  <div className="col-span-1 m-2">
    <h2 className="text-xl md:text-2xl font-semibold mb-3">{title}</h2>
    <div
      className={`grid ${gridClasses} gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12`}
    >
      {skills.map(({ name, imageUrl }, index) => (
        <div
          key={index}
          className="rounded-full w-12 h-12 sm:w-16 sm:h-16 m-1 sm:m-2 lg:m-3"
        >
          <Image
            height={80}
            width={80}
            src={imageUrl}
            alt={name}
            className="rounded-full w-full h-full transform transition-transform hover:scale-110"
          />
          <div className="flex items-center justify-center text-xs sm:text-sm md:text-base mt-2">
            {name}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { programming, frontend, backend, devops, machineLearning, tools } =
    skillsData;

  const categories = [
    {
      title: "Programming Languages",
      data: programming,
      gridClasses: "grid-cols-4 md:grid-cols-4 lg:grid-cols-5",
    },
    {
      title: "Frontend Tools",
      data: frontend,
      gridClasses: "grid-cols-4 md:grid-cols-4 lg:grid-cols-5",
    },
    {
      title: "Backend Tools",
      data: backend,
      gridClasses: "grid-cols-4 md:grid-cols-4 lg:grid-cols-5",
    },
    {
      title: "DevOps Tools",
      data: devops,
      gridClasses: "grid-cols-4 md:grid-cols-4 lg:grid-cols-5",
    },
    {
      title: "Maching Learning Tools",
      data: machineLearning,
      gridClasses: "grid-cols-4 md:grid-cols-4 lg:grid-cols-5",
    },
    {
      title: "Other Tools",
      data: tools,
      gridClasses: "grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5",
    },
  ];

  return (
    <div className="max-w-8xl text-lg p-5" id="Skills">
      <h1 className="text-4xl text-center font-semibold mb-10">SKILLS</h1>

      <div className="container md:p-10 lg:p-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.data}
              gridClasses={category.gridClasses}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
