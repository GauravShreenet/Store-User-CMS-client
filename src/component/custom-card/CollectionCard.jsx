import React from 'react'
import { Link } from 'react-router-dom'

export const CollectionCard = ({ title, slug }) => {
    return (
        <div>
            <Link to={`/collections/${slug}`}>
                <div
                    className="max-w-md mx-[1vh] bg-white shadow-lg overflow-hidden rounded-md hover:cursor-pointer">
                    <img
                        className="object-fit w-full h-[50vh] sm:h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[42vh]"
                        src=""
                        alt="Card Image"
                    />
                </div>
            </Link>
            <div className="p-6">
                <h2 className="text-sm font-bold">{title}</h2>
            </div>
        </div>
    )
}
