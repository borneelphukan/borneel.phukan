import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialsCard from "../../components/card/TestimonialsCard";
import testimonialsData from "@/data/testimonials.json";
import { useTranslation } from "react-i18next";
import { useCounterAnimation } from "@/hooks/animations";

export const TestimonialCarousel = () => {
  const { t } = useTranslation();
  const clientCount = useCounterAnimation(testimonialsData.length, 100);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    dotsClass: "slick-dots !bottom-[-30px]",
    customPaging: (i: number) => (
      <div className="w-2 h-2 bg-gray-300 rounded-full transition-colors duration-300 slick-active:bg-blue-500"></div>
    ),
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24" id="Testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">
            <span className="font-bold text-xl align-middle mr-1">
              {clientCount}{" "}
            </span>
            {t("reviewSuperHeader")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("reviewHeader")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t("reviewSubHeader")}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl mb-12 sm:mb-16">
          <Slider {...settings}>
            {testimonialsData.map(
              ({ avatar, name, comment, stars, role }, index) => (
                <div className="px-2 py-4 md:px-3" key={index}>
                  <TestimonialsCard
                    avatar={avatar}
                    name={name}
                    comment={comment}
                    stars={stars}
                    role={role}
                  />
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};
