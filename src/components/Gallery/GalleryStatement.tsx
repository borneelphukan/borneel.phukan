import React from "react";

const GalleryStatement = () => {
  return (
    <div className="mt-6 mx-auto">
      <p className="text-base text-center md:text-lg lg:text-neutral-600 py-2">
        INTERESTED IN{" "}
        <span className="text-blue-400 font-semibold">PHOTOGRAPHY ?</span>
      </p>
      <h1 className="text-4xl text-center font-semibold mb-3">
        THE WORLD THROUGH MY LENSES
      </h1>
      <p className="max-w-3xl mx-auto text-center text-base md:text-lg lg:text-neutral-400 mb-5 px-5">
        Physical prints of photos can leave a stronger impression compared to
        their digital counterparts. Feel free to{" "}
        <a href="mailto:borneelphukan@gmail.com">
          <span className="underline underline-offset-4 hover:text-blue-400">
            reach out
          </span>
        </a>{" "}
        if you would like a hard copy. If you do, you would be the pioneer to
        mention this, which would be quite remarkable!
      </p>
    </div>
  );
};

export default GalleryStatement;
