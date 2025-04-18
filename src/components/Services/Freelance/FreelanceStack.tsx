import "intersection-observer";
import { useRef } from "react";
import FreelanceCard from "../../card/FreelanceCard";
import freelanceData from "@/data/freelance-data.json";
import { useTranslation } from "react-i18next";
import { useSlideInObserver } from "@/hooks/observers";

const FreelanceStack = () => {
  const { t } = useTranslation();
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useSlideInObserver(cardsRef);

  return (
    <div className="max-w-8xl text-lg mt-20 mx-5">
      <h1 className="text-4xl text-center font-semibold mb-3">
        {t("clientProjectHeader")}
      </h1>
      <p className="max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400">
        {t("clientProjectsBanner")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
        {freelanceData.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="transform transition-opacity duration-700 ease-in-out opacity-0 translate-y-10"
            style={{ transitionDelay: `${index * 0.3}s` }}
          >
            <FreelanceCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelanceStack;
