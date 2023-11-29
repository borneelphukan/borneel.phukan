import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const BlogCard = ({ imageUrl, author, title, description }) => {
  return (
    <div className="container mx-auto my-8 max-w-screen-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md shadow-md relative">
        {/* Main Image */}
        <div className="col-span-1 md:col-span-1 items-center justify-center overflow-hidden mx-auto">
          <Image
            src={imageUrl}
            alt="Blog Image"
            width={450}
            height={450}
            className="rounded-t-md hover:scale-125 transition-all duration-500 cursor-pointer w-full h-full object-cover"
          />
        </div>

        {/* Right side: Author, Title, and Description */}
        <div className="col-span-1 md:col-span-1 m-5">
          <div className="flex flex-col h-full">
            {/* Share Button (Top Right) */}
            <FontAwesomeIcon
              icon={faShare}
              className="self-end text-grey px-3 py-1 rounded hover:text-blue-400"
            />

            {/* Author */}
            <div className="justify-center">
              <p className="text-gray-500">{author}</p>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold my-2 justify-center">{title}</h1>

            {/* Description */}
            <p className="text-gray-700 justify-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
