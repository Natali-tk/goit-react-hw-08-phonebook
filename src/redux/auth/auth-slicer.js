import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './auth-operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      },
     [fetchCurrentUser.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload;
      state.isLoggedIn = true;
    }, 
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
