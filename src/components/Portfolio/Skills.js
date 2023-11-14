import React from "react";
import Image from "next/image";

const Skills = () => {
  const frameworks = [
    "/skills/Frameworks/next.webp",
    "/skills/Frameworks/nuxt.png",
    "/skills/Frameworks/react.png",
    "/skills/Frameworks/vue.png",
    "/skills/Frameworks/node.jpg",
    "/skills/Frameworks/tailwind.png",
    // Add more image URLs for frontend skills as needed
  ];

  const programming = [
    "/skills/Programming/html5.jpeg",
    "/skills/Programming/css3.webp",
    "/skills/Programming/typescript.png",
    "/skills/Programming/javascript.png",
    "/skills/Programming/python.webp",
    "/skills/Programming/java.png",
    "/skills/Programming/mongodb.svg",
    "/skills/Programming/postgresql.svg",
    // Add more image URLs for backend skills as needed
  ];

  const tools = [
    "/skills/tools/figma.png",
    "/skills/tools/git.webp",
    "/skills/tools/github.png",
    "/skills/tools/jira.png",
    "/skills/tools/ms-office.png",
    // Add more image URLs for machine learning skills as needed
  ];

  return (
    <div className="max-w-8xl text-lg p-5 my-10">
      <p className="text-base text-center md:text-lg lg:text-neutral-500 py-2">
        DO I HAVE{" "}
        <span className="text-blue-400 font-semibold">RELEVANT SKILLS ?</span>
      </p>
      <h1 className="text-4xl text-center font-semibold mb-3">SKILLS</h1>
      <p className="max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400 mb-10">
        Here are all the skills that I learned from self-learning and industrial
        experiences
      </p>

      <div className="container mx-auto p-5 md:p-10 lg:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="col-span-1 mx-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Libraries & Frameworks
            </h2>
            <div className="grid grid-cols-5 gap-4">
              {frameworks.map((imageUrl, index) => (
                <div
                  key={index}
                  className="rounded-full w-20 md:w-20 h-20 md:h-20"
                >
                  <Image
                    height={100}
                    width={100}
                    src={imageUrl}
                    alt="frameworks"
                    className="rounded-full w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 mx-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Programming & Databases
            </h2>
            <div className="grid grid-cols-5">
              {programming.map((imageUrl, index) => (
                <div
                  key={index}
                  className="rounded-full w-20 md:w-20 h-20 md:h-20 mb-3"
                >
                  <Image
                    height={100}
                    width={100}
                    src={imageUrl}
                    alt="Programming & Database"
                    className="rounded-full w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 mx-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">Tools</h2>
            <div className="grid grid-cols-5 gap-4">
              {tools.map((imageUrl, index) => (
                <div
                  key={index}
                  className="rounded-full w-20 md:w-20 h-20 md:h-20 bg-gray-100"
                >
                  <Image
                    height={100}
                    width={100}
                    src={imageUrl}
                    alt="Tools"
                    className="rounded-full w-full h-full"
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
