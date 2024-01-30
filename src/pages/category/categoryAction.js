import { fetchCategories } from "../../helper/axiosHelper"
import { setCategories } from "./categorySlice"

export const getCategories = () => async(dispatch) => {
    const resp = await fetchCategories()

    if(resp?.categories) {
        dispatch(setCategories(resp.categories))
    }
}