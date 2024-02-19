import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PublicationCardProps = {
  paperName: string;
  publisherName: string;
  publicationDate: string;
  description: string;
  showPublication: string;
  citations: number;
  publicationLink: string;
};

const PublicationCard: React.FC<PublicationCardProps> = ({
  paperName,
  publisherName,
  publicationDate,
  description,
  showPublication,
  citations,
  publicationLink,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const openPublicationLink = () => {
    window.open(publicationLink, "_blank");
  };

  return (
    <div className="shadow-md border rounded-xl p-8 hover:shadow-xl transition duration-300 ease-in-out">
      {/* First Row */}
      <div className="text-xl font-bold mb-2">{paperName}</div>

      {/* Second Row */}
      <div className="flex mb-4">
        <div className="w-1/2">{publisherName}</div>
        <time className="w-1/2 text-right font-caveat font-medium text-blue-400">
          {publicationDate}
        </time>
      </div>

      {/* Third Row */}
      <div className="mb-4">
        {expanded ? description : `${description.slice(0, 150)}... `}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={toggleDescription}
        >
          {expanded ? " Read less" : " Read more"}
        </span>
      </div>

      {/* Fourth Row */}
      <div className="flex mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-3xl"
          onClick={openPublicationLink}
        >
          {showPublication}
          <FontAwesomeIcon className="mx-3" icon={"function"} />
        </button>
      </div>
      <div className="flex mt-4">
        <div className="ml-auto">{citations} Citations</div>
      </div>
    </div>
  );
};

export default PublicationCard;
