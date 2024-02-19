import React from "react";
import TestimonialsCard from "@/components/Services/Testimonials/TestimonialsCard";
import testimonialsData from "@/data/testimonials.json";

const Testimonials = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 my-10">
        <p className="text-base md:text-lg lg:text-neutral-500">
          <span className="text-blue-400 font-semibold">3 </span>HAPPY CLIENTS
        </p>
        <h1 className="text-4xl font-semibold mb-3">Customer Reviews</h1>

        <p className=" max-w-md mx-auto text-base md:text-lg lg:text-neutral-400 mb-10">
          Explore the testimonials of clients who have trusted us with their
          needs
        </p>

        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-1">
          {testimonialsData.map(({ avatar, name, comment, stars, role }, index) => (
            <TestimonialsCard
              key={index}
              avatar={avatar}
              name={name}
              comment={comment}
              stars={stars}
              role={role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
