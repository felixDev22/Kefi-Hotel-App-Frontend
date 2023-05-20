import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

// Define a persist config for the login slice
const loginPersistConfig = {
  key: 'login',
  storage,
};

export const loginUser = createAsyncThunk('login', async (data, thunkAPI) => {
  const loginUrl = 'http://127.0.0.1:3000/login';
  try {
    const response = await axios.post(loginUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// add for logoutUser
export const logoutUser = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await axios.post('http://localhost:3000/logout');
    return { logged_out: true };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  data: {},
  islogged: false,
  isloggedOut: false,
  errors: '',
};
const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.islogged = action.payload.logged_in;
        if (action.payload.status === 401) state.errors = action.payload.errors[0];
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.data = action.payload;
      });
  },
});

// Wrap the loginSlice.reducer with persistReducer
const persistedLoginReducer = persistReducer(loginPersistConfig, loginSlice.reducer);

export default persistedLoginReducer;
export const loginActions = loginSlice.actions;
