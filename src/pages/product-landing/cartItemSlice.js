import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userCart: []
}

const cartItemSlice = createSlice({
    name: 'userCart',
    initialState,
    reducers: {
        setUserCart: (state, { payload }) => {
            state.userCart = payload;
        },
    }
})

const { reducer, actions } = cartItemSlice

export const { setUserCart } = actions
export default reducer