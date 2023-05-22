import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./photoSlice";

export default configureStore({
  reducer: {
    photos: photoReducer,
  },
});
