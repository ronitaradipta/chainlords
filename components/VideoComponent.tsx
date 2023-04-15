import React, { FC } from "react";

interface VideoComponentProps {
  source: string;
}

const VideoComponent: FC<VideoComponentProps> = ({ source }) => {
  return (
    <video
      autoPlay
      muted
      loop
      className="absolute object-cover w-full md:h-screen h-96"
    >
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default VideoComponent;
