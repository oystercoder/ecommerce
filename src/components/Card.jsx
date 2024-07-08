import { CiDeliveryTruck } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
const Card = ({ shippingAndDeliveryoutlin, freeShipping, orderAbove200 }) => {
    return (
      <div className="flex-1 bg-neutral-02-100 flex flex-col items-start justify-start py-12 px-8 box-border gap-[16px] min-w-[218px] max-w-[262px] text-left text-xl text-neutral-07-100 font-caption-2-bold">
        {/* <img
          className="w-12 h-12 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={<IoCallOutline />}
        /> */}
        {shippingAndDeliveryoutlin}
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
            {freeShipping}
          </div>
          <div className="self-stretch relative text-sm leading-[24px] text-neutral-04-100">
            {orderAbove200}
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;