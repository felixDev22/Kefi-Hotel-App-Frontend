// src/redux/hotelsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: [],
  reducers: {
    setHotels: (state, action) => {
      return action.payload;
    },
    deleteHotel: (state, action) => {
      const hotelIndex = state.findIndex((hotel) => hotel.id === action.payload);
      if (hotelIndex !== -1) {
        state.splice(hotelIndex, 1);
      }
    },
  },
});

export const { setHotels, deleteHotel } = hotelsSlice.actions;

export default hotelsSlice.reducer;
