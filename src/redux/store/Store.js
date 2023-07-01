import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from '../slices/CategorySlice'
// import ContactReducer from '../slices/ContactSlice'
const Store = configureStore({
    reducer:{
        category:CategoryReducer,
        // contact:ContactReducer,
        
    }
});


export default Store;