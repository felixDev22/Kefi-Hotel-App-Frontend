import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [],
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    fetchRooms: (state, action) => {
      state.rooms = action.payload;
    },
  },
});

export const { fetchRooms } = roomsSlice.actions;
export const selectRooms = (state) => state.rooms.rooms;
export default roomsSlice.reducer;
