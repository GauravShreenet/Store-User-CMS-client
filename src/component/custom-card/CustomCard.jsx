import React from 'react'

export const CustomCard = ({ thumbnail, name, price, categories }) => {
    return (
        <div>
            {
                categories ? (<div className="max-w-md mx-auto bg-white shadow-lg overflow-hidden rounded-md">
                    <div className="p-6">
                        <h2 className="text-sm font-bold">Item Title</h2>
                        <p className="text-gray-700 mb-4">Card content goes here.</p>
                    </div>
                </div>) : (<div className="max-w-md mx-[1vh] bg-white shadow-lg overflow-hidden rounded-md">
                    <img className="object-fit w-full h-[50vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[62vh]" src={import.meta.env.VITE_ROOT_IMAGE + thumbnail} alt="Card Image" />
                    <div className="p-6">
                        <h2 className="text-sm font-bold">{name}</h2>
                        <p className="text-gray-700 mb-4">${price}</p>
                    </div>
                </div>)
            }
        </div>
    )
}
