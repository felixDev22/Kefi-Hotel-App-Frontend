import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "register",
  async (data, thunkAPI) => {
    const registerUrl = 'http://127.0.0.1:3000/api/v1/users';

    try {
      const response = await axios.post(registerUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.status === 201) {
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
  errorMessage: "",
  errorStrings: [],
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      registerUser.pending,
      (state) => {
        state.loading = true;
        state.success = false;
        state.errorMessage = "";
        state.errorStrings = [];
      },
      builder.addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload.data;
        state.errorMessage = "";
        state.errorStrings = [];
        localStorage.setItem("token", action.payload.token);
      }),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.data = {};
        state.errorMessage = action?.payload?.message || "Something went wrong";
        state.errorStrings = Object.values(
          action?.payload?.errors || {}
        ).flat();
      })
    );
  },
});

export default registerSlice.reducer;

export const SelectRegisterState = (state) => state.register;
export const selectRegisterLoading = (state) => state.register.loading;
export const selectRegisterSuccess = (state) => state.register.success;
export const selectRegisterData = (state) => state.register.data;
export const selectRegisterErrorMessage = (state) =>
  state.register.errorMessage;
export const selectRegisterErrorStrings = (state) =>
  state.register.errorStrings;

export const registerActions = registerSlice.actions;
