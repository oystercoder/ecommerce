import { useMemo } from "react";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import kitchen from '../assets/kitchen.png'

const ProductCard = ({
  imagePlaceholder,
  loveseatSofa,
  prop,
  propMinWidth,
}) => {
  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    // <div className="w-[262px] shrink-0 flex flex-col items-start justify-start gap-[12px] [debug_commit:1de1738] text-center text-base text-neutral-01-100 font-caption-1">
    //   <div className="self-stretch h-[349px] relative">
    //     <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover">
    //     <FaRegStar />
    //       </div>
    //     <div className="absolute h-[13.18%] w-[87.79%] top-[82.23%] right-[6.11%] bottom-[4.58%] left-[6.11%] shadow-[0px_8px_16px_rgba(0,_0,_0,_0.04)] rounded-lg bg-neutral-07-100 hidden flex-row items-center justify-center py-2 px-6 box-border whitespace-nowrap">
    //       <div className="relative tracking-[-0.4px] leading-[28px] font-medium">
    //         Add to cart
    //       </div>
    //     </div>
    //     <div className="absolute top-[16px] right-[16px] shadow-[0px_8px_16px_-8px_rgba(15,_15,_15,_0.12)] rounded-13xl bg-white w-8 h-8 hidden flex-row items-center justify-center p-1.5 box-border">
    //       <div className="h-5 w-5 relative overflow-hidden shrink-0">
    //       <CiHeart />
    //         </div>
           
          
    //     </div>
        
    //   </div>
      <div className="self-stretch flex flex-col items-start justify-start text-left text-neutral-07-100">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <section className="flex flex-row">
        <button className="m-3 flex flex-col top-0 cursor-pointer py-1 px-3.5 bg-white rounded flex flex-row items-start justify-start hover:bg-gainsboro">
           <b className="relative text-base  uppercase inline-block font-caption-1 text-neutral-07-100 text-center min-w-[39px]">
             NEW
           </b>
         
         <div className="top-0 cursor-pointer [border:none] py-1 px-3.5 bg-green rounded flex flex-row items-start justify-start hover:bg-mediumseagreen">
           <b className="relative text-base  uppercase inline-block font-caption-1 text-neutral-01-100 text-center min-w-[43px]">
             -50%
           </b>
           </div>
         </button>

       
          <img className="m-0 left-6 w-[150px] h-[200px] relative"
            alt=""
            src={kitchen}
          />
          </section>
          
            
          <div className="self-stretch relative leading-[26px] font-semibold">
            {loveseatSofa}
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[12px] text-sm">
            <div
              className="relative leading-[22px] font-semibold inline-block min-w-[49px] whitespace-nowrap"
              style={divStyle}
            >
              {prop}
            </div>
            <div className="self-stretch w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden whitespace-nowrap">
              $400.00
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default ProductCard;