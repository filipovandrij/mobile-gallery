import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async function () {
    const response = await fetch(
      "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
    );
    const data = await response.json();

    return data;
  }
);

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = "resolved";
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});
export default photoSlice.reducer;
