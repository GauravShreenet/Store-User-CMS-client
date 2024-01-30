import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../pages/profile/userSlice';
import productReducer from '../pages/home/arrivalSlice';
import categoryReducer from '../pages/category/categorySlice'

export default configureStore({
    reducer: {
        userInfo: userReducer,
        productInfo: productReducer,
        categoryInfo: categoryReducer
    }
})