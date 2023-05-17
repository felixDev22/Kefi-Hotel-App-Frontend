import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [],
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRoom: (state, { payload }) => {
      state.rooms = payload;
    },
  },
});

export const { addRoom } = roomsSlice.actions;
export default roomsSlice.reducer;
