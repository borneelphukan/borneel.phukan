import React, { useState } from "react";
import Image from "next/image";
import RatingStars from "./RatingStars";

type Props = {
  avatar: string;
  name: string;
  comment: string;
  stars: number;
  role: string;
};

const TestimonialsCard = ({
  avatar,
  name,
  comment,
  stars,
  role,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleComment = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="testimonial-card-container mx-4 my-2">
      <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white py-10 px-5">
        <div className="mx-auto bg-white rounded-full flex items-center justify-center w-25 md:w-25 h-25 md:h-25">
          <Image
            src={avatar}
            alt="Avatar"
            width={100}
            height={100}
            className="rounded-full transform transition-transform hover:scale-110"
          />
        </div>

        <div className="px-6 py-2">
          <h2 className="text-black text-normal font-semibold">{name}</h2>
          <p className="text-gray-700 text-sm">{role}</p>
          <RatingStars numStars={stars} />
          <p className="text-gray-700 text-base">
            {expanded ? comment : `${comment.slice(0, 200)}.. `}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleComment}
            >
              {expanded ? " Read less" : " Read more"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
