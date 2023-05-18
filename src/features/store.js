import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hotelsReducer from './hotels';
import reserveReducer from '../features/slices/reserve/reserveSlice';

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  reserve: reserveReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
