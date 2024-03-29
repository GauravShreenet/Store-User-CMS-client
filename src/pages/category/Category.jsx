import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getACategory } from './categoryAction';
import { MainLayout } from '../../component/layout/MainLayout';
import { CustomCard } from '../../component/custom-card/CustomCard';
import categoriesHero from '../../assets/categoriesHero.jpg'

const Category = () => {

    const dispatch = useDispatch();
    const { slug } = useParams();

    const { selectedCategory } = useSelector(state => state.categoryInfo)

    useEffect(()=>{
        slug && dispatch(getACategory(slug))
    },[slug, dispatch])

  return (
    <MainLayout heroImage={categoriesHero} title={slug}>
        <div className='my-10 text-center text-xl'>
            {selectedCategory.length} Products Found
        </div>
        <div className='mx-3 md:mx-8 lg:mx-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4'>
            {
                selectedCategory.map((item)=>(<CustomCard {...item}/>))
            }
        </div>
    </MainLayout>
  )
}

export default Category