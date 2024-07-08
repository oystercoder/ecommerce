import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Notification from './components/Notification'
import Signup from './pages/Signup'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Account from './pages/Account'
import Blog from './pages/Blog'




function App() {
 

  return (
    <>
    < BrowserRouter>
    <Notification />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/shop' element={<Shop />} />
      
      <Route path="/product/:id" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={<Account />} />
      <Route path="/blog" element={<Blog />} />
      

   
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
