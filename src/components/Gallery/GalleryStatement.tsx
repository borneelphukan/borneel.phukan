import React from "react";
import { useTranslation } from "react-i18next";

const GalleryStatement = () => {
  const { t } = useTranslation();

  const galleryStatement: string[] = t("galleryStatement", {
    returnObjects: true,
  }) as string[];
  const galleryHeader: string[] = t("galleryHeader", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="mt-6 mx-auto">
      <p className="text-base text-center md:text-lg lg:text-neutral-600 py-2 uppercase">
        {galleryHeader[0]}{" "}
        <span className="text-blue-400 font-semibold uppercase">
          {galleryHeader[1]}
        </span>
      </p>
      <h1 className="text-4xl text-center font-semibold mb-3 uppercase">
        {galleryHeader[2]}
      </h1>
      <p className="max-w-3xl mx-auto text-center text-base md:text-lg lg:text-neutral-400 mb-5 px-5">
        {galleryStatement[0]}{" "}
        <a href="mailto:borneelphukan@gmail.com">
          <span className="underline underline-offset-4 hover:text-blue-400">
            {galleryStatement[1]}
          </span>
        </a>{" "}
        {galleryStatement[2]}
      </p>
    </div>
  );
};

export default GalleryStatement;
