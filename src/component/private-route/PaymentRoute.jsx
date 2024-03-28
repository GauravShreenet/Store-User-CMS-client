import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PaymentRoute = ({ children }) => {
    const { user } = useSelector(state => state.userInfo)
    const { userCart } = useSelector(state => state.userCartInfo)
  return (user?._id && userCart.length > 0) ? children : <Navigate to = "/" />
}

export default PaymentRoute