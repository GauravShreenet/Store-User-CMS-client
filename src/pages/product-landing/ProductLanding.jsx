import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAProduct } from '../home/productAction'
import { useParams } from 'react-router-dom'

const ProductLanding = () => {

  const dispatch = useDispatch()
  const { slug } = useParams()

  const { selectedProduct } = useSelector((state)=>state.productInfo)

  useEffect(()=>{
    slug && dispatch(getAProduct(slug))
  }, [slug, dispatch])

  return (
    <div>ProductLanding</div>
  )
}

export default ProductLanding