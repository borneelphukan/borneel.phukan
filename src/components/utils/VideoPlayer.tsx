import React from "react";

type Props = {
  videoId: string;
};

const VideoPlayer = ({ videoId }: Props) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="container mx-auto p-5">
      <div className="relative w-full" style={{ height: "75vh" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
