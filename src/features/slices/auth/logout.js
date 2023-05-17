import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logoutUser = createAsyncThunk('logout', async (_, thunkAPI) => {
  const logoutUrl = 'http://127.0.0.1:3000/logout';

  try {
    await axios.post(logoutUrl);
    return null; // Return null to indicate successful logout
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  data: {},
  islogged: false,
  errors: '',
};

const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.data = {};
      state.isLogged = false;
      state.errors = '';
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.errors = action.payload;
    });
  },
});

export default logoutSlice.reducer;
export const logoutActions = logoutSlice.actions;
