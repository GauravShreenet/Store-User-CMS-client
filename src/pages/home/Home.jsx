import React, { useEffect, useRef } from 'react'
import { MainLayout } from '../../component/layout/MainLayout'
import heroImg from '../../assets/backhero.jpg';
import heroLogo from '../../assets/herologo.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NewCollection } from '../../component/home/NewCollection';
import { Categories } from '../../component/home/Categories';
import { useDispatch } from 'react-redux';
import { getCartItems } from '../product-landing/cartItemAction';
import { NavBar } from '../../component/layout/NavBar';
import { Footer } from '../../component/layout/Footer';


const Home = () => {
  
  const targetRef = useRef(null);
  const dispatch = useDispatch()
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.3]);
  
  useEffect(()=>{
    dispatch(getCartItems())
  },[dispatch])

  return (
    <>
    <NavBar />
      <div className=' h-[180svh]'>
        <div className='overflow-hidden sticky top-0'>
          <motion.div style={{ scale: scale }}>
            <div ref={targetRef} className='w-full h-[90vh] relative'>
              <img src={heroImg} alt="hero image" className='w-full h-full object-cover' />
              <div className='flex justify-center h-[65vh]' style={{ position: 'absolute', top: '16%', width: '100%' }}>
                <img src={heroLogo} alt='' />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='flex justify-center items-center my-20'>
        <div className='text-center w-[68vh] text-lg w-full '>
          <h2 className='text-4xl font-bold'>Discover Your Style with BGS</h2>
          <p className='my-10 mx-5'>Explore the latest trends at your fingertips! BGS brings you curated fashion for all occasions. Effortless shopping, exclusive offers, and global delivery.</p>
          <span className='uppercase underline hover:no-underline hover:text-blue-500 cursor-pointer font-bold'>read more</span>
        </div>
      </div>
      <NewCollection />
      <Categories />
    <Footer />
    </>
  )
}

export default Home