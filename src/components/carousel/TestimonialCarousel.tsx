import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialsCard from "../../components/card/TestimonialsCard";
import testimonialsData from "@/data/testimonials.json";
import { useTranslation } from "react-i18next";

export const TestimonialCarousel = () => {
  const [clientCount, setClientCount] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (clientCount < testimonialsData.length) {
        setClientCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [clientCount]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto" id="Testinomials">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 my-20">
        <p className="text-base md:text-lg lg:text-neutral-500">
          <span className="text-blue-400 font-semibold uppercase">
            {clientCount}{" "}
          </span>
          {t("reviewSuperHeader")}
        </p>
        <h1 className="text-4xl font-semibold mb-3">{t("reviewHeader")}</h1>

        <p className="max-w-md mx-auto text-base md:text-lg lg:text-neutral-400 mb-10">
          {t("reviewSubHeader")}
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
