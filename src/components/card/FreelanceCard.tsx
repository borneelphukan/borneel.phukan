import { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

type Props = {
  image: string;
  tags: string[];
  title: string;
  description: string;
};

const FreelanceCard = ({ image, tags, title, description }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const modalContent = isModalOpen && mounted ? createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm cursor-zoom-out"
      onClick={() => setIsModalOpen(false)}
      style={{ animation: "fadeIn 0.2s ease-out forwards" }}
    >
      {/* Using inline-block so the container shrink-wraps the exact dimensions of the image */}
      <div 
        className="relative inline-flex justify-center shadow-2xl rounded-xl" 
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "scaleUp 0.3s ease-out forwards", cursor: "default" }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-auto max-w-[100vw] sm:max-w-5xl max-h-[85vh] rounded-xl sm:rounded-2xl object-contain bg-black/20" 
        />
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
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
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
