import {configureStore} from '@reduxjs/toolkit';
import hotelsReducer from './hotels';

export const store = configureStore({

    reducer: hotelsReducer,
});

export default store;