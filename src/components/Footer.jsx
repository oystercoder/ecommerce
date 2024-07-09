import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
    return (
      <footer className="self-stretch bg-neutral-07-100 flex flex-col items-center justify-start pt-20 px-5 pb-8 box-border gap-[49px] max-w-full text-center text-5xl text-white font-caption-2-bold md:gap-[24px]">
        <div className="w-[1120px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="w-[544px] flex flex-row items-start justify-start py-0 pr-6 pl-0 box-border gap-[32px] max-w-full mq750:flex-wrap mq750:gap-[16px]">
              <div className="flex flex-row items-start justify-start">
                <h3 className="m-0 relative text-inherit leading-[24px] font-medium font-inherit inline-block min-w-[105px] mq450:text-lgi mq450:leading-[19px]">
                  <span>3legant</span>
                  <span className="text-neutral-04-100">.</span>
                </h3>
              </div>
              <div className="h-6 w-px relative bg-neutral-04-100 mq750:w-full mq750:h-px" />
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[227px] max-w-full text-left text-sm text-neutral-03-100 font-caption-1">
                <div className="self-stretch relative leading-[22px]">{`Gift & Decoration Store`}</div>
              </div>
            </div>
            <div className=" flex flex-col md:flex-row  md:items-center md:justify-center items-flex w-[392px]  items-start justify-start pt-px px-0 pb-0 box-border max-w-full text-left text-sm text-neutral-01-100 font-caption-1">
              <div className="self-stretch sm:flex smflex-col md:flex flex-row items-start justify-between gap-[20px]">
                <div className="relative leading-[22px] inline-block min-w-[40px] hover:cursor-pointer ml-2">
                  Home
                </div>
                <div className="relative leading-[22px] inline-block min-w-[35px] hover:cursor-pointer ml-[40px]">
                  Shop
                </div>
                <div className="relative leading-[22px] inline-block min-w-[52px] hover:cursor-pointer ml-[40px]">
                  Product
                </div>
                <div className="relative leading-[22px] inline-block min-w-[30px] hover:cursor-pointer ml-[40px]">
                  Blog
                </div>
                <div className="relative leading-[22px] inline-block min-w-[75px] hover:cursor-pointer ml-[30px]">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1118px] box-border flex flex-row items-start justify-between pt-[15px] px-0 pb-4 max-w-full gap-[20px] text-left text-xs text-neutral-01-100 border-t-[0.5px] border-solid border-neutral-04-100 mq750:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[27.5px] max-w-full mq750:flex-wrap">
            <div className="relative leading-[20px] text-neutral-03-100">
              Copyright © 2023 3legant. All rights reserved
            </div>
            <div className="relative leading-[20px] font-semibold inline-block min-w-[85px]">
              Privacy Policy
            </div>
            <div className="relative leading-[20px] font-semibold inline-block min-w-[79px]">
              Terms of Use
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px]">
          <div className='flex items-center justify-center'>
          <FaInstagram className='text-5xl' />
  
</div>
            
            <div className='flex items-center justify-center'>
  <FiFacebook className='text-5xl' />
</div>

            {/* <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src={<FiFacebook />}
            /> */}
            <div className="h-6 w-6 relative">
              <div className="absolute h-[81.25%] w-[89.58%] top-[9.58%] right-[5%] bottom-[9.17%] left-[5.42%] rounded box-border border-[1.5px] border-solid border-neutral-01-100" />
              <div className='flex items-center justify-center'>
              <SlSocialYoutube className='text-5xl' />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer  