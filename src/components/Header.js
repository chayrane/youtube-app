import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  // const isInitialMount = useRef(true);

  // Search Cache
  const searchCache = useSelector((store) => store.search);

  /**
   * ********* Search Caching Structure *********
   *
   * searchCache = {
   *    "iphone" : ["iphone 11", "iphone 14", ....]
   * }
   */

  useEffect(() => {
    // Skip initial render.
    // if (isInitialMount.current) {
    //   isInitialMount.current = false;
    //   return;
    // }

    // Suggestions with Debouncing functionality.
    const timer = setTimeout(() => {
      // Check if the value is present in cache
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
    );
    const jsonResponse = await response.json();
    setSearchSuggestions(jsonResponse[1]);

    // Update cache.
    dispatch(
      cacheResults({
        [searchQuery]: jsonResponse[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 items-center shadow-lg">
      <div className="flex items-center gap-3 col-span-1">
        <img
          className="w-10 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="hamburger-menu"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
        <img
          className="w-28 h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="YT-Logo"
        /></a>
      </div>
      <div className="col-span-8">
        <div>
          <input
            type="text"
            className="w-3/4 p-2 px-4 border border-gray-400 border-r-0 rounded-l-[21px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="p-2 border border-gray-400 rounded-r-[21px] px-5 bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && searchSuggestions.length > 0 && (
          <div className="absolute bg-white px-2 py-2 w-[48rem] shadow-lg border border-gray-100 rounded-xl">
            <ul>
              {searchSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="py-1 px-3 rounded-md hover:bg-gray-100"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-end col-span-3">
        <img
          className="w-10 rounded-full"
          src="assets/images/user.webp"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
