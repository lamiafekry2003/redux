import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { todoReducer } from "./todoSlice";

// to create redux
export const store = configureStore({
    // to collect all reducers function 
    reducer:{
     counter:counterReducer, // in counterslice 
     todo:todoReducer,
     cate:counterReducer,
    }
})
