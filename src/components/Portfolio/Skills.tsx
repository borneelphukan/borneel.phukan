import React from "react";
import Image from "next/image";
import skillsData from "@/data/skills.json";

const Skills = () => {
  const { frameworks, programming, tools, machineLearning } = skillsData;

  return (
    <div className="max-w-8xl text-lg p-5">
      <p className="text-base text-center md:text-lg lg:text-neutral-500 py-2">
        DO I HAVE{" "}
        <span className="text-blue-400 font-semibold">RELEVANT SKILLS ?</span>
      </p>
      <h1 className="text-4xl text-center font-semibold mb-10">SKILLS</h1>

      <div className="container md:p-10 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="col-span-1 mx-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Libraries & Frameworks
            </h2>
            <div className="grid grid-cols-5 gap-4">
              {frameworks.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-20 md:w-20 h-20 md:h-20"
                >
                  <Image
                    height={100}
                    width={100}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 mx-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Programming & Databases
            </h2>
            <div className="grid grid-cols-5 gap-4">
              {programming.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-20 md:w-20 h-20 md:h-20"
                >
                  <Image
                    height={100}
                    width={100}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 mx-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">Tools</h2>
            <div className="grid grid-cols-5 gap-4">
              {tools.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-20 md:w-20 h-20 md:h-20"
                >
                  <Image
                    height={100}
                    width={100}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 mx-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Machine Learning
            </h2>
            <div className="grid grid-cols-5 gap-4">
              {machineLearning.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-20 md:w-20 h-20 md:h-20"
                >
                  <Image
                    height={100}
                    width={100}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
