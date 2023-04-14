
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    
    wishlistItems:[],
    isWhishlistOpen :false,
    removeHeart:null
    
};


const whishlistSlice = createSlice({
    name:'whishlist',
    initialState,
    reducers:{

        getWhishlistData(state,action){
            const getId = action.payload.id;
            const exitingId = state.wishlistItems.find(item => item.id === getId);
            if(!exitingId){  
                state.wishlistItems.push(action.payload)
            }
             },
        openWishlist(state,action){
            state.isWhishlistOpen = action.payload
        },

        closeWishlist (state,action){
            state.isWhishlistOpen = action.payload;
           
        },
        removeWishlistItem (state,action){
            state.removeHeart = action.payload;
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload)
        },
    }
})
export const {getWhishlistData,openWishlist,closeWishlist,removeWishlistItem} = whishlistSlice.actions;
export default whishlistSlice.reducer;