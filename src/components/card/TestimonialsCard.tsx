import { useState } from "react";
import Image from "next/image";

type Props = {
  avatar: string;
  name: string;
  comment: string;
  stars: number;
  role: string;
};

const TestimonialsCard = (props: Props) => {
  const { avatar, name, comment, stars, role } = props;
  const [expanded, setExpanded] = useState(false);
  const toggleComment = () => {
    setExpanded(!expanded);
  };

  const shortCommentLength = 150;
  const isLongComment = comment.length > shortCommentLength;

  return (
    <div className="h-full flex">
      <div className="flex flex-col max-w-xl rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white p-6 md:p-8 w-full">
        <div className="flex items-center mb-5">
          <div className="flex-shrink-0 mr-4">
            <Image
              src={avatar}
              alt={`${name}'s Avatar`}
              width={64}
              height={64}
              className="rounded-full border-2 border-gray-200 object-cover" // Added border
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>

        <div className="flex-grow">
          <p className="text-gray-700 text-base leading-relaxed">
            {expanded
              ? comment
              : `${comment.slice(0, shortCommentLength)}${
                  isLongComment ? "..." : ""
                }`}
          </p>
        </div>

        {isLongComment && (
          <button
            className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium self-start transition-colors duration-200"
            onClick={toggleComment}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default TestimonialsCard;
