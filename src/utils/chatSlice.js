import { createSlice } from "@reduxjs/toolkit";
import { MAX_CHAT_MESSAGES } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // Check if the messages array exceeds the maximum length
      if (state.messages.length >= MAX_CHAT_MESSAGES) {
        // Remove the oldest message (index 0)
        state.messages.shift();
      }
      // Add the new message
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
