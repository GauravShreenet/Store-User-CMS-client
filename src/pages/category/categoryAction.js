import { fetchCategories } from "../../helper/axiosHelper"
import { setACategory, setCategories } from "./categorySlice"

export const getCategories = () => async(dispatch) => {
    const resp = await fetchCategories()

    if(resp?.categories) {
        dispatch(setCategories(resp.categories))
    }
}

export const getACategory = (slug) => async(dispatch) => {
    const { status, categoryProducts } = await fetchCategories(slug)
    if(status === 'success') {
        dispatch(setACategory(categoryProducts))
    }
}
