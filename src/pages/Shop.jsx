import React from 'react'
import NotificationBar from '../components/Notification'
import Navigation from '../components/Navigation'
import shop from '../assets/shop.png'
import { useContext } from 'react'
import { IoFilterOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import ProductCard from '../components/ProductCard';
import {Provider,Global} from '../components/context/Productcontext'
const Shop = () => {
    //    const [product, setProduct] = useContext(Global)
  return (
  
    <div>

        <Navigation />
        <div className='w-[1440px] h-[392px] flex flex-center ml-40'>
        <img  src={shop} />

        </div>
        <div className=' m-20 flex justify-between flex-row gap-5'>
        <div flex flex-row m-2 items-center>
            <div className='flex flex-row items-center'>
        <IoFilterOutline text-5xl />
        <h1 className='ml-1'>Filter</h1>
        </div>
        <div>
            <h4>Categories</h4>
            <ul className='list-none h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
                <li className='mb-3'>All Rooms</li>
                <li className='mb-3'>All Rooms</li>
                <li className='mb-3'>All Rooms</li>
                <li className='mb-3'>All Rooms</li>
                <li className='mb-3'>All Rooms</li>
                <li className='mb-3'>All Rooms</li>
                <li className='mb-3'>All Rooms</li>
            </ul>


        </div>
        <div>

        </div>

        </div>
       
        <h3>Living Room</h3>
        <div className='flex flex-row justify-center'>
            <h3 className='px-1 py-1' >Sort by</h3>
            <FaChevronDown className='ml-1 px-1 py-1 text:2xl' />
            <BsFillGrid3X3GapFill className='px-1 py-1 text:2xl' />
            <TfiLayoutGrid2Alt className='px-1 py-1 text:2xl' />
            <CiGrid2V className='px-1 py-1 text:2xl' />
            <CiGrid2H className='px-1 py-1 text:2xl'/>
       
        </div>

        </div>
        
        <div className='mx-20 my-20 flex flex-col'>
        <h2>Price</h2>
            
            <ul className='list-none'>
              
                     <li>All Prices</li>
                    <li>All Prices</li>
                    <li>All Prices</li>
                    <li>All Prices</li>
                    <li>All Prices</li>
                    <li>All Prices</li>
               

            </ul>

        </div>
        {/* <ProductCard /> */}
        
        
        

       
      
    </div>
  
  )
}

export default Shop


