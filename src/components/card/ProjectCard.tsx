import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
};

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  buttonText,
  link,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const openPublicationLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="shadow-md border rounded-xl p-10 hover:shadow-xl transition duration-300 ease-in-out">
      {/* First Row */}
      <div className="text-xl font-bold mb-2">{title}</div>

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
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-2xl"
          onClick={openPublicationLink}
        >
          {buttonText}
          <FontAwesomeIcon className="mx-3" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
