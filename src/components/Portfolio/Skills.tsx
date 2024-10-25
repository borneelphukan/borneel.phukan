import Image from "next/image";
import skillsData from "@/data/skills.json";

const Skills = () => {
  const { programming, frontend, backend, devops, machineLearning, tools } =
    skillsData;

  return (
    <div className="max-w-8xl text-lg p-5" id="Skills">
      <h1 className="text-4xl text-center font-semibold mb-10">SKILLS</h1>

      <div className="container md:p-10 lg:p-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="col-span-1 m-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Programming Languages
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
              {programming.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 m-1 sm:m-2 lg:m-3"
                >
                  <Image
                    height={80}
                    width={80}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110 hover:rotate-45"
                  />
                  <div className="flex items-center justify-center text-xs sm:text-sm md:text-base mt-2">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Tools */}
          <div className="col-span-1 m-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Frontend Tools
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
              {frontend.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 m-1 sm:m-2 lg:m-3"
                >
                  <Image
                    height={80}
                    width={80}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110 hover:-rotate-45"
                  />
                  <div className="flex items-center justify-center text-xs sm:text-sm md:text-base mt-2">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Tools */}
          <div className="col-span-1 m-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Backend Tools
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
              {backend.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 m-1 sm:m-2 lg:m-3"
                >
                  <Image
                    height={80}
                    width={80}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110 hover:rotate-45"
                  />
                  <div className="flex items-center justify-center text-xs sm:text-sm md:text-base mt-2">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps Tools */}
          <div className="col-span-1 m-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              DevOps Tools
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
              {devops.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 m-1 sm:m-2 lg:m-3"
                >
                  <Image
                    height={80}
                    width={80}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110 hover:-rotate-45"
                  />
                  <div className="flex items-center justify-center text-xs sm:text-sm md:text-base mt-2">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Learning Tools */}
          <div className="col-span-1 m-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Maching Learning Tools
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
              {machineLearning.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 m-1 sm:m-2 lg:m-3"
                >
                  <Image
                    height={80}
                    width={80}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110 hover:rotate-45"
                  />
                  <div className="flex items-center justify-center text-xs sm:text-sm md:text-base mt-2">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Tools */}
          <div className="col-span-1 m-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Other Tools
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
              {tools.map(({ name, imageUrl }, index) => (
                <div
                  key={index}
                  className="rounded-full w-12 h-12 sm:w-16 sm:h-16 m-1 sm:m-2 lg:m-3"
                >
                  <Image
                    height={80}
                    width={80}
                    src={imageUrl}
                    alt={name}
                    className="rounded-full w-full h-full transform transition-transform hover:scale-110 hover:-rotate-45"
                  />
                  <div className="flex items-center justify-center text-xs sm:text-sm md:text-base mt-2">
                    {name}
                  </div>
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
