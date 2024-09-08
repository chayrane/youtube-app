import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="py-1 flex items-center gap-1">
      <img
        className="h-8 rounded-full"
        src="assets/images/user.webp"
        alt="user"
      />
      <div className="flex gap-2">
        <span className="font-bold">{name}:</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
