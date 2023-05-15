import {
 createSlice,
 createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
 "login",
 async (data, thunkAPI) => {

  const loginUrl = 'http://127.0.0.1:3000/users/sign_in'

  try {
   const response = await axios.post(loginUrl, data, {
    headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
    },
   });

   if (response.status === 200) {
    return response.data;
   } else {
    return thunkAPI.rejectWithValue(response.data);
   }
  } catch (error) {
   return thunkAPI.rejectWithValue(error.response.data);
  }
 }
);

const initialState = {
 loading: false,
 success: false,
 data: {},
 error_message: '',
 errorStrings: [],
};

const loginSlice = createSlice({
 name: "login",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(loginUser.pending, (state) => {
    state.loading = true;
    state.success = false;
    state.data = null;
    state.error_message = null;
    state.errorStrings = [null];
   },
   builder.addCase(loginUser.fulfilled, (state, action) => {
    state.loading = false;
    state.success = true;
    state.data = action.payload.data;
    state.error_message = '';
    state.errorStrings = [];
    localStorage.setItem('token', action.payload.data.token);
   }),
   builder.addCase(loginUser.rejected, (state) => {
    state.loading = false;
    state.success = false;
    state.data = {};;
   })
  );
 },
});

export default loginSlice.reducer;
export const selectLoginLoading = (state) => state.login.loading;
export const selectLoginSuccess = (state) => state.login.success;
export const selectLoginData = (state) => state.login.data;
export const selectLoginErrorMessage = (state) => state.login.error_message;
export const selectLoginErrorStrings = (state) => state.login.errorStrings;

export const selectLoginError = (state) => {
 return {
  message: state.login.error_message,
  errors: state.login.errorStrings,
 };
};

export const loginActions = loginSlice.actions;
