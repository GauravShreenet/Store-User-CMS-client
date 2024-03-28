import React, { useState } from 'react'
import { PayStrip } from '../../component/payment-strip/PayStrip'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ItemShowCart } from '../../component/cart/ItemShowCart'
import { useSelector } from 'react-redux'

const stripePromise = loadStripe("pk_test_51OdhJiBFlevijssaZVpo5Xfe3TPU7m1SetFznCvYwFLCxnoWhdbmK592gVrRsLZufrEFaOrR74huXHcBIoiWJJzP00shRVfjFT")

const Payment = () => {

  const { user } = useSelector(state => state.userInfo)
  const { userCart } = useSelector(state => state.userCartInfo)

  const [totalPrice, setTotalPrice] = useState()

  const handleTotalPrice = (totalPrice) => {
    setTotalPrice(totalPrice)
  }

  return (
    <div className="flex">
      <Elements stripe={stripePromise}>
        <PayStrip totalPrice={totalPrice} user={user} userCart={userCart}/>
      </Elements>
      <ItemShowCart handleTotalPrice={handleTotalPrice} userCart={userCart} />
    </div>
  )
}

export default Payment