// BlogCard.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const BlogCard = ({ imageUrl, author, title, description }) => {
  return (
    <div className="container mx-auto my-8 max-w-screen-md">
      <div className="flex bg-white p-6 border relative">
        {/* Share Button (Top Right) */}
        <FontAwesomeIcon
          icon={faShare}
          className="mr-2 absolute top-2 right-2  text-grey px-3 py-1 rounded hover:text-blue-400"
        />

        {/* Left side: Main Image */}
        <div className="w-1/2">
          <Image
            src={imageUrl}
            alt="Blog Image"
            width={500} // Adjust the width to cover half of the BlogCard
            height={500} // Adjust the height accordingly
          />
        </div>

        {/* Right side: Author, Title, and Description */}
        <div className="w-1/2 ml-4">
          {/* Author */}
          <p className="text-gray-500">{author}</p>

          {/* Title */}
          <h1 className="text-2xl font-bold my-2">{title}</h1>

          {/* Description */}
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
