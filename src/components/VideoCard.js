import React from "react";
import { formatNumber } from "../utils/helpers";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div className="my-2 w-[290px]">
      <img className="w-full rounded-lg" src={thumbnails?.medium?.url} alt="" />

      <div className="mt-1">
        <p className="font-bold">
          {title.length >= 50 ? title.substring(0, 60) + "..." : title}
        </p>
        <p>{channelTitle}</p>
        <p>{formatNumber(statistics?.viewCount)} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
