import React from 'react'
import { MainLayout } from '../../component/layout/MainLayout'
import heroImg from '../../assets/background1.svg';

const Home = () => {
  return (
    <MainLayout>
      <div>
        <img src={heroImg} alt="hero image" />
      </div>
    </MainLayout>
  )
}

export default Home