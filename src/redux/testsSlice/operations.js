import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTheory = createAsyncThunk(
  "tests/theory",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/tests/random/theory");

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getTechnical = createAsyncThunk(
  "tests/technical",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/tests/random/tech");

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
