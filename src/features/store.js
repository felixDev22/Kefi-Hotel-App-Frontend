import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hotelsReducer from './hotels';
import roomsReducer from './room';
import reserveReducer from '../features/slices/reserve/reserveSlice';
import loginReducer from '../features/slices/auth/login';
import registerReducer from '../features/slices/auth/register';
import singleHotelReducer from '../features/slices/reserve/singleReserveSlice';
import { roomTypeReducer } from '../features/slices/roomTypes/fetchRooms';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    hotels: hotelsReducer,
    rooms: roomsReducer,
    reserve: reserveReducer,
    singleHotel: singleHotelReducer,
    roomType: roomTypeReducer,
  },
});

export default store;
