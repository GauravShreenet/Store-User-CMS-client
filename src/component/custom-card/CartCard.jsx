import React, { useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { removeItem, updatedCartQty } from '../../pages/cart/cartAction';
import { deleteItemUserCart, userCartItmQty } from '../../pages/product-landing/cartItemAction';

export const CartCard = ({ _id, productId, name, size, color, thumbnail, qty, products, user }) => {
    const dispatch = useDispatch()
    const [qtyChange, setQtyChange] = useState(qty)

    const product = {
        _id,
        productId,
        name,
        size,
        color,
        thumbnail,
        qty,
    }

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

    const updatedPrice = price * qtyChange

    const handleOnQtyChange = (value) => {
        const newQty = Math.max(qtyChange + value, 1)
        setQtyChange(newQty);
        const updateProduct = { ...product, qty: newQty }
        if (user?._id) {
            dispatch(userCartItmQty(updateProduct))
        } else {
            dispatch(updatedCartQty(updateProduct))
        }
    }

    const handleOnDelete = () => {
        if (window.confirm("Are you sure you want to remove this item from the cart?")) {
            if (user?._id) {
                dispatch(deleteItemUserCart(product))
            } else {
                dispatch(removeItem(product))
            }
        }
    }


    return (
        <div className='border-2 border-gray-100 border-t-gray-300 grid grid-cols-6 gap-6 py-8'>
            <div className='h-[40vh] col-span-2'>
                <img src={thumbnail} alt="" className='object-fit w-full h-full' />
            </div>
            <div className='col-span-2 flex justify-center'>
                <div>
                    <div className='uppercase text-[2.5vh] mb-3 font-medium'>{name}</div>
                    <div className='flex items-center mb-3'>
                        <span className='text-xl'>Color:</span> <div className='rounded-full h-6 w-6 mx-3' style={{ background: `${color}` }} /><span className='ps-3 border-2 border-gray-100 border-s-gray-400 text-xl'>Size: {size}</span>
                    </div>
                    <div className='flex gap-8'>
                        <div className='text-xl mb-3'>Price: ${price}</div>
                        <div className='text-xl'>Total: ${updatedPrice}</div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center gap-5'>
                <div className='flex h-8'>
                    <button type="button" className="border border-gray-300 px-2 rounded-lg" onClick={() => handleOnQtyChange(-1)}>
                        -
                    </button>
                    <div className='border border-gray-300 px-8 mx-2 rounded-lg flex items-center'>{qtyChange}</div>
                    <button type='button' className="border border-gray-300 px-2 rounded-lg" onClick={() => handleOnQtyChange(1)}>
                        +
                    </button>
                </div>

            </div>
            <div className='flex justify-end'>
                <button className='border border-gray-300 p-2 rounded-lg h-8' onClick={handleOnDelete}>
                    <RiDeleteBin5Line />
                </button>
            </div>
        </div>
    )
}
