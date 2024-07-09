import React, { useState } from 'react'
import imageh from '../assets/home.jpeg'
import slider from '../assets/Paste image.png'
import k from '../assets/arrow-left.png'
import right from '../assets/arrow-right.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftbutton from '../assets/leftbutton.png'
import rightbutton from '../assets/rightbutton.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaArrowAltCircleLeft } from "react-icons/fa";


// // const Slider = () => {
// //   return (
// //     <div>
   
   
// //    {/* <img className="w-10 h-12 sm:w-311 h-304 md:w-1120 h-536" src={imageh} alt="mistake" /> */}
// //    {/* <img className="w-1000 h-100 sm:w-311 sm:h-304 md:w-88 h-88" src={imageh} alt="Description of the image" /> */}
 



        
// //         <div className="font-poppins text-6xl font-medium leading-76 tracking-tighter text-left">
// //   Simply Unique/
// //   Simply Better.
// // </div>
// // <div className="font-inter text-base font-semibold leading-26 text-left my-4">
// // 3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
// // </div>
// // </div>



      
    
// //   )
// // }


// const CustomPrevArrow = (props) => (
//   <div {...props}>
//     <IoIosArrowBack className="text-red-300" />
//   </div>
// );

// const CustomNextArrow = (props) => (
//   <div {...props}>
//     <IoIosArrowForward className="text-red-300" />
//   </div>
// );



// const MySlider= () => {
//   const [curr,Newcurr]=useState(0)
//   const settings = {
//     dots: true,
//     infinite: true,

//     slidesToShow: 1,
//     slidesToScroll: 1,
    
//     prevArrow: <CustomPrevArrow />,
//   nextArrow: <CustomNextArrow />,
//   };

//   return (
   
    
    
//      <section className=" pt-0 px-5 pb-10 box-border gap-[32px]  text-left text-53xl  text-neutral-07-100 font-caption-2-bold mq750:gap-[16px]"> 
//      <Slider className='text-red-500 '{...settings} >
//       <img className="  w-[311px] h-[304px] md:w-[1120px] md:h-[536px] display:inline-block" src={slider} />
//       <img className="  w-[311px] h-[304px] md:w-[1120px] md:h-[536px] display:inline-block" src={slider} />
//       <img className="  w-[311px] h-[304px]  md:w-[1120px] md:h-[536px] bg-red-400display:inline-block  " src={slider}  />
//       </Slider>
//       {/* <Slider className='text-red-500'{...settings}>
//       <div className="w-full flex flex-col items-center justify-center pt-0 px-[160px]  pb-[40px]  min-h-[261px] max-w-full">
//           <img className=" mx-auto w-[1120px] h-[536px] mq450:w-[48] h-[304px] " src={slider} />
//         </div>
//         <div className="w-full flex flex-col items-center justify-center pt-0 px-[160px]  pb-[40px]  min-h-[261px] max-w-full">
//           <img className=" mx-auto w-[1120px] h-[536px] mq450:w-[48] h-[304px] " src={slider} />
//         </div>
//         <div className="w-full flex flex-col items-center justify-center pt-0 px-[160px]  pb-[40px]  min-h-[261px] max-w-full">
//           <img className=" mx-auto w-[1120px] h-[536px] mq450:w-[48] h-[304px] " src={slider} />
//         </div>
     
       
      
//         </Slider> */}
//         <div className="flex flex-row items-start justify-start gap-[16px] z-[1] ml-[-566px]">
//           <div className="h-2 w-[30px] relative">
//             <div className="absolute top-[0px] left-[0px] rounded-81xl bg-neutral-01-100 w-full h-full" />
//           </div>  
          
//           <img
//             className="h-2 w-2 relative "
//             alt=""
//             src="/elementsnavigation-dots.svg"
//           />
//         </div> 
      
       
       

        
      
//       <div className=" flex flex-row items-start justify-start gap-[24px] max-w-full xl:flex-wrap">
//         <h1 className="m-0 flex-1 relative text-inherit tracking-[-2px] leading-[76px] font-medium font-inherit inline-block min-w-[418px] max-w-full mq750:min-w-full mq1050:text-39xl mq1050:leading-[61px] mq450:text-24xl mq450:leading-[46px]">
//           <p className="m-0">
//             <span>Simply Unique</span>
//             <span className="text-neutral-04-100">/</span>
//           </p>
//           <p className="m-0">
//             <span>Simply Better</span>
//             <span className="text-neutral-04-100">.</span>
//           </p>
//         </h1>
//         <div className="w-[453px] flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border min-w-[453px] max-w-full text-base text-darkslategray-200 font-caption-1 mq750:min-w-full mq1050:flex-1">
//           <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[29px] pl-0 box-border max-w-full">
//             <div className="flex-1 relative leading-[26px] inline-block max-w-full">
//               <span className="font-semibold">{`3legant `}</span>
//               <span className="text-neutral-04-100">{`is a gift & decorations store based in HCMC, Vietnam. Est since 2019. `}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//        </section>
      
   
    
