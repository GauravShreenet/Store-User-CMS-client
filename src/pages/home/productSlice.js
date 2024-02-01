import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    arrival: [],
    products: [],
    selectedProduct: {}
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setArrival: (state, { payload }) => {
            state.arrival = payload
        },
        setSelectedProduct: (state, { payload }) => {
            state.selectedProduct = payload
        }
    }
})

const { reducer, actions } = productSlice

export const { setArrival, setSelectedProduct } = actions
export default reducer;