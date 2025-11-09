"use client";
import React from "react";

const VideoPlayer = ({ id }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Responsive wrapper for 16:9 aspect ratio */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
