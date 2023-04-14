
import { configureStore } from "@reduxjs/toolkit";
import xyz from '../store/slices/cartslice'
import abc from "./slices/whishlistSlice";

const store = configureStore({
    
    reducer:{
        cart:xyz,
        whishlist:abc
        
    }
})


export default store;