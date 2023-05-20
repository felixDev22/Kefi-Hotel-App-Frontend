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
    deleteReservation: (state, { payload }) => {
      const reservationIndex = state.reservation.findIndex(
        (reservation) => reservation.id === payload
      );
      if (reservationIndex !== -1) {
        state.reservation.splice(reservationIndex, 1);
      }
    },
  },
});

export const { addReservation, deleteReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
