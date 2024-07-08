import React, { useContext } from 'react'
import Notification from '../components/Notification'
import Navigation from '../components/Navigation'
import { useParams } from 'react-router-dom'
import table from '../assets/table.png'
import home from '../assets/home.jpeg'
import BreadCrumbs from '../components/BreadCrumbs'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useReducer } from 'react'
import { Provider } from '../components/context/Productcontext'
import { Appcontext } from '../components/context/Productcontext'
import { Global } from '../components/context/Productcontext'
import Slidera from '../components/Slidera'
import ProductLoop from '../components/ProductLoop'
import { Rating,Button, Textarea } from "flowbite-react";
 
const Product = () => {
  const [starsFilled, setStarsFilled] = useState([false, false, false, false, false]);

  const stary=(index) => {
    const newStarsFilled = [...starsFilled]; // Copy the array
    newStarsFilled[index] = !newStarsFilled[index]; // Toggle the clicked star
    setStarsFilled(newStarsFilled); // Update the state

  }
 
  
 const {mytest}=useContext(Appcontext)
    const {id}=useParams()
    const images=[
      table,
      //  home
       table,
      // home
    ]
    
   
    
  return (
    <>
    
    {mytest}
    
    <Navigation />
    <BreadCrumbs />
    <div className='flex flex-row'>
      <div className='flex-1 top-0'>
      <Slidera classname=""images={images} />
    
    
    </div>
    <div className='flex-1'>
    <div className='flex flex-col gap-9 text-blod text-5xl'>Tray Table</div>
    <Rating className='mt-5'>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
    <p className='pr-[160px]'>
    Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.
    </p>
    <div className='mb-4 flex gap-[10px]'>
    <div className='bg-gray-200 w-[127px] flex items-center'>
      <button className='bg-transparent hover:cursor-pointer pl-11'>-</button>
      <p>1</p>
      <button className='bg-transparent hover:cursor-pointer'>+</button>

    </div>
    <Button className='w-[357px]' outline gradientDuoTone="tealToLime">
       WishList
      </Button>

    </div>
    <Button className="bg-black w-[504px] hover:cursor-pointer">
      Add to Cart
    </Button>
    </div>
   
    </div>

   
    

  
    {/* <div>
  <img src={table} className='ml-5 mt-5 w-[50px] h-[30px] md:ml-2 mt-2 w-[300px] md:h-[414px] lg:ml-2 lg:mt-2 lg:w-[547px] lg:h-[728px]'></img>
</div>
<div className='flex flex-row gap-2 mt-1'>
  <img src={table} className='w-[167px] h-[167px]' />
  <img src={home} className='w-[167px] h-[167px]' />
  <img src={table} className='w-[167px] h-[167px]' />

</div> */}

<div className='flex justify-between gap-11'>
  <span>Additional Info</span>
  <span>Questions</span>
  <span>Reviews</span>

</div>
<div className='ml-[500px]'>
  customer reviews
</div>
<div className='ml-[500px] mt-5 flex mb-5'>
  <p className='mr-4'>How do you rate this product out of 5?</p>
      {starsFilled.map((filled, index) => (
        <Rating key={index} className='flex flex-row gap-10'>
          <Rating.Star
            filled={filled}
            onClick={() => stary(index)}
            className='hover:cursor-pointer'
          />
          
       
        </Rating>
      ))}
    </div>
{/* <div class="flex">
  <textarea class="w-[1120px] ml-20 p-4 border border-gray-300 rounded-lg resize-none"></textarea>
  <button class="ml-4 px-4 py-2 bg-black text-white rounded-lg h-[40px]">Write Review</button>
</div> */}

<div class="relative flex">
  <textarea class="w-[1120px] h-[72px] p-4 ml-[150px] border border-gray-300 rounded-lg resize-none"></textarea>
  <button class="absolute top-0 right-0 mt-10 mr-[200px] bg-black text-white rounded-lg h-[40px w-[216px] p-2">Write Review</button>
</div>





    </>
  )
}

export default Product
