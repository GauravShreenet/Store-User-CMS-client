import axios from 'axios';

const rootAPI = import.meta.env.VITE_ROOT_API + "/api/v1"
const userAPI = rootAPI + "/users"

const getAccessJWT = () => {
    return sessionStorage.getItem("accessJWT")
}

const getRefreshJWT = () => {
    return localStorage.getItem("refreshJWT")
}

const apiProcessor = async({ method, url, data }) => {
    try {
        const response = await axios({
            method,
            url,
            data,
        })

        return response.data;

    } catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
}

// ============================= user api
// create user
export const postNewUser = (data) => {
    return apiProcessor({
        method: 'post',
        url: userAPI,
        data,
    })
}

export const postVerifyUser = (data) => {
    return apiProcessor({
        method: 'post',
        url: userAPI + "/verify-email",
        data,
    })
}

export const requestOtp = (data) => {
    return apiProcessor({
        method: 'post',
        url: userAPI + "/request-otp",
        data,
    })
}

export const resetPass = (data) => {
    return apiProcessor({
        method: 'patch',
        url: userAPI,
        data,
    })
}

