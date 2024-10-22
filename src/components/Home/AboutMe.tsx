
import Image from "next/image";
import Avatar from "../../../public/assets/borneel.png";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  const aboutme: string[] = t("aboutme", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="p-4 md:p-10 mx-4 md:mx-10 md:mb-10">
      <h1 className="text-4xl md:text-4xl mb-4 md:mb-10 text-center">{aboutme[0]}</h1>

      <p className="text-base md:text-base text-justify">{aboutme[1]}</p>

      <div className="flex flex-col md:flex-row items-center pt-4 md:pt-10">
        <div className="h-60 w-60 mx-auto rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src={Avatar}
            width={200}
            height={200}
            alt="Your Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:pl-20 flex-1">
          <p className="font-bold text-lg md:text-xl">{aboutme[2]}</p>
          <p className="text-base md:text-base text-justify">{aboutme[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
