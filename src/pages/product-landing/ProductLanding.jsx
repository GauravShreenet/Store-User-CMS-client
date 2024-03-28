import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAProduct } from '../home/productAction'
import { useParams } from 'react-router-dom'
import { MainLayout } from '../../component/layout/MainLayout'
import { ProductComp } from '../../component/product-landing/ProductComp'
import { ProductSuggest } from '../../component/product-landing/ProductSuggest'
import { ProductDesc } from '../../component/product-landing/ProductDesc'
import productHero from '../../assets/productHero.jpg'

const ProductLanding = () => {

  const dispatch = useDispatch()
  const { slug } = useParams()


  useEffect(() => {
    slug && dispatch(getAProduct(slug))
  }, [slug, dispatch])

  return (
    <MainLayout heroImage={productHero}>
      <div className=''>
          <ProductComp />
      </div>        
      <ProductSuggest />
      <div>
        <ProductDesc />
      </div>
    </MainLayout>
  )
}

export default ProductLanding