 import React, { useState } from 'react'
 import { HiOutlineMenu } from "react-icons/hi";
 import shop from '../assets/shopping bag.png'
 import { CiSearch } from "react-icons/ci";
 import { HiOutlineUserCircle } from "react-icons/hi";
 import { FiMenu } from "react-icons/fi";
 import Notification from '../components/Notification'
 import { IoMdClose } from "react-icons/io";
 import { Link } from 'react-router-dom'; 
 import HandleMenu from './HandleMenu.jsx';



 


  




const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  return (
   <>
   
    
    <header className="h-[60px] self-stretch bg-{background} flex flex-row items-between justify-center pt-[16px] px-5 box-border  top-[0] sticky max-w-full text-center text-5xl text-black font-caption-2-bold md:gap-[70px] sm:gap-[35px] lg:gap-[140px]">
      
      <div className="flex flex-col items-start justify-start pt-0.5 px-0">
        <div className=" flex flex-row items-start justify-between">
        {/* onClick={()=>{console.log("button clicked")}} */}
       
        <button  onClick={toggleMenu} className="flex flex-row items-start justify-between bg-transparent text-5xl md:hidden " >
          {/* {handleMenu()} */}
      
          <FiMenu className="text-black" />
          
          {/* <FiMenu  className="text-black" /> */}
          {/* <HandleMenu /> */}
          
          
         
        </button>
        



        
        

          <div className="ml-10 relative text-inherit leading-[24px] font-medium font-inherit">
            <span>3legant</span>
            <span className="text-neutral-04-100">.</span> 
          </div>
        </div>
      </div>
      <div className="w-[324px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-left text-sm text-neutral-04-100 font-button-xsmall">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="hidden md:flex flex-row items-center  text-neutral-07-100">
          
              <div className="flex flex-row items-center gap-[4px]">
                
                <div className=" relative leading-[24px] font-medium  min-w-[38px]">
                  <a className="  hover:text-slate-500 text-black" href="/">
                  Home
                  </a>
                </div>
              
            </div>
          </div>
          <div className="hidden md:flex flex-row items-center justify-start gap-[4px]">
            
               
                <div className="  relative leading-[24px] font-medium  min-w-[35px]">
                  <a  className="hover:text-slate-500 text-black"href="/shop" >
                  Shop
                  </a>
               
             
            </div>
          </div>
          <div className="hidden md:flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[2px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="h-[18px] w-[18px] relative hidden"
                  alt=""
                  src="/iconarrowright1.svg"
                />
                <div className= " mq450:relative leading-[24px] font-medium  min-w-[55px]">
                  <a className="hover:text-slate-500 text-black" href="/product/id">
                  Product
                  </a>
                </div>
              </div>
            
            </div>
          </div>
          <div className="hidden md:flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className=" relative leading-[24px] font-medium inline-block min-w-[76px] whitespace-nowrap">
                  <a className=" md:hover:text-slate-500 text-black" href="/contact">

                  Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
          
     
      
      <div className="w-[130px] flex flex-row items-start justify-start gap-[16px] text-xs text-white font-caption-1">
      <div className='hidden md:left-2 m-3'>
          <CiSearch className=' text-black text-5xl' />
          </div>
     
     
       
       
        <div className="hidden md:flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        
          <HiOutlineUserCircle className='text-black text-5xl' />
         
        </div>
        <div className="right-2 md:flex-1 flex flex-row items-start justify-start py-0.5 pr-0 pl-px gap-[5px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src={shop}
          /> 
        
        </div>
      </div>
    </header>
    {isMenuOpen && (
      <>
        <div className='top-0 bg-gray-600 w-full h-[600px] opacity-10 backdrop-blur-xl md:hidden'>

          
        </div>
      <div className=' bg-green w-[343px] h-[812px] md:hidden top-0'>
        <div className='flex justify-between'>
           <div className='leading-[24px] pl-2'>3legant</div>
           <div>close</div>

         </div>

       </div>
      </>
        
      )}
    </>
  );
};

 export default Navigation
