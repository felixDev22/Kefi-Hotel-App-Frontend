import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
  loading: false,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    addHotel: (state, { payload }) => {
      state.hotels = payload;
    },
    deleteHotel: (state, action) => {
      const hotelIndex = state.hotels.findIndex(
        (hotel) => hotel.id === action.payload
      );
      if (hotelIndex !== -1) {
        state.hotels.splice(hotelIndex, 1);
      }
    },
  },
});

export const { addHotel, deleteHotel } = hotelsSlice.actions;
// export const getAllHotel = (state) => state.hotels
export default hotelsSlice.reducer;
