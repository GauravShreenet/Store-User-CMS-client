import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    order: [],
    selectedOrder: {}
}
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder: (state, {payload = [] }) => {
            state.order = payload;
        },
        setAOrder: (state, { payload }) => {
            state.selectedOrder = payload
        }
    }
})

const { reducer, actions } = orderSlice;

export const { setOrder, setAOrder } = actions
export default reducer