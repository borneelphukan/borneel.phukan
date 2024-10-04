import React from "react";
import Button from "../buttons/Button";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  
  return (
    <div className="home-cover">
      <div className="container mx-auto px-10">
        {/*Banner Goes Here*/}
        <div className="py-16 md:py-24 lg:py-32 xl:py-48 text-black">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-base md:text-xl lg:text-xl xl:text-xl font-semibold mb-2 text-white uppercase">
              I am{" "}
              <span className="text-base md:text-xl lg:text-xl xl:text-2xl font-semibold mb-2 text-blue-400 uppercase">
                Borneel Bikash Phukan
              </span>
            </h1>
            <h1 className="md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-5xl mb-4 text-white">
              {t("role1")}{" "}
              <span className="text-6xl font-bold text-blue-400">&</span>
            </h1>
            <h1 className="md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-5xl mb-4 text-white cursor-blink">
              {t("role2")}
            </h1>
            <p className="text-md md:text-lg lg:text-xl text-gray-300 max-w-[50%]">
              {t("introduction")}
            </p>
            <Button
              bgColor="black"
              textColor="white"
              text="Download CV"
              file={"docs/CV.pdf"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
