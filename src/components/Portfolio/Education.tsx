import "intersection-observer";
import { useEffect, useRef } from "react";
import Image from "next/image";
import educations from "@/data/education.json";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Education = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    const handleScroll = () => {
      // The point on the screen (50% down) at which the line begins filling
      const fillPointBase = window.innerHeight * 0.6; 
      
      linesRef.current.forEach((lineEl) => {
        if (!lineEl) return;
        const rect = lineEl.getBoundingClientRect();
        
        // Ensure lines near the top of the page don't pre-fill before scrolling starts
        const absoluteY = rect.top + window.scrollY;
        const fillPoint = Math.min(window.innerHeight * 0.5, absoluteY - 50);
        
        let progress = (fillPoint - rect.top) / rect.height;
        progress = Math.max(0, Math.min(1, progress));
        
        const blueLine = lineEl.firstElementChild as HTMLElement;
        if (blueLine) {
          blueLine.style.transform = `scaleY(${progress})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-8xl text-lg p-5 mt-10" id="Education">
      <div className="flex flex-col mx-auto w-full relative sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-4 mb-8 mt-2 lg:ml-8">
          <div className="h-[3px] w-12 md:w-16 bg-gray-900"></div>
          <span className="text-sm md:text-base font-medium tracking-[0.2em] text-gray-900 uppercase">
            Academics
          </span>
        </div>
         <h2 className="text-3xl font-medium sm:text-3xl lg:text-3xl tracking-normal">
          Educational Background
        </h2>
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-0 sm:px-6 lg:px-8 mt-12 mb-20">
        <div className="flex flex-col gap-8 sm:gap-12">
          {educations.map((education, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
              className="relative flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-8 group opacity-0 translate-y-10 transition-all transform duration-700 ease-in-out"
            >
              {/* Timeline Line Container */}
              {index !== educations.length - 1 && (
                <div 
                  ref={(el) => { linesRef.current[index] = el; }}
                  className="absolute left-1/2 sm:left-[2.25rem] top-[3.5rem] sm:top-[4.5rem] -bottom-8 sm:-bottom-12 w-[2px] bg-gray-100 -z-10 -translate-x-1/2"
                >
                  {/* Animated Blue line covering the background line using smooth scroll scale */}
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#3b82f6] origin-top scale-y-0 transition-none z-0"></div>
                </div>
              )}

              {/* Timeline Column */}
              <div className="relative flex flex-col items-center w-14 sm:w-[4.5rem] shrink-0">
                {/* Circle */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full border-[2px] border-gray-100 bg-white shadow-sm mt-0 overflow-hidden group-[.opacity-100]:border-[#3b82f6] transition-colors duration-[1000ms] delay-300">
                  <Image
                    height={100}
                    width={100}
                    src={education.image || "/assets/icons/book.svg"}
                    alt={education.university}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Card Column */}
              <div className="flex-1 pb-2 w-full">
                <div className="bg-white w-full p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow duration-300">
                  {/* Title mimicking "The Foundation" style from screenshot */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-[1.65rem] font-medium text-gray-800 tracking-tight">
                      {education.course} at <span className="text-[#3b82f6]">{education.university}</span>
                    </h3>
                  </div>
                  
                  {/* Description Paragraph */}
                  <div className="space-y-4 text-gray-500 font-light leading-relaxed text-base md:text-[1.1rem]">
                    <p className="font-medium text-gray-600">{education.degree}</p>
                  </div>

                  {/* Subtle Metadata underneath to preserve information without breaking the clean UI */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] sm:text-sm text-gray-400 font-light mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <CalendarTodayIcon className="w-[14px] h-[14px]" />
                      <span>{education.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <LocationOnIcon className="w-[14px] h-[14px]" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
