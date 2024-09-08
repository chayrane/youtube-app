import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helpers";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const chatContainerRef = useRef(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);
  const [liveMessage, setLiveMessage] = useState("");

  // Simulating long pooling for fetching YouTube's Live Chat.
  useEffect(() => {
    const timeInterval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: `${generateRandomMessage(30)}`,
        })
      );
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [dispatch]);

  useEffect(() => {
    if (isScrolledToBottom) {
      const container = chatContainerRef.current;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [chatMessages, isScrolledToBottom]);

  // Handle scroll events to check if user has scrolled up or down
  const handleScroll = () => {
    const container = chatContainerRef.current;
    if (container) {
      const isAtBottom =
        container.scrollHeight - container.scrollTop === container.clientHeight;
      setIsScrolledToBottom(isAtBottom);
    }
  };

  return (
    <div className="w-full h-[600px] px-4 py-2 border border-gray-500 rounded-xl">
      <h1 className="py-2 text-xl font-bold">Live Chat</h1>
      <div
        ref={chatContainerRef}
        className="w-full h-[486px] overflow-auto"
        onScroll={handleScroll}
      >
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="mt-[6px] w-full flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Chaitanya",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-full py-2 px-2 border border-black rounded-lg"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-3 rounded-lg text-white bg-red-600">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
