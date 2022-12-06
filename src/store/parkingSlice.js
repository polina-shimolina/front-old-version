import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchParking = createAsyncThunk(
    'range/fetchRange',
    async () => {
        const response = await axios(`http://127.0.0.1:8000/api/parking/`);
        return response.data
    }
)

export const fetchParkingElement = createAsyncThunk(
    'parking/fetchParkingElement',
    async (parkingId) => {
        const response = await axios(`http://127.0.0.1:8000/api/parking/${parkingId}/`);
        return response.data
    }
)
export const parkingSlice = createSlice({
    name: "parkingSlice",
    initialState: {
        parking:[],
        parkingStatus:'loading',
        parkingError:null,
        parkingElement:null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchParking.pending, (state, action) => {
                state.parkingStatus = 'loading'
            })
            .addCase(fetchParking.fulfilled, (state, action) => {
                // Add user to the state array
                state.parking=action.payload
                state.parkingStatus = 'succeeded'

            })
            .addCase(fetchParking.rejected, (state, action) => {
                state.parkingStatus = 'failed'
                state.parkingError = action.error.message

            })
            .addCase(fetchParkingElement.pending, (state, action) => {
                state.parkingStatus = 'loading'
            })
            .addCase(fetchParkingElement.fulfilled, (state, action) => {
                // Add user to the state array
                state.parkingElement=action.payload
                state.parkingStatus = 'succeeded'

            })
            .addCase(fetchParkingElement.rejected, (state, action) => {
                state.parkingStatus = 'failed'
                state.parkingError = action.error.message

            })
    },
});


// Action creators are generated for each case reducer function
// export const { fetchProducts1} = contactSlice.actions;

export default parkingSlice.reducer;