import axios from 'axios';

const rootAPI = import.meta.env.VITE_ROOT_API + "/api/v1"
const userAPI = rootAPI + "/users";
const productAPI = rootAPI + "/products"
const categoryAPI = rootAPI + "/categories"
const cartAPI = rootAPI + "/cartItems"
const orderAPI = rootAPI + "/orders"

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
            const { accessJWT } = await fetchNewAccessJWT();
            
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

export const fetchNewAccessJWT = () => {
    return apiProcessor({
        method: 'get',
        url: userAPI + "/accessjwt",
        isPrivate: true,
        refreshToken: true,
    })
}

export const updatePassword = (data) => {
    return apiProcessor({
        method: 'patch',
        url: userAPI + "/password",
        data,
        isPrivate: true,
    })
}

export const updateProfile = (data) => {
    return apiProcessor({
        method: 'patch',
        url: userAPI + "/user-profile",
        data,
        isPrivate: true,
    })
}

export const logoutUser = (_id) => {
    return apiProcessor({
        method: 'post',
        url: userAPI + "/logout",
        data: {
            _id,
            accessJWT: getAccessJWT(),
            refreshToken: getRefreshJWT(),
        }
    })
}

// ===================== product fetching

export const fetchProduct = (slug) => {
    return apiProcessor({
        method: 'get',
        url: slug ? productAPI + "/" + slug : productAPI,
    })
}

export const fetchArrivalProducts = (data) => {
    return apiProcessor({
        method: 'get',
        url: productAPI + "/new-arrival",
        data,
    })
}

// ================ categories fetching
export const fetchCategories = (slug) => {
    return apiProcessor({
        method: 'get',
        url: slug ? categoryAPI + "/" + slug : categoryAPI,
    })
}

// =============== cartItem 
export const fetchCartItems = () => {
    return apiProcessor({
        method: 'get',
        url: cartAPI,
        isPrivate: true,
    })
}

export const addItem = (data) => {
    return apiProcessor({
        method: 'post',
        url: cartAPI,
        data,
        isPrivate: true,
    })
}

export const updateItemQty = (data) => {
    return apiProcessor({
        method: 'patch',
        url: cartAPI,
        data,
        isPrivate: true,
    })
}

export const deleteCartItm = (data) => {
    return apiProcessor({
        method: 'delete',
        url: cartAPI,
        data,
        isPrivate: true,
    })
}

export const deleteAllCartItm = () => {
    return apiProcessor({
        method: 'delete',
        url: cartAPI + "/deleteAll",
        isPrivate: true,
    })
}

// ========== payment
export const paySuccess = (data) => {
    return apiProcessor({
        method: 'post',
        url: orderAPI,
        data,
        isPrivate: true,
    })
}

export const addOrder = (data) => {
    return apiProcessor({
        method: 'post',
        url: orderAPI + "/create-order",
        data,
        isPrivate: true,
    })
}

// ===========fetch the user order
export const fetchOrders = (_id) => {
    return apiProcessor({
        method: 'get',
        url: _id ? orderAPI + "/" + _id : orderAPI,
        isPrivate: true,
    })
}