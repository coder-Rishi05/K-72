import React from "react";

const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        loop
        autoPlay
        muted
        className="h-full w-full object-cover"
        src="/vid.mp4"
      />
    </div>
  );
};

export default Video;