//   );
//   // {/* // return (
//   // //   <>
//   // //     <Slider className='text-red-500' {...settings}>
//   // //       <div className="w-full flex flex-col items-center justify-center pt-0 px-[160px]  pb-[40px]  min-h-[261px] max-w-full">
//   // //         <img className=" mx-auto w-[1120px] h-[536px] mq450:w-[48] h-[304px] " src={slider} />
//   // //       </div>
//   // //       <div className="w-full flex flex-col items-center justify-center pt-0 px-[160px] pb-[40px]  min-h-[261px] max-w-full">
//   // //         <img className=" mx-auto w-[1120px] h-[536px] mq450:w-[311px] h-[304px] " src={slider} />
//   // //       </div>
//   // //       <div className="w-full  flex flex-col items-center justify-center pt-0 px-[160px] pb-[40px]  min-h-[261px] max-w-full">
//   // //         <img className=" mx-auto w-[1120px] h-[536px] mq450:w-[311px] h-[304px] " src={slider} />
//   // //       </div>
//   // //     </Slider>
//   // //     <div className="w-[1120px] flex flex-row items-start justify-start gap-[24px] max-w-full mq1050:flex-wrap">
//   // //       <h1 className="m-0 flex-1 relative text-inherit tracking-[-2px] leading-[76px] font-medium font-inherit inline-block min-w-[418px] max-w-full mq750:min-w-full mq1050:text-39xl mq1050:leading-[61px] mq450:text-24xl mq450:leading-[46px]">
//   // //         <p className="m-0">
//   // //           <span>Simply Unique</span>
//   // //           <span className="text-neutral-04-100">/</span>
//   // //         </p>
//   // //         <p className="m-0">
//   // //           <span>Simply Better</span>
//   // //           <span className="text-neutral-04-100">.</span>
//   // //         </p>
//   // //       </h1>
//   // //       <div className="w-[453px] flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border min-w-[453px] max-w-full text-base text-darkslategray-200 font-caption-1 mq750:min-w-full mq1050:flex-1">
//   // //         <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[29px] pl-0 box-border max-w-full">
//   // //           <div className="flex-1 relative leading-[26px] inline-block max-w-full">
//   // //             <span className="font-semibold">{`3legant `}</span>
//   // //             <span className="text-neutral-04-100">{`is a gift & decorations store based in HCMC, Vietnam. Est since 2019. `}</span>
//   // //           </div>
//   // //         </div>
//   // //       </div>
//   // //     </div>
//   // //   </>
//   // // ); */}
// }
//   export default MySlider




// import Slider from 'react-slick';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CustomPrevArrow = (props) => (
  <div {...props}>
    <IoIosArrowBack className="text-red-300" />
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props}>
    <IoIosArrowForward className="text-red-300" />
  </div>
);

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
     <div className=' min-w-full  min-h-full px-4'>
   
      <Slider {...settings}>
       
        <img className=" w-min-full h-[304px] md:w-min-full md:h-[536px] " src={slider} alt="Slider Image 1" />
        <img className="w-min-full h-[304px]  md:w-[1120px] md:h-[536px]  " src={slider} alt="Slider Image 2" />
        <img className="w-min-full h-[304px] md:w-[1120px] md:h-[536px] " src={slider} alt="Slider Image 3" />
       
      </Slider>
      </div>

    <div className=" flex  items-start justify-start gap-[24px] max-w-full mq1050:flex-wrap">
       <h1 className="m-0 left-0 flex-1 relative text-inherit tracking-[-2px] leading-[76px] sm:text-sm  font-sans inline-block w-full md:min-w-full lg:text-39xl lg:leading-[61px]">
       
           <span>Simply Unique</span>
<span className="text-neutral-04-100">/</span>
      
       <p className="m-0 text-wrap">
           <span>Simply Better</span>
      <span className="text-neutral-04-100">.</span>
      </p>
      </h1>
    <div className="w-[453px] flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border min-w-[453px] max-w-full text-base text-darkslategray-200 font-caption-1 mq750:min-w-full mq1050:flex-1">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[29px] pl-0 box-border max-w-full">
         {/* <div className="flex-1 relative leading-[26px] inline-block max-w-full">
            <span className="font-semibold">{`3legant `}</span>
            <span className="text-neutral-04-100">{`is a gift & decorations store based in HCMC, Vietnam. Est since 2019. `}</span>
</div> */}
        </div>
      </div>
    </div>
  
    </>
  );
};

export default MySlider;
