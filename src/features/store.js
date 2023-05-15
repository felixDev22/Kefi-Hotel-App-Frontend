import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/slices/auth/login';
import registerReducer from '../features/slices/auth/register';
import hotelsReducer from './hotels';

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    hotels: hotelsReducer,
  },
});

export default store;


