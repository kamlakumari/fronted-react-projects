import React from 'react'
import Nevbar from './componants/Nevbar'
import Home from './componants/Home'
import Aboutm from './componants/Aboutm'
import Portfolio from './componants/Portfolio'
import Myknow from './componants/Myknow'
import Contact from './componants/Contact'
import Footer from './componants/Footer'
import { Toaster } from "react-hot-toast"
function App() {
  return (
    <>
    <div>
    <Nevbar />
      <Home />
      <Aboutm />
      <Portfolio />
      <Myknow />
      <Contact/>
      <Footer />
    </div>
     <Toaster />
    </>
  )
}

export default App

