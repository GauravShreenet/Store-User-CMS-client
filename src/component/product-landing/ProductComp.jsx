import React, { useEffect, useState } from 'react'
import { CustomVertical } from '../custom-slider/CustomVertical';

export const ProductComp = ({ selectedProduct }) => {

    const [selectedColor, setSelectedColor] = useState('')
    const [selectedImg, setSelectedImg] = useState(null)

    const { name, sku, price, description, variations } = selectedProduct || {}

    useEffect(() => {
        // Reset selected color to the first color in variations when variations changes
        setSelectedColor(variations?.length > 0 ? variations[0].color : '');
    }, [variations]);

    const handleOnColor = (color) => {
        setSelectedColor(color)
    }

    const handleOnImgSelect = (image) => {
        setSelectedImg(image)
    }

    const variation = variations && variations.find((variation) => variation.color === selectedColor) || {};

    const variationThumbnail = variations && variation.thumbnail
    const variationSizes = variations && variation.sizes
    const variationImages = variations && variation.images


    return (
        <section className="py-20 bg-[#F4F4F4] font-poppins">
            <div className='flex justify-around'>
                <div className="flex gap-10">
                    <div className='h-[40vh] w-[30vh]'>
                        {
                            <CustomVertical variationImages={variationImages} onImageSelect={handleOnImgSelect} />
                        }
                    </div>
                    <div className="mb-6 lg:mb-10 h-[85vh] w-[60vh] mt-[1vh]">
                        <img src={selectedImg ? selectedImg : variationThumbnail}
                            alt="" className="object-fit w-full h-full " />
                    </div>
                </div>
                <div className='-ms-[25vh]'>
                    <div className="pb-6 mb-8 border-b border-gray-700">
                        <span className="text-lg font-medium text-rose-500">New</span>
                        <h2 className="max-w-xl mt-2 mb-2 text-xl font-bold md:text-4xl uppercase text-center">
                            {name}
                        </h2>
                        <h4 className='max-w-xl mt-2 mb-2 text-l md:text-l text-gray-400 uppercase text-center'>
                            sku: {sku}
                        </h4>
                        <div className="flex flex-wrap items-center mb-6">
                            <ul className="flex mb-4 mr-2 lg:mb-0">
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
                            {description}
                        </p>
                        <div className="p-4 mb-8 border border-gray-700">
                            <h2 className="mb-4 text-xl font-semibold">Real time <span
                                className="px-2 bg-blue-500 text-gray-50">26</span>
                                visitors right now! </h2>
                            <div className="mb-1 text-xs font-medium text-gray-700">
                                Hurry up! left 23 in Stock
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}>
                                </div>
                            </div>
                        </div>
                        <p className="inline-block text-2xl font-semibold text-gray-700">
                            <span className='text-4xl'>${price}.00</span>
                            {/* <span
                                        className="text-base font-normal text-gray-500 line-through">${price}</span> */}
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
                                        className="py-1 mb-2 mr-1 border w-11 border-gray-300 hover:text-gray-600 hover:border-gray-500 text-gray-400 uppercase">{size}
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
                                        className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:text-gray-700  hover:bg-gray-300">
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="number"
                                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none focus:outline-none text-md hover:text-black"
                                        placeholder="1" />
                                    <button
                                        className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 mr-4 lg:mb-0">
                            <button
                                className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                                Buy Now</button>
                        </div>
                        <div className="mb-4 mr-4 lg:mb-0">
                            <button
                                className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-cart" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>
                        <div className="mb-4 lg:mb-0">
                            <button
                                className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className=" bi bi-heart" viewBox="0 0 16 16">
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
