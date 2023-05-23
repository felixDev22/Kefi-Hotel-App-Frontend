import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RESERVE_ACTION_TYPE = 'fetchRooms';

export const readRooms = createAsyncThunk(
  RESERVE_ACTION_TYPE,
  async (hotelId, thunkAPI) => {
    const roomUrl = `http://localhost:3000/api/v1/hotels/${hotelId}`;
    try {
      const response = await axios.get(roomUrl, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
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
  rooms: [],
  error: '',
};

const roomTypeSlice = createSlice({
  name: 'roomType',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(readRooms.pending, (state) => {
      state.rooms = initialState.rooms;
      state.error = initialState.error;
    });
    builder.addCase(readRooms.fulfilled, (state, action) => {
      state.rooms = action.payload;
      state.error = initialState.error;
    });
    builder.addCase(readRooms.rejected, (state) => {
      state.rooms = initialState.rooms;
      state.error = 'error';
    });
  },
});

export const { actions: roomTypeActions, reducer: roomTypeReducer } =
  roomTypeSlice;

export const selectRooms = (state) => state.roomType.rooms;
export const selectRoomError = (state) => state.roomType.error;
