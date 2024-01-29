import React from 'react'
import { CustomCard } from '../custom-card/CustomCard'
import Slider from 'react-slick'
import { NextArrow } from '../slider-button/NextArrow';
import { PrevArrow } from '../slider-button/PrevArrow';

export const CustomSlider = ({ products }) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        intialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='mx-10'>
            <Slider {...settings}>
                {products?.map((itm, i) => (
                    <div key={i} className=''>
                        <CustomCard {...itm} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
