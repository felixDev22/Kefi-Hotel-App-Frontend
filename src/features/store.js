import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/slices/auth/login';
import registerReducer from '../features/slices/auth/register';
import hotelsReducer from './hotels';
import roomsReducer from './room';
import logoutReducer from '../features/slices/auth/logout';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    hotels: hotelsReducer,
    rooms: roomsReducer,
    // logout: logoutReducer,
  },
});

export default store;
