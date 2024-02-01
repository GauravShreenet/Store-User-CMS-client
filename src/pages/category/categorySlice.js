import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    selectedCategory: []
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, { payload }) => {
            state.categories = payload
        },
        setACategory: (state, { payload }) => {
            state.selectedCategory = payload
        }
    }
})

const { reducer, actions } = categorySlice

export const { setCategories, setACategory } = actions
export default reducer;