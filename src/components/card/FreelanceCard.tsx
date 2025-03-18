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

  const displayedInfo = showAll ? info : info.slice(0, 1);

  return (
    <div className="mx-4">
      <div className="max-w-md rounded overflow-hidden shadow-md bg-white py-10 px-5">
        <div className="mx-auto bg-white rounded-full flex items-center justify-center w-25 md:w-25 h-25 md:h-25">
          <Image
            src={avatar}
            alt={"FP"}
            width={100}
            height={100}
            className="rounded-full transform transition-transform hover:scale-110"
          />
        </div>

        <div className="px-6 py-2 flex flex-col items-center">
          <h2 className="text-black text-normal font-semibold">
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {project}
              </a>
            ) : (
              project
            )}
          </h2>
          <p className="text-gray-700 text-md">{company}</p>
          <time className="font-sm text-blue-400 text-right whitespace-nowrap">
            {duration}
          </time>
        </div>

        <div className="text-base text-slate-600 pl-6 mt-2">
          {displayedInfo.map((point, index) => (
            <div key={index} className="mb-2">
              <span className="block">{point}</span>
            </div>
          ))}
          {info.length > 2 && (
            <button
              onClick={toggleShowAll}
              className="text-blue-500 cursor-pointer focus:outline-none mt-2"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelanceCard;
