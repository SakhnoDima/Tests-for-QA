import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  register,
  logOut,
  refreshUser,
  googleRegister,
  sendLetter,
} from "./operations";

const initialState = {
  email: null,
  isLoggedIn: false,
  token: null,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.email = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = null;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(googleRegister.fulfilled, (state, action) => {})
      .addCase(googleRegister.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(sendLetter.fulfilled, (state, action) => {})
      .addCase(sendLetter.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
