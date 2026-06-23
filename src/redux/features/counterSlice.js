import { createSlice} from "@reduxjs/toolkit";
import { useState } from "react";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{value:0},
    reducer:{
        increment:(state) => {
            state.value = state.value + 1
        },
        decrement : (state) => { state.value - 1
        },
        incrementByAmount: (state , actions) => {
            state.value =state.value + actions.payload
        }
    }
})

export const{increment,decrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer

