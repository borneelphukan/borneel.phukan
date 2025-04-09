import Button from "../buttons/Button";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  const role: string[] = t("role", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="home-cover">
      <div className="container mx-auto px-10">
        {/*Banner Goes Here*/}
        <div className="py-16 md:py-24 lg:py-32 xl:py-48 text-black">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-base md:text-xl lg:text-xl xl:text-xl font-semibold mb-2 text-white uppercase">
              {role[0]}{" "}
              <span className="text-base md:text-xl lg:text-xl xl:text-2xl font-semibold mb-2 text-blue-400 uppercase">
                Borneel Bikash Phukan
              </span>
            </h1>
            <h1 className="md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-4xl mb-2 text-white">
              {role[1]}{" "}
              <span className="text-4xl font-bold text-blue-400">&</span>
            </h1>
            <h1 className="md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-4xl mb-4 text-white cursor-blink">
              {role[2]}
            </h1>
            <p className="text-md md:text-lg lg:text-xl text-gray-300 max-w-[60%]">
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
