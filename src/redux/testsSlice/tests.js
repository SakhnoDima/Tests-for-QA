import { createSlice } from "@reduxjs/toolkit";
import {
  getTechnical,
  getTechnicalAnswers,
  getTheory,
  getTheoryAnswers,
} from "./operations";

const initialState = {
  tests: [],
  results: [],
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
      })
      .addCase(getTechnicalAnswers.fulfilled, (state, action) => {
        state.results = action.payload;
      })
      .addCase(getTechnicalAnswers.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getTheoryAnswers.fulfilled, (state, action) => {
        state.results = action.payload;
      })
      .addCase(getTheoryAnswers.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default testsSlice.reducer;
