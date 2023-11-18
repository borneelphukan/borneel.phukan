import React from "react";
import PublicationCard from "../card/PublicationCard";

const Publications = () => {
    return (
      <div className="max-w-8xl text-lg p-5 my-10">
        <p className="text-base text-center md:text-lg lg:text-neutral-500 py-2">
          INTERESTED IN{" "}
          <span className="text-blue-400 font-semibold">MY PUBLICATIONS ?</span>
        </p>
        <h1 className="text-4xl text-center font-semibold mb-3">
          PUBLICATIONS
        </h1>
        <p className="max-w-md mx-auto text-center text-base md:text-lg lg:text-neutral-400 mb-10">
          I research using self-learning and industrial experience, actively
          contributing to my field through successful publications.
        </p>

        <div className="container mx-auto p-5 md:p-10 lg:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="col-span-1 mx-5">
              <PublicationCard
                paperName="An Efficient Technique for Image Captioning using Deep Neural Network"
                publisherName="Cognitive Informatics and Soft Computing, Springer 2020"
                publicationDate="31 July 2021"
                description="With the vast expansion of the Internet and the generation of trillions of gigabytes of data daily, the demand for tools is essential to ensure system adaptability to rapid changes. Image captioning is a crucial tool in identifying and managing entities online. This paper explores an efficient method for automatic image captioning, addressing strategies to enhance its performance and functionality on individual images."
                showPublication="Open"
                citations={3}
              />
              <div className="grid grid-cols-5 gap-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Publications;

