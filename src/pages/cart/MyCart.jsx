import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../component/layout/MainLayout'
import { CartCard } from '../../component/custom-card/CartCard'
import { useSelector } from 'react-redux'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import usePriceCalculator from '../../customHook/usePriceCalculator';
import cartHero from '../../assets/cartHero.jpg'

const MyCart = () => {

  const { user } = useSelector(state => state.userInfo)
  const { cartItems } = useSelector(state => state.cartInfo)
  const { products } = useSelector(state => state.productInfo)
  const { userCart } = useSelector(state => state.userCartInfo)

  const navigate = useNavigate();
  const location = useLocation()

  const itemsToUse = user?._id ? userCart : cartItems;
  const subTotal = usePriceCalculator(itemsToUse)

  const handleOnCheckout = () => {
    if(user?._id) {
      navigate("/payment");
    }else{
      navigate('/sign-in', { state: { from: {location} } });
    }
  }

  return (
    <MainLayout heroImage={cartHero} title='Cart'>
      <div className='mb-[10vh]'>
        {
          itemsToUse?.length > 0 ? (
            <div className='grid grid-cols-3 gap-10 mx-10 my-5'>
              <div className='col-span-2 border rounded-2xl border-gray-300 p-10'>
                <h2 className='text-[4vh] font-bold mb-5'>Shopping Cart</h2>
                {
                  itemsToUse.map((item, i) => (
                    <CartCard key={i} {...item} products={products} user={user} />
                  ))
                }
              </div>
              <div>
                <div className='border rounded-2xl border-gray-300 p-10 bg-gray-200'>
                 
                  <div className='flex justify-between items-center border border-b-gray-300 pb-6'>
                    <span className='text-gray-900 text-4xl font-bold uppercase'>Subtotal: </span><span className='text-gray-900 font-bold ms-2 text-5xl'>${subTotal}</span>
                  </div>
                  <div className='mt-5'>
                    
                        <button type="button" className='w-full px-20 h-10 p-2 mt-4 border border-blue-600 bg-blue-600 dark:text-gray-200 text-gray-50 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 uppercase transition-all duration-300'
                        onClick={handleOnCheckout}
                        >
                          checkout</button>
                  </div>
                  <div className='mt-5'>
                    <ul className='accordion'>
                      <li>
                        <input type="radio" name='accordion' id='first' />
                        <label htmlFor="first" className='uppercase'>Delivery</label>
                        <div className='content'>
                          Delivery cost will be calculated in next step. <br /> <br />
                          BGS endeavours to get your order to you as soon as possible. Your order will be processed and dispatched within approximately 3-4 working days.
                        </div>
                      </li>
                      <li>
                        <input type="radio" name='accordion' id='second' />
                        <label htmlFor="second" className='uppercase'>Returns</label>
                        <div className='content'>
                          We aim to provide you with the best online shopping experience, and it's really important that you love your purchase from BGS. If you are not completely satisfied with your online order, BGS will gladly refund your item/s. <br /> <br />

                          For detailed returns information please read our full <br />
                          <span className='underline'>Returns Policy</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
            : (
              <div className='text-center flex justify-center items-center h-[55svh]'>
                <div>
                  <h1 className='text-3xl font-semibold mb-2 uppercase'>Your cart is Empty</h1>
                  <div>
                    Begin your shopping adventure now!
                  </div>
                  <button className='w-full mt-8 h-10 mr-4 border border-blue-600 bg-blue-600 text-lg dark:text-gray-200 text-gray-50 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 uppercase'>
                    <div className='flex justify-center items-center gap-2 hover:gap-6 transition-all duration-300'>
                      <FaArrowLeftLong className="inline-flex items-center" /> Explore Our Catalog
                    </div>
                  </button>
                </div>
              </div>
            )
        }
      </div>
    </MainLayout>
  )
}

export default MyCart