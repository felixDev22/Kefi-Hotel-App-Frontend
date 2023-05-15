import {configureStore} from '@reduxjs/toolkit';
import hotelsReducer from './hotels';
import hotelReducer from './hotelSlice';

export const store = configureStore({

    reducer: hotelsReducer,
    hotel: hotelReducer,
});

export default store;