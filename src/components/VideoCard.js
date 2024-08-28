import React from "react";

const VideoCard = ({ videoInfo }) => {
  console.log(videoInfo);
  const { snippet, statistics } = videoInfo || {};
  // console.log(snippet);
  const { channelTitle, title, thumbnails } = snippet || {};
  // console.log(snippet);

  return (
    <div className="my-2 w-[290px]">
      <img className="w-full rounded-lg" src={thumbnails?.medium?.url} alt="" />

      <div>
        <p className="font-bold">{title.length >= 50 ? title.substring(0, 60) + "..." : title}</p>
        <p>{channelTitle}</p>
        <p>{statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
