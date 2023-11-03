import React, { useState } from "react";
import Image from "next/image";

const imageWidth = 700; // Set the desired constant width
const imageHeight = 700; // Set the desired constant height

const GalleryComponent = ({ images }) => {
  const [enlargedIndex, setEnlargedIndex] = useState(null);

  const openImage = (index) => {
    setEnlargedIndex(index);
  };

  const closeImage = () => {
    setEnlargedIndex(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-1 p-4 my-20">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group cursor-pointer"
          onClick={() => openImage(index)}
        >
          <Image
            width={imageWidth}
            height={imageHeight}
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full transition-transform transform group-hover:scale-105 p-1"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 transition-opacity opacity-0 group-hover:opacity-100">
            {image.caption}
          </div>
        </div>
      ))}

      {enlargedIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative" onClick={closeImage}>
            <Image
              width={imageWidth}
              height={imageHeight}
              src={images[enlargedIndex].src}
              alt={images[enlargedIndex].alt}
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <button
                onClick={closeImage}
                className="bg-white text-black rounded-full p-2"
              >
                &#x2716;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
