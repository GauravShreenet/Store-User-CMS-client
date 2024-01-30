import React from 'react'

export const CollectionCard = ({ title }) => {
    return (
        <div>
            <div
                className="max-w-md mx-[1vh] bg-white shadow-lg overflow-hidden rounded-md hover:cursor-pointer">
                <img
                    className="object-fit w-full h-[50vh] sm:h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[42vh]"
                    src=""
                    alt="Card Image"
                />
            </div>
            <div className="p-6">
                    <h2 className="text-sm font-bold">{title}</h2>
            </div>
        </div>
    )
}
