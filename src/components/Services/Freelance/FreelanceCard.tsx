import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  avatar: string;
  role: string;
  company: string;
  project: string;
  duration: string;
  info: string[];
};

const FreelanceCard = (props: Props) => {
  const { avatar, role, company, project, duration, info } = props;
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedInfo = showAll ? info : info.slice(0, 2);

  return (
    <div className="testimonial-card-container mx-4">
      <div className="max-w-md rounded overflow-hidden shadow-lg bg-white py-10 px-5">
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
          <h2 className="text-black text-normal font-semibold">{role}</h2>
          <p className="text-gray-700 text-md">{company}</p>
          <time className="font-sm text-blue-400 text-right whitespace-nowrap">{duration}</time>
        </div>

        <ul className="list-disc text-base text-slate-600 pl-6 mt-2">
          <div className="flex flex-row">
            <b className='mr-2 mb-1'>Project: </b>
            <p>{project}</p>
          </div>
          <div className='p-2'>
            {displayedInfo.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </div>
          {info.length > 2 && (
            <button onClick={toggleShowAll} className="text-blue-500 cursor-pointer focus:outline-none">
              {showAll ? 'Show less' : 'Show more'}
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FreelanceCard;
