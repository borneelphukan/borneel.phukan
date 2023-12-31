import React from "react";
import PublicationCard from "../card/PublicationCard";
import publicationsData from "@/data/publications.json";

const Publications = () => {
  return (
    <div className="max-w-8xl text-lg p-5">
      <p className="text-base text-center md:text-lg lg:text-neutral-500 py-2">
        INTERESTED IN{" "}
        <span className="text-blue-400 font-semibold">MY PUBLICATIONS ?</span>
      </p>
      <h1 className="text-4xl text-center font-semibold mb-3">PUBLICATIONS</h1>
      <p className="max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400">
        I research using self-learning and industrial experience, actively
        contributing to my field through successful publications.
      </p>

      <div className="mx-auto p-5 md:p-10 lg:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {publicationsData.map((publication, index) => (
            <div className="col-span-1 mx-5" key={index}>
              <PublicationCard {...publication} />
              <div className="grid grid-cols-5 gap-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
