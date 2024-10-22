import "intersection-observer";
import { useEffect, useRef } from "react";
import PublicationCard from "../card/PublicationCard";
import publicationsData from "@/data/publications.json";

const Publications = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          } else {
            entry.target.classList.add("opacity-0", "translate-y-10");
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="max-w-8xl text-lg p-10" id="Publication">
      <h1 className="text-4xl text-center font-semibold mb-14 uppercase">
        Research Works
      </h1>
      <div className="px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {publicationsData.map((publication, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
              className="col-span-1 transform transition-opacity duration-700 ease-in-out opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <PublicationCard {...publication} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
