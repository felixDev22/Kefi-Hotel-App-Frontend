// src/features/slices/auth/logout.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const logoutUser = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await axios.post('http://localhost:3000/logout');
    return { logged_out: true };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  isLogged: true,
  errors: '',
};

const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.isLogged = action.payload.logged_out;
      state.errors = '';
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.errors = action.payload;
    });
  },
});

export default logoutSlice.reducer;
export const logoutActions = logoutSlice.actions;
