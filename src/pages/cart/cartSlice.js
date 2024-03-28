import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.cartItems.push(payload)
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        updateCartItem: (state, { payload }) => {
            state.cartItems = payload;
        },
    }
})

const { reducer, actions } = cartSlice

export const { addToCart, clearCart, updateCartItem } = actions
export default reducer