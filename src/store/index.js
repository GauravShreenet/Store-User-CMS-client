import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from '../pages/profile/userSlice';
import productReducer from '../pages/home/productSlice';
import categoryReducer from '../pages/category/categorySlice';
import cartReducer from '../pages/cart/cartSlice';
import userCartReducer from '../pages/product-landing/cartItemSlice'
import orderReducer from '../pages/order/orderSlice'

const rootReducer = combineReducers({
  userInfo: userReducer,
  productInfo: productReducer,
  categoryInfo: categoryReducer,
  userCartInfo: userCartReducer,
  orderInfo: orderReducer,
  cartInfo: cartReducer,
});

const persistConfig = {
  key: "root", 
  storage, 
  whitelist: ["cartInfo"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer
});

// Export the store
export { store };

// Export the persisted version of the store
export const persistor = persistStore(store);