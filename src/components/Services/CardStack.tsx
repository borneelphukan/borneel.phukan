import { useRef } from "react";
import Card from "../card/Card";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CreateIcon from '@mui/icons-material/Create';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { useIntersectionObserver } from "@/hooks/observers";

const CardStack = () => {
  const serviceCardData = [
    [
      "Fullstack Developer",
      "3+ years of experience in building Web Applications, Application Programming Interfaces (API), Microservices, UI/UX prototypes, everything following Agile Methodologies.",
      "Typescript, Next.js, Nest.js, REST API, Postgresql, Tailwind, AWS, Git",
    ],
    [
      "Machine Learning",
      "Experiences with developing, training and optimizing machine learning models and deep learning (CNN, RNN) models powered by Computer Vision. Possess a research publication and various projects.",
      "Tensorflow, OpenCV, ScikitLearn, Matplotlib, Pytorch",
    ],
    [
      "Content Writing",
      "A voracious freelance writer obsessed with writing technical and current affairs content in English, including content for websites, blogs, technical reviews, and academic papers.",
      "Blog Writing, Technical Writing, Copywriting, Ghost Writing, Creative writing, Email Marketing Content",
    ],
  ];

  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  useIntersectionObserver(cardsRef);

  const getIconByIndex = (index: number) => {
    const icons = [CodeIcon, StorageIcon, CreateIcon];
    return icons[index % icons.length] || HelpOutlineIcon;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" id="Services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCardData.map((cardData, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 transform translate-y-5 transition-all duration-700 ease-in-out will-change-transform will-change-opacity"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card
                icon={getIconByIndex(index)}
                title={cardData[0]}
                content={cardData[1]}
                skills={cardData[2]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardStack;
