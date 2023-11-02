"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import GalleryComponent from "@/components/Gallery/GalleryComponent";

const images = [
  {
    src: "/gallery/Budapest.webp",
    alt: "Image 1",
    caption: "Caption for Image 1",
  },
  {
    src: "/gallery/Vienna.webp",
    alt: "Image 1",
    caption: "Caption for Image 1",
  },
  {
    src: "/gallery/Hamburg.webp",
    alt: "Image 1",
    caption: "Caption for Image 1",
  },
  {
    src: "/gallery/Skyline.webp",
    alt: "Image 1",
    caption: "Caption for Image 1",
  },
  {
    src: "/gallery/Halstatt.webp",
    alt: "Image 1",
    caption: "Caption for Image 1",
  },
  {
    src: "/gallery/Bratislava.jpg",
    alt: "Image 1",
    caption: "Caption for Image 1",
  },
  {
    src: "/gallery/Ship.webp",
    alt: "Image 1",
    caption: "Caption for Image 1",
  },
  {
    src: "/gallery/Autumn.webp",
    alt: "Image 1",
    caption: "Caption for Image 1",
  },

  // Add more images as needed
];

const Gallery = () => {
  return (
    <DefaultLayout>
      <GalleryComponent images={images} />
    </DefaultLayout>
  );
};

export default Gallery;
