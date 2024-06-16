import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Login from './pages/sign-in-up/Login'
import Register from './pages/sign-in-up/Register'
import PasswordReset from './pages/sign-in-up/PasswordReset'
import VerifyEmail from './pages/sign-in-up/VerifyEmail'
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import ProductLanding from './pages/product-landing/ProductLanding';
import MyCart from './pages/cart/MyCart';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from './pages/home/productAction';
import { useEffect, useState } from 'react';
import Payment from './pages/payment/Payment';
import { autoLogin } from './pages/profile/userAction';
import { PrivateRoute } from './component/private-route/PrivateRoute';
import { addItemUserCart, getCartItems } from './pages/product-landing/cartItemAction';
import OrderSuccess from './pages/order-success/OrderSuccess';
import PaymentRoute from './component/private-route/PaymentRoute';
import { EditProfile } from './pages/profile/EditProfile';
import Orders from './pages/order/Orders';
import { OrderDetail } from './component/order/OrderDetail';
import { getCategories } from './pages/category/categoryAction';

function App() {

  const dispatch = useDispatch()

  const { cartItems } = useSelector(state => state.cartInfo)
  const { user } = useSelector(state => state.userInfo)

  useEffect(() => {
    dispatch(getAllProduct())
    dispatch(getCategories())
    dispatch(autoLogin())
    dispatch(getCartItems())
  }, [dispatch])

  useEffect(() => {
    if (user?._id) {
      cartItems.forEach((item) => dispatch(addItemUserCart({...item, userId: user._id})))
      localStorage.removeItem("persist:root");
  }
  }, [cartItems, dispatch, user])

  return (
    <div>
      <Routes>
        {/* public route */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path='/collections/:slug' element={<Category />} />
        <Route path='/products/:slug' element={<ProductLanding />} />
        <Route path='/myCart' element={<MyCart />} />

        {/* private Route */}

        <Route path='/edit-profile' element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        } />
        <Route path='/orders' element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        } />
        <Route path='/orders/:_id' element={
          <PrivateRoute>
            <OrderDetail />
          </PrivateRoute>
        } />
        <Route path='/payment-success' element={
          <PrivateRoute>
            <OrderSuccess />
          </PrivateRoute>
        } />

        {/* private route for payment */}
        <Route path='/payment' element={
          <PaymentRoute>
            <Payment />
          </PaymentRoute>
        } />

      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
