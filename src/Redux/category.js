import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// dealing with api
export const getcat=createAsyncThunk('categorySlice/getdata',async()=>{
     let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
     return  data.data 
})

let initalState ={
    cateData :[],
    eror:'',
    isLoading:false
}
let categSlice = createSlice({
    name:'cat',
    initalState,
    // using in creata a thinkthunk api
    extraReducers:(build)=>{
        build.addCase(getcat.fulfilled,(state,action)=>{
            state.cateData=action.payload
            state.isLoading=false
            state.eror=null
        })
        build.addCase(getcat.pending,(state,action)=>{
            state.isLoading=true
            state.eror=null
        })
        build.addCase(getcat.rejected,(state,action)=>{
            state.isLoading=false
            state.eror=action.payload
        })
    }

})
export let categoryReducer=categSlice.reducer










