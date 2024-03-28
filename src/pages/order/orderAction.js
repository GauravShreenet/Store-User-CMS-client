
import { setAOrder, setOrder } from "./orderSlice";
import { fetchOrders } from "../../helper/axiosHelper";


export const getAllOrder = () => async (dispatch) => {
    const { status, order } = await fetchOrders();
    if(status === "success") {
        dispatch(setOrder(order))
    }
}

export const getAOrder = (_id) => async (dispatch) => {
    const { status, order } = await fetchOrders(_id)
    if( status === 'success') {
        dispatch(setAOrder(order))
    }
}