import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hotelsReducer from './hotels';
import roomsReducer from './room';
import logoutReducer from '../features/slices/auth/logout';
import reserveReducer from '../features/slices/reserve/reserveSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    hotels: hotelsReducer,
    rooms: roomsReducer,
    logout: logoutReducer,
    reserve: reserveReducer,
  },
});

export default store;
