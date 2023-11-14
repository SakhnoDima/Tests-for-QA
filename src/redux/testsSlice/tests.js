import { createSlice } from "@reduxjs/toolkit";
import { getTechnical, getTheory } from "./operations";

const initialState = {
  tests: [],
  error: null,
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTheory.fulfilled, (state, action) => {
        state.tests = action.payload;
      })
      .addCase(getTheory.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getTechnical.fulfilled, (state, action) => {
        state.tests = action.payload;
      })
      .addCase(getTechnical.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default testsSlice.reducer;
