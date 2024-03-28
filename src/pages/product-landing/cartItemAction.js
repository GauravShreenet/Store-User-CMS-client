import { addItem, deleteAllCartItm, deleteCartItm, fetchCartItems, updateItemQty } from "../../helper/axiosHelper"
import { setUserCart } from "./cartItemSlice"

export const getCartItems = () => async (dispatch) => {
    const { status, cartItem } = await fetchCartItems()
    if(status === "success") {
        dispatch(setUserCart(cartItem))
    }
}

export const addItemUserCart = (productObj) => async (dispatch) => {
    const { status } = await addItem(productObj)
    if(status === 'success') {
        dispatch(getCartItems())
    }
}

export const userCartItmQty = (productObj) => async (dispatch) => {
    const { status } = await updateItemQty(productObj)
    if(status === "success") {
        dispatch(getCartItems())
    }
}

export const deleteItemUserCart = (productObj) => async(dispatch) => {
    const { status } = await deleteCartItm(productObj)
    if(status === "success") {
        dispatch(getCartItems())
    }
}

export const deleteAllCartItems = () => async (dispatch) => {
    const { status } = await deleteAllCartItm()
    if(status === "success") {
        dispatch(setUserCart())
    }
}