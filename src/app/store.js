import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/countersSlice";


const store = configureStore({
    reducer:{
        counter : counterReducer,
    }
})
export default store; 