import { useState } from 'react';
import right from '../assets/arrow-right.png'
import news from '../assets/news.png'
import { MdOutlineMail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const News = () => {
  
  const handle=()=>{
    toast.success("Thank you for your interest in our newsletter")
  }
    return (
    <>
    <ToastContainer />
    
      <section className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-21xl text-neutral-07-100 font-caption-2-bold">
        <div className="h-[360px] flex-1 relative max-w-full mq450:h-auto mq450:min-h-[360]">
          <img
            className="relative  top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
            alt=""
            src={news}
          />
          <div className=" bg-gray-200 absolute top-[101px] left-[450px] w-[540px] flex flex-col items-center justify-center gap-[32px] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[8px] max-w-full">
              <h1 className="m-0 w-[496px] relative text-inherit tracking-[-0.4px] leading-[44px] font-medium font-inherit inline-block max-w-full box-border pl-5 pr-5 mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
                Join Our Newsletter
              </h1>
              <div className="flex flex-grow relative text-lg leading-[30px] font-caption-1">
                Sign up for deals, new products and promotions
              </div>
            </div>
            <div className=" w-[528px] flex flex-col items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-neutral-04-100 font-caption-1">
              <div className="self-stretch box-border flex flex-row flex-wrap items-center justify-start pt-3 px-0 pb-2.5 gap-[8px] max-w-full border-b-[1px] border-solid border-neutral-04-50">
                <div className=" flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[278px] max-w-full">
                 
                  {/* <div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-medium inline-block max-w-[calc(100%_-_32px)]">
                    <text>
                    Email address
                    </text>
                  </div> */}
                  {/* <div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-medium inline-block max-w-[calc(100% - 32px)]">
  Email address
</div> */}
<div className="flex-1 relative">
  <input
    type="email"
    className="tracking-[-0.4px] leading-[28px] font-medium inline-block max-w-[calc(100% - 32px)] bg-transparent"
    value="Email Address"
  />
</div>


                </div>
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <img
                      className="h-[18px] w-[18px] relative hidden"
                      alt=""
                      src={right}
                    />
                    <button onClick={handle} className="relative tracking-[-0.4px] leading-[28px] font-medium inline-block min-w-[52px] hover:cursor-pointer" >
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };
  
  export default News