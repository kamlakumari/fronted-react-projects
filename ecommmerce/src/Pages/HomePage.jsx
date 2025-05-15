import React from 'react'
import HeroSection from '../Components/HeroSection'
import IconCards from '../Components/IconCards'
import NevBar from '../Components/NevBar'
import Cart from '../Components/Cart'
import Poster from '../Components/Poster'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
      {/* <NevBar/> */}
      <HeroSection />
      <IconCards />
      <div>
        <h1  className='font-bold mx-auto p-12 text-xl'>New Products</h1>
        <div className='flex justify-evenly'>
            <Cart />
            <Cart />
            <Cart />
        </div> 

        <h1  className='font-bold mx-auto p-12 text-xl'>Old Products</h1>
        <div className='flex justify-evenly'>
       <Cart />
       <Cart />
       <Cart />
        </div>
      </div>
     <Poster/>
     {/* <ProductDescription/> */}
     {/* <Footer/> */}


    </div>
  )
}

export default HomePage
