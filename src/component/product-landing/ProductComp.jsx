import React, { useEffect, useState } from 'react'
import { CustomVertical } from '../custom-slider/CustomVertical';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../pages/cart/cartAction';
import { addItemUserCart } from '../../pages/product-landing/cartItemAction';

export const ProductComp = () => {

    const { selectedProduct } = useSelector((state) => state.productInfo)
    const { user } = useSelector((state) => state.userInfo)

    const [selectedColor, setSelectedColor] = useState('')
    const [selectedImg, setSelectedImg] = useState(null)
    const [count, setCount] = useState(1)
    const [selectedSize, setSelectedSize] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const dispatch = useDispatch();

    const { name, _id, slug, sku, price, description, variations } = selectedProduct || {}

    useEffect(() => {
        setSelectedColor(variations?.length > 0 ? variations[0].color : '');
        setSelectedSize(variations?.length > 0 ? variations[0].sizes[0].size : '')
        setSelectedImg(variations?.length > 0 ? variations[0].thumbnail : "")
    }, [variations]);

    const handleOnCart = async () => {
        setLoading(true)
        const cartItem = {
            name,
            productId: _id,
            slug,
            sku,
            size: selectedSize,
            color: selectedColor,
            qty: count,
            thumbnail: variationThumbnail,
            userId: user?._id ? user?._id : null,
        }
        if (user && user._id) {
            await dispatch(addItemUserCart(cartItem));
            setLoading(false)
            setSuccess(true)
        } else {
            await dispatch(addItemToCart(cartItem));
            setLoading(false)
            setSuccess(true)
        }

        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    }

    const updateCount = (value) => {
        setCount(prevCount => Math.max(prevCount + value, 1))
    }

    const handleOnColor = (color) => {
        setSelectedColor(color)
        const selectedVariation = variations.find(variation => variation.color === color);
        // Set the selectedImg to the thumbnail of the selected variation
        setSelectedImg(selectedVariation?.thumbnail || '');
    }

    const handleOnImgSelect = (image) => {
        setSelectedImg(image)
    }

    const handleOnSize = (size) => {
        setSelectedSize(size)
    }

    const variation = variations && variations.find((variation) => variation.color === selectedColor) || {};

    const variationThumbnail = variations && variation.thumbnail
    const variationSizes = variations && variation.sizes
    const variationImages = variations && variation.images


    const variationSizeObj = variationSizes && variationSizes.find(({ size }) => size === selectedSize)

    const salePrice = variationSizeObj ? variationSizeObj.salesPrice : ""
    const variationQty = variationSizeObj ? variationSizeObj.qty : 0

    const salesStartDate = variationSizeObj ? new Date(variationSizeObj.salesStartDate) : null;
    const salesEndDate = variationSizeObj ? new Date(variationSizeObj.salesEndDate) : null;
    const currentDate = new Date();

    return (
        <section className="py-20 bg-[#F4F4F4] font-poppins">
            <div className='md:flex md:justify-around'>
                <div className="flex gap-10">
                    <div className='h-[40vh] w-[25vh]'>
                        {
                            <CustomVertical variationImages={variationImages} onImageSelect={handleOnImgSelect} />
                        }
                    </div>
                    <div className="mb-6 lg:mb-10 h-[45vh] md:h-[85vh]  w-[30vh] md:w-[60vh] mt-[1vh]">
                        <img src={selectedImg ? selectedImg : variationThumbnail}
                            alt="" className="object-fit w-full h-full " />
                    </div>
                </div>
                <div className=''>
                    <div className="pb-6 mb-8 border-b border-gray-700">
                        <span className="text-lg font-medium text-rose-500">New</span>
                        <h2 className="max-w-xl mt-2 mb-2 text-xl font-bold md:text-4xl uppercase text-center">
                            {name}
                        </h2>
                        <h4 className='max-w-xl mt-2 mb-2 text-l md:text-l text-gray-400 uppercase text-center'>
                            sku: {sku}
                        </h4>
                        <div className="flex flex-wrap items-center mb-6">
                            <ul className="flex mb-4 mt-2 lg:mb-0">
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-blue-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-blue-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-blue-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor"
                                            className="w-4 mr-1 text-blue-500 dark:text-gray-400 bi bi-star "
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <a className="mb-4 text-xs underline dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                                href="#">
                                Be the first to review the product
                            </a>
                        </div>
                        <p className="max-w-md mb-8 text-gray-700">
                            {description?.slice(0, 150)} ...
                        </p>

                        <p className="inline-block text-2xl font-semibold text-gray-700">
                            {salesStartDate && salesEndDate && currentDate >= salesStartDate && currentDate <= salesEndDate ? (
                                salePrice && (
                                    <>
                                        <span className='text-4xl'>${salePrice}</span>
                                        <span className="text-base font-normal text-red-500 line-through ms-2">${price}</span>
                                    </>
                                ) 
                            ) : (variationQty === 0 ? (<span className='ms-5 uppercase text-xl text-red-500'>Out of Stock</span>) : (<span className='text-4xl'>${price}</span>))}
                        
                        </p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold">
                            Color</h2>
                        <div className="flex items-center gap-4 h-14">
                            {
                                variations && variations.map(({ color }, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleOnColor(color)}
                                        className={`rounded-full p-[1.25vh] ${selectedColor !== color && 'hover:outline hover:outline-gray-400 hover:outline-2 hover:outline-offset-[0.5vh]'} ${selectedColor === color ? "outline outline-2 outline-offset-[0.5vh]" : ""}`}
                                        style={{ background: `${color}` }}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="pb-6 mb-8 border-b border-gray-700">
                        <h2 className="mb-2 text-xl font-bold">
                            Size</h2>
                        <div className="flex flex-wrap -mb-2">
                            {
                                variationSizes && variationSizes.map(({ size }, i) => (
                                    <button
                                        onClick={() => handleOnSize(size)}
                                        className={`py-1 mb-2 mr-1 border w-11 border-gray-300 ${selectedSize !== size ? "hover:text-gray-600 hover:border-gray-500" : ""} ${selectedSize === size ? "text-white border-gray-700 bg-gray-700" : ""} text-gray-400 uppercase text-xl`}>{size}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center ">
                        <div className="mb-4 mr-4 lg:mb-0">
                            <div className="w-28">
                                <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                    <button
                                        onClick={() => updateCount(-1)}
                                        className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:text-gray-700  hover:bg-gray-300">
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="number"
                                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none focus:outline-none text-md hover:text-black"
                                        placeholder="1"
                                        value={count}
                                        onChange={(e) => setCount(parseInt(e.target.value) || '')}
                                    />
                                    <button
                                        onClick={() => updateCount(1)}
                                        className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 mr-4 lg:mb-0">
                            {
                                <button
                                    onClick={handleOnCart}
                                    disabled={variationQty === 0}
                                    className={`w-full px-20 h-10 p-2 mr-4 border ${variationQty === 0 ? 'border-gray-400 bg-gray-400 text-gray-600 cursor-not-allowed' : 'border-blue-600 bg-blue-600 text-gray-50 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600'} transition-all duration-500 uppercase`}>
                                    {loading ? "adding to cart" : success ? "added to cart" : "add to cart"}</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
