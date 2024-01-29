import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    arrival: []
}

const arrivalSlice = createSlice({
    name: 'arrival',
    initialState,
    reducers: {
        setArrival: (state, { payload }) => {
            state.arrival = payload
        }
    }
})

const { reducer, actions } = arrivalSlice

export const { setArrival } = actions
export default reducer;