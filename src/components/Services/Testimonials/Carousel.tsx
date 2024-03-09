import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialsCard from "./TestimonialsCard";
import testimonialsData from "@/data/testimonials.json";

export const TestimonialCarousel = () => {
  const [clientCount, setClientCount] = useState(0); // State variable for counting clients

  useEffect(() => {
    const interval = setInterval(() => {
      if (clientCount < testimonialsData.length) {
        setClientCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Interval duration in milliseconds

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, [clientCount]); // Run effect whenever clientCount changes

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: testimonialsData.length, // Dynamic number of cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-20">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 my-10">
        <p className="text-base md:text-lg lg:text-neutral-500">
          <span className="text-blue-400 font-semibold">{clientCount} </span>HAPPY CLIENTS {/* Dynamic number */}
        </p>
        <h1 className="text-4xl font-semibold mb-3">Customer Reviews</h1>

        <p className="max-w-md mx-auto text-base md:text-lg lg:text-neutral-400 mb-10">
          Explore the testimonials of clients who have trusted us with their
          needs
        </p>

        <div className="px-auto overflow-hidden">
          <Slider {...settings}>
            {testimonialsData.map(
              ({ avatar, name, comment, stars, role }, index) => (
                <TestimonialsCard
                  key={index}
                  avatar={avatar}
                  name={name}
                  comment={comment}
                  stars={stars}
                  role={role}
                />
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};
