import React from "react";
import Image from "next/image";
import Avatar from "@/components/HomePage/assets/borneel.jpg";
import textualData from "@/data/textual-data.json";

const AboutMe = () => {
  return (
    <div className="p-4 md:p-20 mx-4 md:mx-20 md:mb-20">
      <h1 className="text-3xl md:text-5xl mb-4 md:mb-10 text-center">About</h1>

      <p className="text-base md:text-base text-justify">
        {textualData.aboutme[0]}
      </p>

      <div className="flex flex-col md:flex-row items-center pt-4 md:pt-10">
        <div className="w-48 md:w-60 h-48 md:h-60 rounded-full overflow-hidden mb-4 md:mb-0">
          <Image
            src={Avatar}
            width={200}
            height={200}
            alt="Your Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:pl-20 flex-1">
          <p className="font-bold text-lg md:text-xl">Who am I?</p>
          <p className="text-base md:text-base text-justify">
            {textualData.aboutme[1]}
          </p>
        </div>
      </div>

      <p className="mt-4 md:mt-10 text-lg md:text-xl">
        <p className="font-bold text-lg md:text-xl">
          What is this website about?
        </p>
        <p className="text-base md:text-base text-justify">
          {textualData.aboutme[2]}
        </p>
      </p>
    </div>
  );
};

export default AboutMe;
