import Image from "next/image";
import skillsData from "@/data/skills.json";

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; imageUrl: string }[];
}) => (
  <div className="col-span-1 m-2 overflow-hidden">
    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">{title}</h2>
    <div className="relative flex overflow-hidden mask-horizontal-gradient py-4">
      <div className="flex w-max animate-scroll-horizontal gap-8 sm:gap-12 pr-8 sm:pr-12 cursor-pointer">
        {[...skills, ...skills, ...skills, ...skills].map(({ name, imageUrl }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[80px]"
          >
            <div className="rounded-full w-14 h-14 sm:w-20 sm:h-20 mb-3 flex items-center justify-center">
              <Image
                height={60}
                width={60}
                src={imageUrl}
                alt={name}
                className="w-10 h-10 sm:w-12 sm:h-12 transform transition-transform duration-300 hover:scale-110 object-contain"
              />
            </div>
            <div className="flex items-center justify-center text-xs sm:text-sm font-medium text-gray-600 text-center">
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => {
  const { programming, frontend, backend, devops, tools } =
    skillsData;

  const categories = [
    {
      title: "Programming Tools",
      data: programming,
    },
    {
      title: "Frontend Tools",
      data: frontend,
    },
    {
      title: "Backend Tools",
      data: backend,
    },
    {
      title: "DevOps & Product Management",
      data: devops,
    },
    {
      title: "Creative Tools",
      data: tools,
    },
  ];

  return (
    <div 
      className="bg-[#f8f9fa] sm:py-12 text-lg" 
      id="Skills"
    >
      <div className="flex flex-col mx-auto w-full relative sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-4 mb-8 mt-2 lg:ml-8">
          <div className="h-[3px] w-12 md:w-16 bg-gray-900"></div>
          <span className="text-sm md:text-base font-medium tracking-[0.2em] text-gray-900 uppercase">
            Tools
          </span>
        </div>
         <h2 className="text-3xl font-medium sm:text-3xl lg:text-3xl tracking-normal">
          My toolstack
        </h2>
      </div>

      <style>{`
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-scroll-horizontal {
          animation: scrollHorizontal 25s linear infinite;
        }
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
        .mask-horizontal-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="container md:p-10 lg:p-10 mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
