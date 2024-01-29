import axios from 'axios';

const rootAPI = import.meta.env.VITE_ROOT_API + "/api/v1"
const userAPI = rootAPI + "/users";
const productAPI = rootAPI + "/products"

const getAccessJWT = () => {
    return sessionStorage.getItem("accessJWT")
}

const getRefreshJWT = () => {
    return localStorage.getItem("refreshJWT")
}

const apiProcessor = async({ method, url, data, isPrivate, refreshToken }) => {
    try {
        const token = refreshToken ? getRefreshJWT() : getAccessJWT()
        const headers = {
            Authorization: isPrivate ? token : null
        }
        const response = await axios({
            method,
            url,
            data,
            headers,
        })

        return response.data;

    } catch (error) {
        if(error.response?.data?.message.toLowerCase().includes("jwt expired")){
            const { accessJWT } = await fetchNewAccessJwt();
            if(accessJWT) {
                sessionStorage.setItem("accessJWT", accessJWT)
                return apiProcessor({ method, url, data, isPrivate, refreshToken });
            }
        }
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

export const fetchAUser = (data) => {
    return apiProcessor({
        method: 'get',
        url: userAPI,
        isPrivate: true,
        data,
    })
}

export const loginUser = (data) => {
    return apiProcessor({
        method: 'post',
        url: userAPI + "/sign-in",
        data,
    })
}

export const fetchNewAccessJwt = (data) => {
    return apiProcessor({
        method: 'get',
        url: userAPI + "/get-accessjwt",
        isPrivate: true,
        refreshToken: true,
    })
}

// ===================== data fetching

export const fetchArrivalProducts = (data) => {
    return apiProcessor({
        method: 'get',
        url: productAPI + "/new-arrival",
        data,
    })
}