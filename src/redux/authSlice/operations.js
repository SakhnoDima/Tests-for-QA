import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constant/constant";

axios.defaults.baseURL = BASE_URL;
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      token.set(data.user.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/auth/logout");
    token.unSet();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const sendLetter = createAsyncThunk(
  "auth/sendLetter",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/verify", credentials);
      token.unSet();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/userRefresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const prevToken = state.auth.token;
    if (prevToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      token.set(prevToken);
      const { data } = await axios.get("/auth/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const googleRegister = createAsyncThunk(
  "auth/userGoogleRegister",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/auth/register/google", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
