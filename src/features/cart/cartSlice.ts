import { createSlice type PayloadAction } from "@reduxjs/toolkit";
import type { CaerItem, Product } from "../../types";


interface CartState{
    items:CaerItem[];
}

const initialState:CartState={
    items:[],
}


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Product>)=>{
            const existing=state.items.find(item => item.id ===action.payload.id);
            if(existing){
                existing.quantity +=1;
            }else{
                state.items.push({...action.payload,quantity:1});
            }
        },
        removeFormCart:(state,action:PayloadAction<number>)=>{
            state.items=state.items.filter(item=>item.id !== action.payload);
        },

        incrementQuantity:(state,action:PayloadAction<number>)=>{
            const item=state.items.find(item=>item.id === action.payload);
            if(item) item.quantity +=1
        },

        decrementQuantity:(state,action:PayloadAction<number>)=>{
            const item=state.items.find(item=>item.id === action.payload);
            if(item && item.quantity > 1) item.quantity -=1;
        },

    },
});

export const {addToCart,removeFormCart,incrementQuantity,decrementQuantity}=cartSlice.actions;
export default cartSlice.reducer;