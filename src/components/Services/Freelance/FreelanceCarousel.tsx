import Avatar from "../../../../public/experience/PTT.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import freelanceData from "@/data/freelance-data.json";

import Slider from "react-slick";
import FreelanceCard from "./FreelanceCard";

const FreelanceCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: freelanceData.length, // Dynamic number of cards
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
    <div className="container mx-auto p-10">
      <h1 className="text-4xl text-center font-semibold mb-3">FREELANCE WORKS</h1>
      <p className=" max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400 mb-10">
        I am actively involved with freelance works as well
      </p>
      <div className="px-auto overflow-hidden">
        <Slider {...settings}>
          {freelanceData.map(
              (data, index) => (
                <FreelanceCard
                  key={index}
                  {...data}
                />
              )
            )}
        </Slider>

      </div>
    </div>
  );
};

export default FreelanceCarousel;