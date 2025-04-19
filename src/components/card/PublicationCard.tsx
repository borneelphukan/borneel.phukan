import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faExternalLinkAlt,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  paperName: string;
  publisherName: string;
  publicationDate: string;
  description: string;
  showPublication: string;
  citations?: number;
  publicationLink?: string;
};

const PublicationCard = (props: Props) => {
  const {
    paperName,
    publisherName,
    publicationDate,
    description,
    showPublication,
    citations,
    publicationLink,
  } = props;

  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const openPublicationLink = () => {
    if (publicationLink) {
      window.open(publicationLink, "_blank", "noopener,noreferrer");
    }
  };

  // Determine if the button should be disabled
  const isLinkAvailable = publicationLink && publicationLink.trim() !== "";

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 sm:p-8 flex flex-col h-full">
      {/* Paper Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">
        {paperName}
      </h3>

      <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500 mb-4">
        <span className="mb-1 sm:mb-0">{publisherName}</span>
        <time className="text-gray-500">{publicationDate}</time>
      </div>

      {/* Description - Expandable */}
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

      <div className="flex flex-col sm:flex-row items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <button
          className={`inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            !isLinkAvailable ? "opacity-50 cursor-not-allowed" : ""
          } mb-3 sm:mb-0`}
          onClick={openPublicationLink}
          disabled={!isLinkAvailable}
          aria-label={`Read or view ${paperName}`}
        >
          {showPublication}
          {isLinkAvailable && (
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="ml-2 h-3 w-3"
            />
          )}
        </button>

        {/* Citations Count */}
        {citations !== undefined && citations > 0 && (
          <div className="flex items-center text-sm text-gray-600">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="mr-1.5 h-3 w-3 text-gray-400"
            />
            <span>
              {citations} Citation{citations !== 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicationCard;
