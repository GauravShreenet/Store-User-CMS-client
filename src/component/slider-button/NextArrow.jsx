import React from 'react'
import { SlArrowRight } from "react-icons/sl";

export const NextArrow = (props) => {
  const { onClick } = props;
    return (
      <div
        className='absolute top-[35%] right-[2vh] z-10 transition-transform transform hover:translate-x-4'
        style={{ display: 'block', width: '40px', height: '40px' }}
        onClick={onClick}
      >
        <SlArrowRight className='text-[5vh] hover:cursor-pointer'/>
      </div>
  )
}
