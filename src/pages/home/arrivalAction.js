import { fetchArrivalProducts } from "../../helper/axiosHelper"
import { setArrival } from "./arrivalSlice"

export const getArrivalProduct = () => async(dispatch) => {
    const resp = await fetchArrivalProducts()

    if(resp?.newArrive) {
        dispatch(setArrival(resp.newArrive))
    }
}