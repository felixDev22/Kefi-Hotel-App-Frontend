import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hotels: [],
    loading: false,
}

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        addHotel: (state, {payload}) => {
            state.hotels = payload;
        }
        }
        });

export const { addHotel } = hotelsSlice.actions
// export const getAllHotel = (state) => state.hotels 
export default hotelsSlice.reducer
