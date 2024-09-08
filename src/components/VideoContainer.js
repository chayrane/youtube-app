import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const jsonResponse = await response.json();
    setVideos(jsonResponse.items);
  };

  return (
    <div className="p-3 pt-0 flex flex-wrap gap-2">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
