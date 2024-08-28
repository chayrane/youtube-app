import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const jsonResponse = await response.json();
    console.log(jsonResponse.items);
    setVideos(jsonResponse.items);
  };

  return (
    <div className="p-3 pt-0 flex flex-wrap gap-2">
      {videos.map((video) => (
        <VideoCard key={video.id} videoInfo={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
