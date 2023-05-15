import {
    configureStore
} from '@reduxjs/toolkit';
import loginReducer from '../features/slices/auth/login';
import registerReducer from '../features/slices/auth/register';

const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
    },
});

export default store;
