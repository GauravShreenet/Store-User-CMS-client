import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer';

export const MainLayout = ({ children, title, heroImage }) => {
    return (
        <>
            <NavBar />
            <div className='h-[50vh]'>
                <div className='w-full h-[50vh] relative'>
                    <img src={heroImage} alt="HeroImg" className='object-cover h-[50vh] w-full' />
                    <div className='flex justify-center' style={{ position: 'absolute', top: '50%', width: '100%' }}>
                        <h3 className='text-4xl text-center font-bold uppercase text-white'>{title}</h3>
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}
