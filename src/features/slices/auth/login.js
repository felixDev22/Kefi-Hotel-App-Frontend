import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('login', async (data, thunkAPI) => {
  const loginUrl = 'http://127.0.0.1:3000/login';

  try {
    const response = await axios.post(loginUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (response.status === 200) {
      // console.log( response.data)
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  data: {},
  islogged: false,
  errors: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.islogged = action.payload.logged_in;
      if (action.payload.status == 401) state.errors = action.payload.errors[0];
    }),
      builder.addCase(loginUser.rejected, (state) => {
        state.data = action.payload;
      });
  },
});

export default loginSlice.reducer;
export const loginActions = loginSlice.actions;
