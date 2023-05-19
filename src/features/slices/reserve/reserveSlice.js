import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

const RESERVE_ACTION_TYPE = "reserveHotel";

const reserveHotel = createAsyncThunk(
  RESERVE_ACTION_TYPE,
  async (data, thunkAPI) => {
    const reserveUrl = "http://127.0.0.1:3000/api/v1/reservations";
    try {
      const response = await axios.post(reserveUrl, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
  reservation: null,
  error: "",
};

const reserveSlice = createSlice({
  name: "reserve",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(reserveHotel.pending, (state) => {
      state.reservation = initialState.reservation;
      state.error = initialState.error;
    });
    builder.addCase(reserveHotel.fulfilled, (state, action) => {
      state.reservation = action.payload;
      state.error = initialState.error;
    });
    builder.addCase(reserveHotel.rejected, (state) => {
      state.reservation = initialState.reservation;
      state.error = "error";
    });
  },
});

export default reserveSlice.reducer;

export const selectReservation = (state) => state.reserve.reservation;
export const selectReserveError = (state) => state.reserve.error;

export const reserveActions = {
  reserveHotel,
};
