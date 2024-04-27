import { createSlice } from "@reduxjs/toolkit";
let initialState={
    fruits:[{id:1,type:'mango'}]
}
let todoSlice= createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            if(state.fruits.map(ele=>ele.type).indexOf(action.payload.type) == -1)
               state.fruits.push(action.payload)
            else
            return
        },
        removeTODo:(state,action)=>{
          let newArr = state.fruits.filter((todo)=>todo.id !== action.payload)
          state.fruits=newArr
        }
    }

})
export let {addToDo,removeTODo}=todoSlice.actions;
export let todoReducer=todoSlice.reducer