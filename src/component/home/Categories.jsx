import React, { useEffect } from 'react'
import { CustomSlider } from '../custom-slider/CustomSlider'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../pages/category/categoryAction'

export const Categories = () => {

    const dispatch = useDispatch()

    const { categories } = useSelector((state) => state.categoryInfo)

    useEffect(()=>{
        dispatch(getCategories())
    }, [dispatch])
    
  return (
    <div className='mb-10'>
        <h1 className='text-4xl m-10 font-bold'>Shop by Categories</h1>
        <div>
            <CustomSlider categories={ categories } />
        </div>
    </div>
  )
}
