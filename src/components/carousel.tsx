import TestimonialsCard from "./card/TestimonialsCard";
import testimonialsData from "@/data/testimonials.json";
import Image from "next/image";

import { useCounterAnimation } from "@/hooks/animations";

export const TestimonialCarousel = () => {

  const clientCount = useCounterAnimation(testimonialsData.length, 100);

  // Split testimonials into 3 columns for masonry
  const col1 = testimonialsData.filter((_, i) => i % 3 === 0);
  const col2 = testimonialsData.filter((_, i) => i % 3 === 1);
  const col3 = testimonialsData.filter((_, i) => i % 3 === 2);

  return (
    <section 
      className="bg-[#f8f9fa] py-16 sm:py-24" 
      id="Testimonials"
      style={{ backgroundImage: "radial-gradient(#d1d5db 2px, transparent 2px)", backgroundSize: "36px 36px" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          <div className="flex justify-center items-center gap-4 mb-6 mt-4">
            <div className="w-16 h-[2px] bg-black"></div>
            <p className="text-base font-medium tracking-[0.2em] text-black uppercase">Testimonials</p>
          </div>
          
          <h2 className="mb-12 text-2xl font-medium sm:text-3xl lg:text-3xl tracking-normal">
            My Success Stories.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <div className="flex -space-x-2">
              {testimonialsData.slice(0, 4).map((item, i) => (
                <Image key={i} width={48} height={48} className="inline-block h-12 w-12 sm:h-12 sm:w-12 rounded-full ring-4 ring-[#f8f9fa] object-cover object-top" src={item.avatar} alt={item.name} />
              ))}
              <div className="flex items-center justify-center h-12 w-12 sm:h-12 sm:w-12 rounded-full ring-4 ring-[#f8f9fa] bg-[#4ab0ff] text-white text-3xl font-light z-10 relative">
                +
              </div>
            </div>
            
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 sm:w-5 sm:h-5 text-[#fbbf24] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className=" text-gray-400 font-medium tracking-wide">
                Trusted by {clientCount}+ Leaders
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scrollVertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scrollVerticalReverse {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          .animate-scroll-vertical {
            animation: scrollVertical 20s linear infinite;
          }
          .animate-scroll-vertical-reverse {
            animation: scrollVerticalReverse 22s linear infinite;
          }
          .animate-scroll-vertical:hover, .animate-scroll-vertical-reverse:hover {
            animation-play-state: paused;
          }
          .mask-vertical-gradient {
            mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          }
        `}</style>
        
        <div className="mx-auto mt-16 max-w-[1400px] mb-12 sm:mb-16">
          <div className="relative h-[450px] sm:h-[480px] overflow-hidden mask-vertical-gradient">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              
              {/* Column 1 */}
              <div className="hidden lg:flex flex-col gap-6 animate-scroll-vertical group">
                {[...col1, ...col1].map((item, index) => (
                  <div key={`col1-${index}`} className="w-full transition-transform hover:-translate-y-1">
                    <TestimonialsCard {...item} />
                  </div>
                ))}
              </div>

              {/* Column 2 (Reversed) */}
              <div className="hidden md:flex flex-col gap-6 animate-scroll-vertical-reverse group">
                {[...col2, ...col2].map((item, index) => (
                  <div key={`col2-${index}`} className="w-full transition-transform hover:-translate-y-1">
                    <TestimonialsCard {...item} />
                  </div>
                ))}
              </div>

              {/* Column 3 / Main column on small screens */}
              <div className="flex flex-col gap-6 animate-scroll-vertical group">
                {[...(typeof window !== 'undefined' && window.innerWidth < 768 ? testimonialsData : col3), ...(typeof window !== 'undefined' && window.innerWidth < 768 ? testimonialsData : col3)].map((item, index) => (
                  <div key={`col3-${index}`} className="w-full transition-transform hover:-translate-y-1">
                    <TestimonialsCard {...item} />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
