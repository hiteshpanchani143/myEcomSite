
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isCartOpen : false,
    cartItems:[],
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

        addItem(state,action){ 
            const newItemId = action.payload.id;
            const existingItem = state.cartItems.find(item => item.id === newItemId);
            if(existingItem){
                existingItem.quantity++;
            }else{
                state.cartItems.push(action.payload)
            }
        },

        toggleCart(state,action){
            state.isCartOpen = action.payload;
        },

        removeItem(state,action){
            state.cartItems = state.cartItems.filter(item =>item.id !== action.payload);
    
            // const findNew = state.cartItems.findIndex((item)=> item.id === action.payload)
            //   if(findNew !== -1){
            //     state.cartItems.splice(findNew,1) 
            //   }
        },

        incrementItem(state,action){
            state.cartItems= state.cartItems.map(item =>{
                if(item.id === action.payload){
                    item.quantity++

                }
                return item
            })
        },

        decrementItem(state,action){
            state.cartItems = state.cartItems.map(item =>{
                if(item.id === action.payload){
                    item.quantity--;
                }
                return item
            }).filter(item => item.quantity !== 0);
        },

        
    }
});


export const {toggleCart, addItem,removeItem, incrementItem,decrementItem} = cartSlice.actions;

export default cartSlice.reducer;
