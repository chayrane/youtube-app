import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/**
         * ******** App Structure ********
         *
         * Header
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContianer
         *    ButtonList
         *    VideoContianer
         *      VideoCard
         */}

        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
