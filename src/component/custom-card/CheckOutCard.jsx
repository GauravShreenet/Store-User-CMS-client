import React from 'react'

export const CheckOutCard = ({ _id, productId, name, size, color, thumbnail, qty, products }) => {

    const productInfo = products?.find(item => item._id === productId);
    const variation = productInfo?.variations.find(variation => variation.color === color);
    const sizeInfo = variation?.sizes.find(s => s.size === size);
    const currentDate = new Date();

    let price = 0;
    if (sizeInfo) {
        if (sizeInfo.salesPrice && new Date(sizeInfo.salesStartDate) <= currentDate && new Date(sizeInfo.salesEndDate) >= currentDate) {
            price = sizeInfo.salesPrice;
        } else {
            price = productInfo.price;
        }
    }

    const updatedPrice = price * qty

    return (
        <div className='w-full'>
            <div className='border-2 border-gray-100 w-[40vh] border-b-gray-300 grid grid-cols-3 gap-2 py-8'>
                <div className='relative h-[10vh] w-[10vh]'>
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-700 border-2 border-gray-700 rounded-full -top-2 -end-2">{qty}</div>
                    <img src={thumbnail} alt="" className='object-fit w-full h-full' />
                </div>

                <div>
                    <div className='uppercase mb-3 font-medium'>{name}</div>
                    <div className='flex items-center mb-3'>
                        <span className='uppercase'>{size}</span>
                    </div>
                </div>

                <div className='text-lg flex justify-end'>${updatedPrice}</div>
            </div>
        </div>
    )
}
