import React, { useEffect, useState } from 'react'
import { CustomSlider } from '../custom-slider/CustomSlider'
import { useDispatch, useSelector } from 'react-redux'
import { getArrivalProduct } from '../../pages/home/arrivalAction'

export const NewCollection = () => {
    const dispatch = useDispatch()

    const { arrival } = useSelector((state)=> state.productInfo)

    

    useEffect(()=>{
        dispatch(getArrivalProduct())
      }, [dispatch])

    return (
        <div className='mb-10'>
            <h1 className='text-4xl m-10 font-bold'>New Arrival</h1>
            <div>
                <CustomSlider products={arrival}/>
            </div>
        </div>
    )
}
