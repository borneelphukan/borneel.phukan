import DefaultLayout from "@/layout/DefaultLayout";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  {
    src: "/gallery/Budapest.webp",
    alt: "Hungarian Parliament, Budapest (May, 2023)",
    caption: "Hungarian Parliament, Budapest, Hungary (May, 2023)",
    span: "col-2",
  },
  {
    src: "/gallery/Vienna.webp",
    alt: "St. Charles Church, Vienna (May, 2023)",
    caption: "St. Charles Church, Vienna, Austria (May, 2023)",
  },
  {
    src: "/gallery/Hamburg.webp",
    alt: "Hamburger Hafen, Hamburg (March, 2023)",
    caption: "Hamburger Hafen, Hamburg, Germany (March, 2023)",
  },
  {
    src: "/gallery/Skyline.webp",
    alt: "Hamburg Neustadt, Hamburg (March, 2023)",
    caption: "Hamburg Neustadt, Hamburg (March, 2023)",
    span: "row-2",
  },
  {
    src: "/gallery/Halstatt.webp",
    alt: "Hallstatt, Austria (January, 2023)",
    caption: "Hallstatt, Austria (January, 2023)",
  },
  {
    src: "/gallery/Bratislava.webp",
    alt: "Narrow streets of Bratislava, Slovakia (May, 2023)",
    caption: "Narrow streets of Bratislava, Slovakia (May, 2023)",
  },
  {
    src: "/gallery/Ship.webp",
    alt: "Ship in Hamburg Harbour (March, 2023)",
    caption: "Hamburg Harbour, Hamburg, Germany (March, 2023)",
  },
  {
    src: "/gallery/Autumn.webp",
    alt: "Streets in Autumn, Chemnitz, Germany (October, 2023)",
    caption: "Streets in Autumn, Chemnitz, Germany (October, 2023)",
    span: "col-2",
  },
  {
    src: "/gallery/NeusweinsteinCastle.webp",
    alt: "Neuschwanstein Castle, Bavaria, Germany (October, 2023)",
    caption: "Neuschwanstein Castle, Bavaria, Germany (October, 2023)",
  },
  {
    src: "/gallery/UFOBridge.webp",
    alt: "Slovak UFO Bridge, Bratislava, Slovakia (May, 2023)",
    caption: "Slovak UFO Bridge, Bratislava, Slovakia (May, 2023)",
  },
  {
    src: "/gallery/UBahn.webp",
    alt: "Hamburg UBahn, Hamburg, Germany (March, 2023)",
    caption: "Hamburg UBahn, Hamburg, Germany (March, 2023)",
  },
  {
    src: "/gallery/Salzburg.webp",
    alt: "Street of Salzburg, Salzburg, Austria (January, 2023)",
    caption: "Street of Salzburg, Salzburg, Austria (January, 2023)",
  },
];

const Gallery = () => {
  const { t } = useTranslation();
  const galleryStatement: string[] = t("galleryStatement", {
    returnObjects: true,
  }) as string[];
  const galleryHeader: string[] = t("galleryHeader", {
    returnObjects: true,
  }) as string[];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = useCallback(() => setCurrentIndex(null), []);

  const goToNext = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((prevIndex) => (prevIndex! + 1) % images.length);
  }, [currentIndex]);

  const goToPrevious = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex! - 1 + images.length) % images.length
    );
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "ArrowLeft") goToPrevious();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, closeLightbox, goToNext, goToPrevious]);

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [currentIndex]);

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-base font-medium text-indigo-600 uppercase tracking-wider mb-1">
            {galleryHeader[0]}{" "}
            <span className="font-semibold">{galleryHeader[1]}</span>
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase mb-4">
            {galleryHeader[2]}
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            {galleryStatement[0]}{" "}
            <a
              href="mailto:borneelphukan@gmail.com"
              className="text-indigo-600 hover:text-indigo-800 underline underline-offset-4 transition duration-150 ease-in-out"
            >
              {galleryStatement[1]}
            </a>
            {galleryStatement[2]}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {images.map(({ src, alt, caption, span }, index) => {
            let itemSpanClass = "";
            let itemAspectClass = "aspect-square";
            let itemSizes =
              "(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw";

            if (span === "col-2") {
              itemSpanClass = "sm:col-span-2";
              itemAspectClass = "aspect-video";
              itemSizes =
                "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw";
            } else if (span === "row-2") {
              itemSpanClass = "sm:row-span-2";
              itemAspectClass = "aspect-[9/16] sm:aspect-auto";
            }

            return (
              <div
                key={src + index}
                className={`relative group overflow-hidden rounded-lg shadow-md cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 ${itemAspectClass} ${itemSpanClass}`}
                onClick={() => openLightbox(index)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
                style={{
                  animation: `fadeIn 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                }}
              >
                <Image
                  fill
                  src={src}
                  alt={alt}
                  sizes={itemSizes}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-end p-2 md:p-3">
                  <p className="text-white text-xs md:text-sm font-medium truncate">
                    {caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-full max-w-4xl max-h-[90vh] flex flex-col animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-shrink-0 mb-4 aspect-video">
              <Image
                fill
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="object-contain w-full h-full"
                sizes="90vw"
              />
            </div>

            <p className="text-center text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4 flex-shrink-0">
              {images[currentIndex].caption}
            </p>

            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-10 p-1.5 bg-gray-200/50 dark:bg-gray-600/50 hover:bg-gray-300/70 dark:hover:bg-gray-500/70 rounded-full text-gray-800 dark:text-gray-100 transition duration-150"
              aria-label="Close image viewer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-200/50 dark:bg-gray-600/50 hover:bg-gray-300/70 dark:hover:bg-gray-500/70 rounded-full text-gray-800 dark:text-gray-100 transition duration-150"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-200/50 dark:bg-gray-600/50 hover:bg-gray-300/70 dark:hover:bg-gray-500/70 rounded-full text-gray-800 dark:text-gray-100 transition duration-150"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Gallery;
