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
    <section className="bg-white py-16 sm:py-24" id="Projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("clientProjectHeader")}
          </p>
          <h2 className="text-base font-semibold mt-2 text-blue-600 uppercase tracking-wide">
            {t("clientProjectsBanner")}
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {freelanceData.map((project, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="transform transition-opacity duration-700 ease-in-out opacity-0 translate-y-10 flex" // Added flex here
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <FreelanceCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceStack;
