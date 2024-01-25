import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../pages/profile/userSlice';

export default configureStore({
    reducer: {
        userInfo: userReducer
    }
})