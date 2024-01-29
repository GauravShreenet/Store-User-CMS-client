import React from 'react'
import { SlArrowLeft } from "react-icons/sl";

export const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='absolute top-[35%] left-[2vh] z-10 transition-transform transform hover:-translate-x-4'
        style={{ display: 'block', width: '40px', height: '40px' }}
        onClick={onClick}
      >
        <SlArrowLeft className='text-[5vh] hover:cursor-pointer'/>
      </div>
  )
}
