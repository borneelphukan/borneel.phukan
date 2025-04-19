import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  start: string;
  end: string;
  description: string;
  buttonText: string;
  link: string;
};

const ProjectCard = (props: Props) => {
  const { title, start, end, description, buttonText, link } = props;
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const openProjectLink = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const isLinkAvailable = link && link.trim() !== "";
  const showButton = buttonText && buttonText.trim() !== "" && isLinkAvailable;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 sm:p-8 flex flex-col h-full">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 leading-tight">
        {title}
      </h3>

      <time className="block text-sm text-gray-500 mb-4">
        {start} - {end}
      </time>

      <div className="text-sm text-gray-700 mb-5 flex-grow">
        <p className="leading-relaxed">
          {expanded ? description : `${description.slice(0, 150)}...`}
          {description.length > 150 && (
            <span
              className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer ml-1 whitespace-nowrap"
              onClick={toggleDescription}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleDescription();
              }}
              role="button"
              tabIndex={0}
            >
              {expanded ? "Read less" : "Read more"}
            </span>
          )}
        </p>
      </div>

      {showButton && (
        <div className="mt-auto pt-4 border-t border-gray-100">
          <button
            className={`inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              !isLinkAvailable ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={openProjectLink}
            disabled={!isLinkAvailable}
            aria-label={`View details or visit link for ${title}`}
          >
            {buttonText}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="ml-2 h-3 w-3"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
