import React, { useRef, useState } from 'react'
import logo from '../../assets/logo.png';
import { motion, useScroll } from 'framer-motion';

export const NavBar = () => {

  const [colorChnage, setColorChange] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 80) {
      setColorChange(true)
    }else{
      setColorChange(false)
    }
  }
  
  window.addEventListener('scroll', changeColor)
  
  return (
    <div className={`text-white px-12 py-5 fixed top-0 left-0 right-0 z-10 ${colorChnage ? 'bg-gray-900 transition-all duration-800' : 'bg-transparent'}`}>
        <div className='w-32 sm:w-32 md:w-32 lg:w-36 xl:w-40 2xl:w-48'>
            <img src={logo} alt="logo" />
        </div>
        
        <div>

        </div>
    </div>
  )
}
