import { useState } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from "../common/Button";

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
          <Button
            variant="primary"
            onClick={openProjectLink}
            disabled={!isLinkAvailable}
            aria-label={`View details or visit link for ${title}`}
            icon={{
              right: <OpenInNewIcon className="ml-2 h-3 w-3" />
            }}
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
