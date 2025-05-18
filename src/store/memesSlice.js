import { createSlice } from "@reduxjs/toolkit";
import memesData from "../data/memesData";

const memesSlice = createSlice({
  name: "memes",
  initialState: memesData,
  reducers: {
    vote: (state, action) => {
      const { id, type } = action.payload;
      const meme = state.find((m) => m.id === id);
      if (meme) {
        if (type === "up") meme.upvote += 1;
        if (type === "down") meme.downvote += 1;
      }
    },
    star: (state, action) => {
      const meme = state.find((m) => m.id === action.payload);
      if (meme) meme.starred = !meme.starred;
    },
    addMeme: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { vote, star, addMeme } = memesSlice.actions;
export default memesSlice.reducer;
