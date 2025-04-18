import "intersection-observer";
import { useRef } from "react";
import Card from "../card/Card";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/observers";

const CardStack = () => {
  const { t } = useTranslation();
  const serviceCard: string[] = t("serviceCard", {
    returnObjects: true,
  }) as string[];

  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useIntersectionObserver(cardsRef);

  return (
    <div className="container px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5 mb-10">
      {serviceCard.map((cardData, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="opacity-0 transition-opacity duration-700 ease-in-out"
        >
          <Card
            icon={
              index === 0
                ? "fa-light fa-code"
                : index === 1
                ? "fa-light fa-server"
                : "fa-light fa-pencil"
            }
            title={cardData[0]}
            content={cardData[1]}
            skills={cardData[2]}
          />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
