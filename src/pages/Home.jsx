import React from 'react'
import Notification from '../components/Notification'
import Navigation from '../components/Navigation'
 import MySlider from '../components/Slider'
import Footer from '../components/Footer'
import News from '../components/News'
import Banner from '../components/Banner'
import Values from "../components/Values";
import Blog from '../components/Blog'
import BannerGrid from '../components/BannerGrid'
import ProductCard from '../components/ProductCard'
import Cart from './Cart'
const Home = () => {

  return (
   
    <div className='bg-white'>
         <Navigation /> 
         {/* <Cart /> */}
          <MySlider /> 
         <BannerGrid />
         <ProductCard />
       
         <Banner />
         <Blog />
         <Values />
         <News />
         <Footer />  
         

         </div>
      
   
  )
}

export default Home
