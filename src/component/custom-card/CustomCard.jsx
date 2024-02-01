import React, { useState, useEffect } from 'react';

export const CustomCard = ({ thumbnail, name, price, images }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let intervalId;

        const handleImageChange = () => {
            if (isHovered && images.length > 1) {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        };

        if (isHovered) {
            intervalId = setInterval(handleImageChange, 700); 
        } else {
            setCurrentImageIndex(0);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isHovered, images.length]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='bg-white max-w-md mx-[0.5vh] shadow-lg rounded-lg mb-10'>
            <div className="w-full h-[85vw] sm:h-[50vw] md:h-[30vw] lg:h-[30vw] xl:h-[30vw] 2xl:h-[30vw] 2xl:w-full hover:cursor-pointer">
                <img
                    className="object-fit w-full h-full"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    src={isHovered && images.length > 0 ? images[currentImageIndex] : thumbnail}
                    alt="Card Image"
                />
            </div>
            <div className="p-4">
                    <h2 className="text-sm font-bold">{name}</h2>
                    <p className="text-gray-700">${price}</p>
            </div>
        </div>
    );
};
