import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUserSuccess: (state) => {
      state.user = null;
      state.error = null;
    },
    logoutUserFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { logoutUserSuccess, logoutUserFailure } = authSlice.actions;

export default authSlice.reducer;

export const logoutUser = () => async (dispatch) => {
  try {
    await axios.post('http:localhost:3000/logout');
    dispatch(logoutUserSuccess());
  } catch (error) {
    dispatch(logoutUserFailure(error.message));
  }
};
