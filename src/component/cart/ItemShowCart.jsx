import React, { useEffect, useState } from 'react'
import { CheckOutCard } from '../custom-card/CheckOutCard'
import { useSelector } from 'react-redux'
import usePriceCalculator from '../../customHook/usePriceCalculator'


export const ItemShowCart = ({handleTotalPrice, userCart }) => {

  const { products } = useSelector(state => state.productInfo)

  const subTotal = usePriceCalculator(userCart)
  const shipping = userCart?.length > 0 ? userCart.map((item) => item.qty).reduce((acc, i) => acc + i) * 0.25 + 15 : 0
  const taxRate = 0.02
  const taxEstimate = (subTotal * taxRate).toFixed(2)
  const orderTotal = (parseFloat(subTotal) + parseFloat(taxEstimate) + parseFloat(shipping)).toFixed(2);

  useEffect(()=>{
    handleTotalPrice(orderTotal)
  },[handleTotalPrice, orderTotal])

  return (
    <div className='w-full mt-10 ms-40'>
      
      {
        userCart?.map((item, i) => (
          <CheckOutCard key={i} {...item} products={products} />
        ))
      }
      <div className='mt-5 w-[40vh] text-lg'>
        <div>
          <span className='font-bold'>Summary Order</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-gray-900'>Subtotal: </span><span className='text-gray-900'>${subTotal}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-900'>Shipping estimate</span><span className='text-gray-900'>${shipping}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-900'>Tax estimate</span><span className='text-gray-900'>${taxEstimate}</span>
        </div><hr className='mt-5 border border-gray-300'/>
        <div className='mt-4 mb-5 flex justify-between'>
          <span className='font-bold'>Order Total</span><span>${orderTotal}</span>
        </div>
      </div>
    </div>
  )
}
