import DefaultLayout from "@/layout/DefaultLayout";
import GalleryComponent from "@/components/Gallery/GalleryComponent";
import GalleryStatement from "@/components/Gallery/GalleryStatement";

const images = [
  {
    src: "/gallery/Budapest.webp",
    alt: "Hungarian Parliament, Budapest (May, 2023)",
    caption: "Hungarian Parliament, Budapest, Hungary (May, 2023)",
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
    alt: "Caption for Image 1",
    caption: "Hamburg Harbour, Hamburg, Germany (March, 2023)",
  },
  {
    src: "/gallery/Autumn.webp",
    alt: "Streets in Autumn, Chemnitz, Germany (October, 2023)",
    caption: "Streets in Autumn, Chemnitz, Germany (October, 2023)",
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

  // Add more images as needed
];

const Gallery = () => {
  return (
    <DefaultLayout>
      <GalleryStatement />
      <GalleryComponent images={images} />
    </DefaultLayout>
  );
};

export default Gallery;
