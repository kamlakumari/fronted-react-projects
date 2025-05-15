import React from 'react'
import NevBar from '../Components/NevBar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <NevBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout