import React from "react";
import FreelanceCard from "../../card/FreelanceCard";
import freelanceData from "@/data/freelance-data.json";
import { useTranslation } from "react-i18next";

const FreelanceStack = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-8xl text-lg mt-20 mx-5">
      <h1 className="text-4xl text-center font-semibold mb-3">
        {t("clientProjectHeader")}
      </h1>
      <p className="max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400">
        {t("clientProjectsBanner")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
        {freelanceData.map((project, index) => (
          <FreelanceCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default FreelanceStack;
