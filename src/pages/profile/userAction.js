import { fetchAUser, fetchNewAccessJwt } from "../../helper/axiosHelper"
import { setUser } from "./userSlice"

export const getUserProfile = () => async(dispatch) => {
    const resp = await fetchAUser()

    if(resp?.user) {
        dispatch(setUser(resp.user))
    }
}

export const autoLogin = () => async(dispatch) => {
    const accessJWT = sessionStorage.getItem("accessJWT")

    if (accessJWT) {
        return dispatch(getUserProfile())
    }

    const refreshJWT = localStorage.getItem("refreshJWT")

    if(refreshJWT) {
        const token = await fetchNewAccessJwt();
        if(token?.accessJWT){
            sessionStorage.setItem("accessJWT", token?.accessJWT);
            dispatch(getUserProfile());
        }
    }
}