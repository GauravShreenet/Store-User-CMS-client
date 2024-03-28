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
        },
        setProducts: (state, { payload }) => {
            state.products = payload
        }
    }
})

const { reducer, actions } = productSlice

export const { setArrival, setSelectedProduct, setProducts } = actions
export default reducer;