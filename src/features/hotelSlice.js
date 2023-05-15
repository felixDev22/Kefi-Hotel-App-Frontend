import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    deleteHotel: (state, action) => {
      const hotelId = action.payload;
      state.hotels = state.hotels.filter((hotel) => hotel.id !== hotelId);
    },
  },
});

export const { setHotels, deleteHotel } = hotelSlice.actions;

export default hotelSlice.reducer;
