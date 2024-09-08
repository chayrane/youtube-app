import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { json, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import { formatNumber } from "../utils/helpers";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [video, setVideo] = useState({});
  const [channel, setChannel] = useState({});
  const videoId = searchParams.get("v");

  const getVideo = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
          "v"
        )}&key=${GOOGLE_API_KEY}`
      );
      const jsonResponse = await response.json();
      setVideo(jsonResponse.items[0]);
    } catch (error) {
      console.error("Error fetching video details", error);
    }
  };

  const getChannelDetails = async () => {
    if (video?.snippet?.channelId) {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${GOOGLE_API_KEY}`
        );
        const jsonResponse = await response.json();
        if (jsonResponse.items && jsonResponse.items.length > 0) {
          setChannel(jsonResponse.items[0]);
        } else {
          console.error("No channel items found");
        }
      } catch (error) {
        console.error("Error fetching channel details", error);
      }
    }
  };

  useEffect(() => {
    getVideo();
  }, [videoId]);

  useEffect(() => {
    getChannelDetails();
  }, [video]);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="p-5 col-span-12 w-full">
      <div className="flex flex-row w-full gap-3">
        <div className="w-8/12">
          <iframe
            width="982px"
            height="600px"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="rounded-xl"
          ></iframe>

          <div className="py-3">
            <p className="text-2xl font-bold">{video?.snippet?.title}</p>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-3">
              <img
                className="w-[44px] h-[44px] rounded-full"
                src={channel?.snippet?.thumbnails?.default?.url}
                alt="channel-thumbnail"
              />
              <div>
                <p className="text-md font-bold">{channel?.snippet?.title}</p>
                <p className="text-sm">
                  {formatNumber(channel?.statistics?.subscriberCount)}{" "}
                  subscribers
                </p>
              </div>
            </div>
            <div>
              <p>👍🏻 {formatNumber(video?.statistics?.viewCount)}</p>
            </div>
          </div>
          <CommentsContainer videoId={videoId} />
        </div>
        <div className="w-4/12">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
