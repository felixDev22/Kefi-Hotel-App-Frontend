import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservation: [],
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (state, { payload }) => {
      state.reservation = payload;
    },
  },
});

export const { addReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
