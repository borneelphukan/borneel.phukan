import { useRef } from "react";
import Card from "../card/Card";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/observers";

const CardStack = () => {
  const { t } = useTranslation();

  const serviceCardData: string[][] =
    (t("serviceCard", {
      returnObjects: true,
      defaultValue: [],
    }) as string[][]) || [];

  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  useIntersectionObserver(cardsRef);

  const getIconByIndex = (index: number): string => {
    const icons = ["fa-code", "fa-server", "fa-pencil"];
    return icons[index % icons.length] || "fa-question-circle";
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
