import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const reserve = createAsyncThunk(
 "reserve",
 async (data, thunkAPI) => {

  const reserveUrl = 'http://http://127.0.0.1:3000/'
  try {
   const response = await axios.post(reserveUrl, data, {
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
  }
  catch (error) {
   return thunkAPI.rejectWithValue(error.response.data);
  }
 }
);

const initialState = {
 data: {},
 error: '',
};

const reserveSlice = createSlice({
 name: "reserve",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(reserve.pending, (state) => {
   state.data = null;
   state.error = null;
  }),
   builder.addCase(reserve.fulfilled, (state, action) => {
    state.data = action.payload.data;
    state.error = '';
   }),
   builder.addCase(reserve.rejected, (state) => {
    state.data = null;
    state.error = 'error';
   });
 }
});

export default reserveSlice.reducer;

export const selectReserve = (state) => state.reserve.data;
export const selectReserveError = (state) => state.reserve.error;

export const reserveActions = reserveSlice.actions;
