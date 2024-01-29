import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../pages/profile/userSlice';
import productReducer from '../pages/home/arrivalSlice'

export default configureStore({
    reducer: {
        userInfo: userReducer,
        productInfo: productReducer
    }
})