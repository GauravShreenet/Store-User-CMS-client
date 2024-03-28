import React from 'react'
import { useSelector } from 'react-redux'
import { CustomCard } from '../custom-card/CustomCard'
import { CustomSlider } from '../custom-slider/CustomSlider'

export const ProductSuggest = () => {

    const { selectedProduct } = useSelector(state => state.productInfo)
    const { products } = useSelector(state => state.productInfo)

    const catId = selectedProduct?.parentCatId

    const relatedProducts = products.filter(product => product?.parentCatId === catId && product?._id !== selectedProduct?._id)

    return (
        <div className='mx-20'>
            {
                relatedProducts.length > 0 ? (
                    <div>
                        <h3 className='text-2xl uppercase font-semibold mb-10'>People also Like</h3>
                        {relatedProducts.length > 1 ? (
                            <CustomSlider products={relatedProducts} />
                        ) : (
                            <div className='flex gap-3'>
                                {relatedProducts.map((item, i) => (
                                    <CustomCard {...item} key={i} />
                                ))}
                            </div>
                        )}
                    </div>
                ) : null
            }
        </div>
    )
}
