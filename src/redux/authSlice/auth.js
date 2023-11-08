import { createSlice } from "@reduxjs/toolkit";
import { logIn, register, logOut, refreshUser } from "./operations";

const initialState = {
  user: { email: null },
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
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user.email;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
