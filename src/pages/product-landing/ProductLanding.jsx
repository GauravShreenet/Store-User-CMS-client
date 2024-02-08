import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAProduct } from '../home/productAction'
import { useParams } from 'react-router-dom'
import { MainLayout } from '../../component/layout/MainLayout'
import { ProductComp } from '../../component/product-landing/ProductComp'

const ProductLanding = () => {

  const dispatch = useDispatch()
  const { slug } = useParams()

  const { selectedProduct } = useSelector((state) => state.productInfo)

  useEffect(() => {
    slug && dispatch(getAProduct(slug))
  }, [slug, dispatch])

  return (
    <MainLayout>
      <div className='mt-[10vh] mb-[10vh]'>
          <ProductComp selectedProduct={ selectedProduct }/>
      </div>
    </MainLayout>
  )
}

export default ProductLanding