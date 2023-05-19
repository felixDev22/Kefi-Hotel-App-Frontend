import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hotelsReducer from './hotels';
import roomsReducer from './room';
import logoutReducer from '../features/slices/auth/logout';
import reserveReducer from '../features/slices/reserve/reserveSlice';
import loginReducer from '../features/slices/auth/login';
import registerReducer from '../features/slices/auth/register';
import singleHotelReducer from '../features/slices/reserve/singleReserveSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    hotels: hotelsReducer,
    rooms: roomsReducer,
    logout: logoutReducer,
    reserve: reserveReducer,
    singleHotel: singleHotelReducer,
  },
});

export default store;
