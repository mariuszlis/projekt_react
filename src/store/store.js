import { configureStore } from "@reduxjs/toolkit";
import memesReducer from "./memesSlice";

const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
});

export default store;
