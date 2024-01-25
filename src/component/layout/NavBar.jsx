import React from 'react'
import logo from '../../assets/logo.png';

export const NavBar = () => {
  return (
    <div className='text-white px-12 py-5 bg-black'>
        <div className='w-36'>
            <img src={logo} alt="logo" />
        </div>
    </div>
  )
}
