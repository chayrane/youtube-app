import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-3 items-center shadow-lg">
      <div className="flex items-center gap-3 col-span-1">
        <img
          className="w-10 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="hamburger-menu"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="w-28 h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="YT-Logo"
        />
      </div>
      <div className="col-span-8">
        <input
          type="text"
          className="w-3/4 p-2 px-4 border border-gray-400 border-r-0 rounded-l-[21px]"
        />
        <button className="p-2 border border-gray-400 rounded-r-[21px] px-5 bg-gray-200">
          🔍
        </button>
      </div>
      <div className="flex justify-end col-span-3">
        <img
          className="w-10 rounded-[56px]"
          src="assets/images/user.webp"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
