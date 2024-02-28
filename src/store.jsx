import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slice";

const store = configureStore({
    reducer: {
        message: messageReducer
    }
});

export default store;
