import React from 'react'
import right from '../assets/arrow-right.png'
import banner from '../assets/banner.jpeg'

const Banner = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-neutral-07-100 font-caption-1">
      <div className="flex-1 flex flex-row items-start justify-center max-w-full [row-gap:20px] mq1125:flex-wrap">
        <img
          className=" mx-2 my-2 px-2 py-2 h-[532px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[468px] min-h-[532px] mq750:min-w-full mq1125:flex-1"
          alt=""
          src={banner}
        />
        <div className="flex-[0.6278] bg-neutral-02-100 flex flex-col items-start justify-center py-[140px] pr-[196px] pl-[72px] box-border gap-[24px] min-w-[468px] max-w-full mq750:py-[91px] mq750:pr-[98px] mq750:pl-9 mq750:box-border mq750:min-w-full mq450:pr-5 mq450:box-border mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <b className="self-stretch relative leading-[16px] uppercase text-blue">
              SALE UP TO 35% OFF
            </b>
            <h1 className="m-0 self-stretch relative text-21xl tracking-[-0.4px] leading-[44px] font-medium font-caption-2-bold mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
              <p className="m-0">{`HUNDREDS of `}</p>
              <p className="m-0">New lower prices!</p>
            </h1>
            <div className="self-stretch relative text-xl leading-[32px] mq450:text-base mq450:leading-[26px]">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[4px] border-b-[1px] border-solid border-neutral-07-100">
            <div className="flex flex-row items-center justify-start">
              <div className="relative text-base tracking-[-0.4px] leading-[28px] font-medium font-caption-1 text-neutral-07-100 text-left inline-block min-w-[76px]">
                Shop Now
              </div>
            </div>
            <img
              className="h-5 w-5 relative"
              alt=""
              src={right}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
