import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user } = useSelector((state)=> state.userInfo)
  return user?.status === "active" ? (children) : <Navigate to="/sign-in" state={
    {
        from: {location}
    }
  } />
}
