import { useState } from "react";
import Image from "next/image";

type Props = {
  avatar: string;
  project: string;
  company: string;
  duration: string;
  info: string[];
  link?: string;
};

const FreelanceCard = (props: Props) => {
  const { avatar, project, company, duration, info, link } = props;
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const maxInitialInfoPoints = 2; // Show first 2 points initially
  const displayedInfo = showAll ? info : info.slice(0, maxInitialInfoPoints);
  const canShowMore = info.length > maxInitialInfoPoints;

  return (
    <div className="h-full flex p-2">
      <div className="flex flex-col w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white">
        <div className="p-6 flex flex-col items-center bg-gray-50 border-b border-gray-100">
          <div className="mb-4 relative w-24 h-24">
            <Image
              src={avatar}
              alt={`${company} Logo`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover border-2 border-white shadow-sm"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 text-center">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-blue-600 transition-colors duration-200 group"
              >
                {project}
              </a>
            ) : (
              project
            )}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{company}</p>
          <time className="mt-1 text-xs font-medium text-blue-500 tracking-wide uppercase">
            {duration}
          </time>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <ul className="list-disc list-inside text-base text-gray-700 space-y-2 flex-grow">
            {displayedInfo.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {canShowMore && (
            <button
              onClick={toggleShowAll}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium self-start mt-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded"
            >
              {showAll
                ? "Show less"
                : `Show more (${info.length - maxInitialInfoPoints} more)`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelanceCard;
