import React, { useState } from 'react'
import r from '../assets/ticket-percent.svg'
import close from '../assets/close.png'
import k from '../assets/arrow-right.png'
import { HiOutlineUserCircle } from "react-icons/hi";
import HandleMenu from './HandleMenu';
import Shop from '../pages/Shop';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const NotificationBar = () => {
  const HandleClick=()=>{
    navigate('/shop');

  }
  const navigate = useNavigate();
  const [visible,isVisible]=useState(true);
  const run=()=>{
    isVisible(false);


  }
  return (
    <>
    {visible && (
     <div className="Notification bg-neutral-02-100 flex flex-row w-[500px] xs:min-w-full h-[40px] items-center justify-between gap-20 text-center text-sm text-darkslategray-200 font-caption-1 ">
      <div className="flex flex-row items-start justify-center ">
        <div className=" md:ml-[524px] flex flex-row items-center justify-center gap-[12px]">
          <img
            className=" mx-9 h-6 w-6 relative min-h-[24px]"
          
            src={r}
          />
          <div className="relative leading-[22px] text-nowrap text-sm md:text-xl font-semibold">{`30% off storewide — Limited time! `}</div>
        </div>

          <button className="  mq450:display cursor-pointer mq450:border-none p-0 bg-transparent flex flex-row items-center justify-center border-b-1 border-solid border-blue">
  <div className="flex flex-row items-center justify-start gap-4">
    <div  onClick={HandleClick} className="hidden sm:inline sm:ml-4 text-sm md:text-xl leading-24px font-medium font-caption-1 text-blue text-left  min-w-69px underline">
      Shop Now
    </div>
    <img
      className="h-18px w-18px relative"
      alt=""
      src={k}
    />
        
  </div>
</button>

       


      </div>
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 hover:cursor-pointer">
        <img onClick={run} 
          className="hover:pointer-cursor w-5 h-5 relative object-cover"
          loading="lazy"
          alt=""
          src={close}
        />
      </div>
    </div>
    )}
    </>
)};

// import React, { useState } from 'react';
// import r from '../assets/ticket-percent.svg';
// import close from '../assets/close.png';
// import k from '../assets/arrow-right.png';
// import { HiOutlineUserCircle } from "react-icons/hi";
// import HandleMenu from './HandleMenu';
// import Shop from '../pages/Shop';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const NotificationBar = () => {
//   const navigate = useNavigate();
//   const [visible, isVisible] = useState(true);
//   const handleClick = () => {
//     navigate('/shop');
//   };
//   const run = () => {
//     isVisible(false);
//   };

//   return (
//     <>
//       {visible && (
//         <div className="Notification bg-white py-4 px-6 flex flex-row items-start w-full justify-between gap-20 text-center text-sm text-gray-600 font-caption-1 mq450:w-[500px] mq450:pl-5 mq750:pl-262 mq750:w-full mq750:box-border">
//           <div className="flex flex-row items-start justify-center gap-[12px] max-w-[full] mq450:flex-wrap">
//             <div className="flex flex-row items-center justify-center gap-[12px]">
//               <img className="h-6 w-6 relative min-h-[24px]" src={r} />
//               <div className="relative leading-[22px] font-semibold">30% off storewide — Limited time!</div>
//             </div>
//             <button className="mq450:display cursor-pointer border-none p-0 bg-transparent flex flex-row items-center justify-center border-b-1 border-solid border-blue">
//               <div className="flex flex-row items-center justify-start gap-4">
//                 <div onClick={handleClick} className="text-sm leading-24px font-medium font-caption-1 text-blue text-left inline-block min-w-69px underline">Shop Now</div>
//                 <img className="h-18px w-18px relative" alt="" src={k} />
//               </div>
//             </button>
//           </div>
//           <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 hover:cursor-pointer">
//             <img onClick={run} className="hover:pointer-cursor w-5 h-5 relative object-cover" loading="lazy" alt="" src={close} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };


 export default NotificationBar;
