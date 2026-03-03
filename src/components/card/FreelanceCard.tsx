import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

type Props = {
  images: string[];
  tags: string[];
  title: string;
  description: string;
};

const FreelanceCard = ({ images, tags, title, description }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set mounted state for portal support
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Navigate images natively
  const handlePrev = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Handle keyboard navigation and escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, handlePrev, handleNext]);

  const hasMultipleImages = images.length > 1;

  const modalContent = isModalOpen && mounted ? createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md cursor-zoom-out"
      onClick={() => setIsModalOpen(false)}
      style={{ animation: "fadeIn 0.2s ease-out forwards" }}
    >
      <div 
        className="relative inline-flex flex-col items-center justify-center max-w-full" 
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "scaleUp 0.3s ease-out forwards", cursor: "default" }}
      >
        <div className="relative inline-flex flex-col items-center justify-center">
          <img 
            src={images[currentIndex]} 
            alt={`${title} - image ${currentIndex + 1}`} 
            className="w-auto max-w-[100vw] sm:max-w-6xl max-h-[85vh] rounded-xl sm:rounded-2xl object-contain shadow-2xl" 
          />
          
          {hasMultipleImages && (
            <>
              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="absolute -left-4 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all shadow-xl border border-white/20"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="absolute -right-4 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all shadow-xl border border-white/20"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div className="flex flex-col w-full h-full group p-4 md:p-6 hover:-translate-y-2 transition-transform duration-500">
        {/* Image container */}
        <div 
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 mb-6 shadow-md group-hover:shadow-2xl transition-shadow duration-500 cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Main Card Image */}
          <Image
            src={images[currentIndex]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-in-out"
          />
          
          {hasMultipleImages && (
            <>
              {/* Hover Navigation Overlay */}
              <div className="absolute inset-x-0 bottom-1/2 translate-y-1/2 flex justify-between px-3 md:px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button 
                  onClick={handlePrev}
                  className="p-1.5 md:p-2 bg-black/40 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-all shadow-lg pointer-events-auto"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="p-1.5 md:p-2 bg-black/40 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-all shadow-lg pointer-events-auto"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Lower minimal indicator dots array overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {images.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`} 
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm font-semibold tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-[1.75rem] font-bold text-[#202020] leading-snug mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#6b7280] text-base md:text-[1.1rem] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Render the portal natively outside the DOM hierarchy */}
      {modalContent}
    </>
  );
};

export default FreelanceCard;
