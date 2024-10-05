import React from "react";
import PublicationCard from "../card/PublicationCard";
import publicationsData from "@/data/publications.json";

const Publications = () => {
  return (
    <div className="max-w-8xl text-lg p-10" id="Publication">
      <h1 className="text-4xl text-center font-semibold mb-14 uppercase"> Research Works</h1>
      <div className="px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {publicationsData.map((publication, index) => (
            <div className="col-span-1" key={index}>
              <PublicationCard {...publication} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
