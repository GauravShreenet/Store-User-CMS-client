import React, { useState } from 'react'
import Slider from 'react-slick'

export const CustomVertical = ({ variationImages, onImageSelect }) => {

    const PrevArrow = (props) => <div />;
    const NextArrow = (props) => <div />;

    const [selectedImg, setSelectedImg] = useState(null)

    const handleImgClick = (image) => {
        setSelectedImg(image)
        onImageSelect(image)
    }

    let setting = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        waitForAnimate: false,
        focusOnSelect: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }
    return (
        <div>
            <Slider {...setting} className="w-[30vh]">
                {
                    variationImages?.map((images, i) => (
                        <div key={i} className='h-[28vh] my-[1vh]' onClick={() => handleImgClick(images)}>
                            <img src={images} alt={`Image ${i}`} className={`object-fit mx-2 h-full ${selectedImg !== images && "hover:outline hover:outline-gray-400 hover:outline-2 hover:outline-offset-[0.75vh]"} ${selectedImg === images ? "outline outline-gray-600 outline-2 outline-offset-[0.75vh]" : ""} `}/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
