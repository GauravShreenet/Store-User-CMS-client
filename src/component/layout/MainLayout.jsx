import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer';

export const MainLayout = ({children}) => {
  return (
    <>   
        <div className='h-dvh'>
        <NavBar />
            {children}
        </div>
        <Footer />
    </>
  )
}
