import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "register",
  async (data, thunkAPI) => {
    const registerUrl = 'http://127.0.0.1:3000/signup';

    try {
      const response = await axios.post(registerUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const initialState = {
  data: {},
  "iscreated": false,
  "errors": ''
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(registerUser.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.iscreated = action.payload.iscreated;

      }),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.errors = 'Email has already been taken';
        state.data = {};
      })
  },
});

export default registerSlice.reducer;
export const registerActions = registerSlice.actions;
