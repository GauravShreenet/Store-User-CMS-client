import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CustomCard = ({ thumbnail, name, price, slug, variations }) => {

    const [selectedColor, setSelectedColor] = useState('')

    useEffect(() => {
        // Reset selected color to the first color in variations when variations changes
        setSelectedColor(variations.length > 0 ? variations[0].color : '');
    }, [variations]);

    const handleOnColor = (color) => {
        setSelectedColor(color)
    }

    const variation = variations.find((variation) => variation.color === selectedColor) || {};
    const variationThumbnail = variation.thumbnail

    return (
        <div className='bg-white max-w-md mx-[0.5vh] shadow-lg rounded-lg mb-10'>
            <Link to={`/products/${slug}`}>
                <div className="w-full h-[100vw] sm:h-[45vw] md:h-[50vw] lg:h-[30vw] xl:h-[30vw] 2xl:h-[30vw] 2xl:w-full hover:cursor-pointer">
                    <img
                        className="object-fit w-full h-full"
                        src={variationThumbnail}
                        alt="Card Image"
                    />
                </div>
            </Link>
            <div className='flex justify-between'>
                <Link to={`/products/${slug}`}>
                    <div className="p-4">
                        <h2 className="text-md uppercase">{name}</h2>
                        <p className="text-gray-700">${price}</p>
                    </div>
                </Link>
                <div className="flex items-center justify-center gap-3 h-[12vh] mx-5">
                    {
                        variations.map(({ color }, i) => (
                            <button
                                key={i}
                                onClick={() => handleOnColor(color)}
                                className={`rounded-full p-[1.25vh] ${selectedColor === color ? "outline outline-2 outline-offset-[0.5vh]" : "" }  `}
                                style={{ background: `${color}` }}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    );
};
