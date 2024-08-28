import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const buttonsList = [
  "All",
  "Gaming",
  "Live",
  "Songs",
  "Cricket",
  "Cooking",
  "News",
  "Podcasts",
  "Algorithms",
  "Playlists",
  "AI",
  "Watched",
  "Drama",
];

const ButtonList = () => {

  return (
    <div className="w-full">
      <div className="p-3 flex overflow-x-scroll">
        {buttonsList.map((button) => (
          <Button key={button} name={button} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
