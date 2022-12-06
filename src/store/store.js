import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from './parkingSlice';

export default configureStore({
    reducer: {

        parking:parkingReducer,
        parkingStatus:parkingReducer,
        parkingError: parkingReducer,
        parkingElement:parkingReducer,

    },
});