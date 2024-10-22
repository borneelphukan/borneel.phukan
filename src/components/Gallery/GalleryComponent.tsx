import React, { useState } from "react";
import Image from "next/image";

type ImageData = {
  src: string;
  alt: string;
  caption: string;
};

const imageWidth = 700;
const imageHeight = 700;

type Props = {
  images: ImageData[];
};

const GalleryComponent = ({ images }: Props) => {
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setEnlargedIndex(index);
  };

  const closeImage = () => {
    setEnlargedIndex(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-1 p-4 mt-10 mb-20">
      {images.map(({ src, alt, caption }, index) => (
        <div
          key={index}
          className="relative group cursor-zoom-in"
          onClick={() => openImage(index)}
          style={{
            animation: `fadeIn 1s ease-in-out forwards`,
            animationDelay: `${index * 0.2}s`, // Staggered delay for each image
          }}
        >
          <Image
            width={imageWidth}
            height={imageHeight}
            src={src}
            alt={alt}
            className="object-cover w-full h-full transition-transform transform group-hover:scale-105 p-1"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 transition-opacity opacity-0 group-hover:opacity-100">
            {caption}
          </div>
        </div>
      ))}

      {enlargedIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center animate-fadeIn">
          <div className="relative cursor-zoom-out" onClick={closeImage}>
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
                className="bg-white text-black rounded-full h-6 w-6"
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
