import React from "react";
import Image from "next/image";
import Avatar from "@/components/HomePage/assets/borneel.jpg";
import textualData from "@/data/textual-data.json";

const AboutMe = () => {
  return (
    <div className="p-4 md:p-10 mx-4 md:mx-10 md:mb-10">
      <h1 className="text-3xl md:text-5xl mb-4 md:mb-10 text-center">About</h1>

      <p className="text-base md:text-base text-justify">
        {textualData.aboutme[0]}
      </p>

      <div className="flex flex-col md:flex-row items-center pt-4 md:pt-10">
        <div className="h-60 w-60 mx-auto rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src={Avatar}
            width={200}
            height={200}
            alt="Your Avatar"
            className="hover:scale-125 transition-all duration-500 cursor-pointer w-full h-full object-cover"
          />
        </div>
        <div className="md:pl-20 flex-1">
          <p className="font-bold text-lg md:text-xl">Who am I?</p>
          <p className="text-base md:text-base text-justify">
            {textualData.aboutme[1]}
          </p>
        </div>
      </div>

      <div className="mt-4 md:mt-10 text-lg md:text-xl">
        <p className="font-bold text-lg md:text-xl">
          What is this website about?
        </p>
        <p className="text-base md:text-base text-justify">
          {textualData.aboutme[2]}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
