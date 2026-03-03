import React, { useEffect, useState } from "react";
import Image from "next/image";

const CVBar = () => {
  const [scrolledPastSkills, setScrolledPastSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = window.innerHeight;
      // Trigger the transition slightly before the banner completely leaves the viewport to make it feel responsive
      if (window.scrollY > bannerHeight - 80) {
        setScrolledPastSkills(true);
      } else {
        setScrolledPastSkills(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out backdrop-blur-md rounded-full p-2 flex flex-row items-center justify-between shadow-2xl border ${
        scrolledPastSkills
          ? "w-[95%] md:w-[70%] max-w-4xl bg-white/70 border-white/40"
          : "w-[90%] md:w-[60%] max-w-2xl bg-[#1e2e3e]/80 border-white/10"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border border-white/20 ml-1 bg-gray-200">
          <Image
            src={"/assets/borneel.png"}
            width={48}
            height={48}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <span
          className={`text-base md:text-lg font-medium tracking-wide transition-colors duration-500 ${
            scrolledPastSkills ? "text-gray-900" : "text-white"
          }`}
        >
          Borneel Bikash Phukan
        </span>
      </div>
      <a
        href="/docs/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium transition-all text-sm md:text-base mr-1 ${
          scrolledPastSkills
            ? "bg-gray-900 text-white hover:bg-gray-800"
            : "bg-white text-gray-900 hover:bg-gray-100"
        }`}
      >
        View Resume
        <svg
          className={`w-4 h-4 md:w-5 md:h-5 ${scrolledPastSkills ? "text-white" : "text-gray-900"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default CVBar;
