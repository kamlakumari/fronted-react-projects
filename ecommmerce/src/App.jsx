import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Poster from './Components/Poster'
import HomePage from './Pages/HomePage'
import MobilesPage from './Pages/MobilePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
import ProductDescription from './Components/ProductDescription'
import Checkout from './Pages/Checkout'
import SignUp from './Pages/SignUp'
import WhisList from './Components/WhisList'
import WhisListPage from './Pages/WhisListPage'
import FAQ from './Pages/FAQ'
import Returns from './Pages/Returns'
import OrderTracking from './Pages/OrderTracking'
import AddToCart from './Components/AddToCart'
import ProductProvider from './services/ProductContextApi'





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <ProductProvider>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={< SignUp/>}/>
      <Routes>
        
      <Route element={<MainLayout/>}>
      
      
     
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/productDesc' element={<ProductDescription/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/wishlist' element={<WhisListPage/>}/>
      <Route path='/mobile' element={<MobilesPage/>}/>
      <Route path= '/addtocart' element={<AddToCart/>}/>
      <Route path= '/contact' element={<Checkout/>}/>
      <Route path= '/faq' element={<FAQ/>}/>
      <Route path= '/returns' element={<Returns/>}/>
      <Route path= '/ordertracking' element={<OrderTracking/>}/>
      



      </Route>
     </Routes>
     </ProductProvider>
    
     </BrowserRouter> 
     
     
    </>
  )
}

export default App
