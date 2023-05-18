import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/slices/auth/login';
import registerReducer from '../features/slices/auth/register';
import hotelsReducer from './hotels';
import roomsReducer from './room';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    hotels: hotelsReducer,
    rooms: roomsReducer,
  },
});

export default store;
