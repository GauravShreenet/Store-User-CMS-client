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
        <div>
            <div
                className="max-w-md mx-[1vh] bg-white shadow-lg overflow-hidden rounded-md hover:cursor-pointer">
                <img
                    className="object-fit w-full h-[50vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[62vh]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    src={isHovered && images.length > 0 ? images[currentImageIndex] : thumbnail}
                    alt="Card Image"
                />
                <div className="p-6">
                    <h2 className="text-sm font-bold">{name}</h2>
                    <p className="text-gray-700 mb-4">${price}</p>
                </div>
            </div>
        </div>
    );
};
