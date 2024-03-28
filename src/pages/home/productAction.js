import { fetchArrivalProducts, fetchProduct } from "../../helper/axiosHelper"
import { setArrival, setProducts, setSelectedProduct } from "./productSlice"

export const getArrivalProduct = () => async(dispatch) => {
    const resp = await fetchArrivalProducts()

    if(resp?.newArrive) {
        dispatch(setArrival(resp.newArrive))
    }
}

export const getAProduct = (slug) => async(dispatch) => {
    const { status, products } = await fetchProduct(slug)

    if(status === 'success') {
        dispatch(setSelectedProduct(products))
    }
}

export const getAllProduct = () => async(dispatch) => {
    const { status, products } = await fetchProduct()

    if(status === 'success') {
        dispatch(setProducts(products))
    }

}