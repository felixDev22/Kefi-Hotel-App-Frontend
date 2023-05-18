import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const reserve = createAsyncThunk(
  "reserve",
  async (data, thunkAPI) => {

    const reserveUrl = 'http://127.0.0.1:3000/api/v1/hotels';
    try {
      const response = await axios.post(reserveUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log(response.data);
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
  reservation: {},
  error: '',
};

const reserveSlice = createSlice({
  name: "reserve",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(reserve.pending, (state) => {
      state.reservation = null;
      state.error = null;
    });
    builder.addCase(reserve.fulfilled, (state, action) => {
      state.reservation = action.payload;
      state.error = '';
    });
    builder.addCase(reserve.rejected, (state) => {
      state.reservation = null;
      state.error = 'error';
    });
  },
});

export default reserveSlice.reducer;

export const selectReservation = (state) => state.reserve.reservation;
export const selectReserveError = (state) => state.reserve.error;

export const reserveActions = reserveSlice.actions;
