import { useEffect } from "react";

export const useIntersectionObserver = (
  refs: React.MutableRefObject<Array<HTMLDivElement | null>>
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-bounceIn", "opacity-100");
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.remove("animate-bounceIn", "opacity-100");
            entry.target.classList.add("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const validElements = refs.current.filter(
      (card): card is HTMLDivElement => card !== null
    );
    validElements.forEach((card) => observer.observe(card));

    return () => {
      validElements.forEach((card) => observer.unobserve(card));
    };
  }, [refs]);
};

export const useSlideInObserver = (
  refs: React.MutableRefObject<Array<HTMLDivElement | null>>
) => {
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

    const validElements = refs.current.filter(
      (card): card is HTMLDivElement => card !== null
    );
    validElements.forEach((card) => observer.observe(card));

    return () => {
      validElements.forEach((card) => observer.unobserve(card));
    };
  }, [refs]);
};
