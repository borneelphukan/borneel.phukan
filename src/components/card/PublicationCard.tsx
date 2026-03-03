import { useState } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Button from "../common/Button";

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
        <Button
          variant="primary"
          className="mb-3 sm:mb-0"
          onClick={openPublicationLink}
          disabled={!isLinkAvailable}
          aria-label={`Read or view ${paperName}`}
          icon={isLinkAvailable ? {
            right: <OpenInNewIcon className="ml-2 h-3 w-3" />
          } : undefined}
        >
          {showPublication}
        </Button>

        {/* Citations Count */}
        {citations !== undefined && citations > 0 && (
          <div className="flex items-center text-sm text-gray-600">
            <FormatQuoteIcon
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
