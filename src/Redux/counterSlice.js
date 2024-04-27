import { createSlice } from "@reduxjs/toolkit";
 let initialState={
    value : 0
 }
const counterSlice = createSlice({
    name:'muCounter',
    initialState,
    reducers:{
        increase:(state,action)=>{
            state.value++
        },
        dicrease:(state,action)=>{
            state.value--
        },
        changename:(state)=>{
            state.name='ki'
        },
        // using action
        changebyname:(state,action)=>{
             state.name=action.payload
        },
        // using action
        increaseByAmount:(state,action)=>{
           state.value +=action.payload
        }
        
    }
})
export let {increase,dicrease,changename,increaseByAmount,changebyname}=counterSlice.actions  //action creator to get fun 
export let counterReducer=counterSlice.reducer  // reduce fun to update store (action , initial )