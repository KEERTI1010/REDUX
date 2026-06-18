import { createSlice} from "@reduxjs/toolkit";
import { useState } from "react";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{value:0},
    reducer:{
        increment:(state) => {
            state.value = state.value + 1
        },
        decrement : (state) => { state.value - 1}
    }
})

export const{increment,decrement} = counterSlice.actions
export default counterSlice.reducer

