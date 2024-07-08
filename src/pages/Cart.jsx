// import NavigationBar from "../components/NavigationBar";
// import Process from "../components/Process";
// import FrameComponent from "../components/FrameComponent";
// import Footer from "../components/Footer";

// const Cart = () => {
//   return (
//     <div className="w-full relative overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
//       {/* <NavigationBar /> */}
//       <main className="self-stretch bg-white flex flex-col items-start justify-start py-20 px-40 box-border gap-[80px] max-w-full text-left text-xl text-neutral-07-100 font-caption-2-bold">
//         <section className="self-stretch flex flex-row items-start justify-center max-w-full text-left text-35xl text-black1 font-caption-2-bold">
//           <div className="w-[832px] flex flex-col items-center justify-start gap-[40px] max-w-full">
//             <h1 className="m-0 relative text-inherit tracking-[-1px] leading-[58px] font-medium font-inherit inline-block min-w-[117px]">
//               Cart
//             </h1>
//             <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px]">
//               {/* <Process
//                 processIconPlaceholders="1"
//                 shoppingCart="Shopping cart"
//               />
//               <Process
//                 processIconPlaceholders="2"
//                 shoppingCart="Checkout details"
//                 propBorderBottom="unset"
//                 propFlex="1"
//                 propMinWidth="192px"
//                 propWidth="unset"
//               />
//               <Process
//                 processIconPlaceholders="3"
//                 shoppingCart="Order complete"
//                 propBorderBottom="unset"
//                 propFlex="1"
//                 propMinWidth="192px"
//                 propWidth="unset"
//               /> */}
//             </div>
//           </div>
//         </section>
//         <section className="self-stretch flex flex-row items-start justify-center gap-[64px] max-w-full text-left text-xl text-neutral-07-100 font-caption-2-bold">
//           {/* <FrameComponent /> */}
//           <div className="w-[413px] rounded-md bg-white box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[16px] min-w-[413px] max-w-full border-[1px] border-solid border-neutral-04-100">
//             <div className="self-stretch relative leading-[28px] font-medium">
//               Cart summary
//             </div>
//             <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base font-caption-1">
//               <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
//                 <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[12px] max-w-full">
//                   <div className="self-stretch rounded bg-neutral-02-100 box-border flex flex-row items-start justify-start py-[11px] px-[15px] max-w-full border-[1px] border-solid border-neutral-07-100">
//                     <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
//                       <div className="flex flex-row items-start justify-start gap-[12px]">
//                         <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
//                           <input
//                             className="cursor-pointer m-0 w-[18px] h-[18px] relative rounded-81xl box-border border-[1px] border-solid border-black-900"
//                             type="radio"
//                             name="radioGroup-1"
//                           />
//                         </div>
//                         <div className="relative leading-[26px] inline-block min-w-[103px]">
//                           Free shipping
//                         </div>
//                       </div>
//                       <div className="relative leading-[26px] text-right inline-block min-w-[44px] whitespace-nowrap">
//                         $0.00
//                       </div>
//                     </div>
//                   </div>
//                   <div className="self-stretch rounded bg-neutral-01-100 box-border flex flex-row items-start justify-start py-[11px] px-[15px] max-w-full border-[1px] border-solid border-neutral-04-100">
//                     <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
//                       <div className="flex flex-row items-start justify-start gap-[12px]">
//                         <div className="h-[22px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
//                           <input
//                             className="cursor-pointer m-0 w-[19px] h-[19px] relative rounded-81xl box-border border-[1px] border-solid border-black-900"
//                             type="radio"
//                             name="radioGroup-1"
//                           />
//                         </div>
//                         <div className="relative leading-[26px] inline-block min-w-[129px]">
//                           Express shipping
//                         </div>
//                       </div>
//                       <div className="relative leading-[26px] text-right inline-block min-w-[62px]">
//                         +$15.00
//                       </div>
//                     </div>
//                   </div>
//                   <div className="self-stretch rounded bg-neutral-01-100 box-border flex flex-row items-start justify-start py-[11px] px-[15px] max-w-full border-[1px] border-solid border-neutral-04-100">
//                     <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
//                       <div className="flex flex-row items-start justify-start gap-[12px]">
//                         <div className="h-[22px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
//                           <input
//                             className="cursor-pointer m-0 w-[19px] h-[19px] relative rounded-81xl box-border border-[1px] border-solid border-black-900"
//                             type="radio"
//                             name="radioGroup-1"
//                           />
//                         </div>
//                         <div className="relative leading-[26px] inline-block min-w-[58px]">
//                           Pick Up
//                         </div>
//                       </div>
//                       <div className="relative leading-[26px] text-right inline-block min-w-[54px]">
//                         %21.00
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="self-stretch box-border flex flex-row items-start justify-start pt-[13px] px-0 pb-[11px] max-w-full border-b-[1px] border-solid border-black-200">
//                   <div className="flex-1 flex flex-row items-start justify-start max-w-full">
//                     <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
//                       <div className="flex flex-row items-start justify-start gap-[8px]">
//                         <img
//                           className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
//                           alt=""
//                           src="/iconcoupon.svg"
//                         />
//                         <div className="relative leading-[26px] inline-block min-w-[64px]">
//                           Subtotal
//                         </div>
//                       </div>
//                       <div className="relative leading-[26px] font-semibold text-right inline-block min-w-[75px] whitespace-nowrap">
//                         $1234.00
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-start justify-start py-[13px] px-0 box-border max-w-full text-xl">
//                   <div className="flex-1 flex flex-row items-start justify-start max-w-full">
//                     <div className="h-[26px] flex-1 flex flex-row items-start justify-between pt-0 px-0 pb-0 box-border max-w-full gap-[20px]">
//                       <div className="relative leading-[32px] font-semibold inline-block min-w-[49px]">
//                         Total
//                       </div>
//                       <div className="relative leading-[32px] font-semibold text-right inline-block min-w-[94px] whitespace-nowrap">
//                         $1345.00
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button className="cursor-pointer [border:none] py-2.5 px-5 bg-neutral-07-100 self-stretch rounded-lg flex flex-row items-start justify-center hover:bg-darkslategray-100">
//                 <a className="[text-decoration:none] relative text-lg tracking-[-0.4px] leading-[32px] font-medium font-caption-1 text-white text-center inline-block min-w-[80px]">
//                   Checkout
//                 </a>
//               </button>
//             </div>
//           </div>
//         </section>
//         <div className="w-[424px] flex flex-col items-start justify-start gap-[16px] max-w-full">
//           <div className="self-stretch flex flex-col items-start justify-start gap-[7px] shrink-0">
//             <div className="self-stretch relative leading-[28px] font-medium">
//               Have a coupon?
//             </div>
//             <div className="self-stretch relative text-base leading-[26px] font-caption-1 text-neutral-04-100">
//               Add your code for an instant cart discount
//             </div>
//           </div>
//           <div className="self-stretch box-border flex flex-col items-start justify-center py-0 px-4 max-w-full text-base text-neutral-04-100 font-caption-1 border-[1px] border-solid border-neutral-04-100">
//             <div className="self-stretch box-border flex flex-row flex-wrap items-center justify-start pt-3 px-0 pb-2.5 gap-[8px] max-w-full border-b-[1px] border-solid border-neutral-04-50">
//               <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[222px] max-w-full">
//                 <img
//                   className="h-6 w-6 relative"
//                   loading="lazy"
//                   alt=""
//                   src="/ticketpercent.svg"
//                 />
//                 <div className="flex-1 relative tracking-[-0.4px] leading-[28px] font-medium">
//                   Coupon Code
//                 </div>
//               </div>
//               <div className="flex flex-row items-center justify-start text-neutral-07-100">
//                 <div className="flex flex-row items-center justify-start">
//                   <div className="relative tracking-[-0.4px] leading-[28px] font-medium inline-block min-w-[43px]">
//                     Apply
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };
// export default Cart


import React from 'react';

const Cart = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <main className="bg-white py-20 px-40 box-border gap-20 max-w-full text-left text-xl text-neutral-07-100 font-caption-2-bold">
        <section className="flex flex-row items-center justify-center max-w-full text-3.5xl text-black1 font-caption-2-bold">
          <div className="w-3/5 flex flex-col items-center justify-start gap-10">
            <h1 className="m-0 text-inherit tracking-wider leading-58px font-medium">
              Cart
            </h1>
            {/* Process components */}
            {/* Placeholder for Process components */}
          </div>
        </section>
        <section className="flex flex-row items-start justify-center gap-64 max-w-full text-left text-xl text-neutral-07-100 font-caption-2-bold">
          <div className="w-2/5 rounded-md bg-white box-border flex flex-col items-start justify-start py-22px px-23px gap-16px min-w-413px max-w-full border-1 border-solid border-neutral-04-100">
            <div className="relative font-medium leading-28px">
              Cart summary
            </div>
            <div className="flex flex-col items-start justify-start max-w-full text-base font-caption-1">
              {/* Shipping options */}
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
                <div className="flex flex-col items-start justify-start gap-12px max-w-full">
                  {/* Shipping option 1 */}
                  <div className="rounded bg-neutral-02-100 box-border flex flex-row items-start justify-start py-11px px-15px max-w-full border-1 border-solid border-neutral-07-100">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-20px">
                      <div className="flex flex-row items-start justify-start gap-12px">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <input
                            className="cursor-pointer m-0 w-18px h-18px relative rounded-81xl box-border border-1 border-solid border-black-900"
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className="relative leading-26px inline-block min-w-103px">
                          Free shipping
                        </div>
                      </div>
                      <div className="relative leading-26px text-right inline-block min-w-44px whitespace-nowrap">
                        $0.00
                      </div>
                    </div>
                  </div>
                  {/* Shipping option 2 */}
                  <div className="rounded bg-neutral-01-100 box-border flex flex-row items-start justify-start py-11px px-15px max-w-full border-1 border-solid border-neutral-04-100">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-20px">
                      <div className="flex flex-row items-start justify-start gap-12px">
                        <div className="h-22px flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                          <input
                            className="cursor-pointer m-0 w-19px h-19px relative rounded-81xl box-border border-1 border-solid border-black-900"
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className="relative leading-26px inline-block min-w-129px">
                          Express shipping
                        </div>
                      </div>
                      <div className="relative leading-26px text-right inline-block min-w-62px">
                        +$15.00
                      </div>
                    </div>
                  </div>
                  {/* Shipping option 3 */}
                  <div className="rounded bg-neutral-01-100 box-border flex flex-row items-start justify-start py-11px px-15px max-w-full border-1 border-solid border-neutral-04-100">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-20px">
                      <div className="flex flex-row items-start justify-start gap-12px">
                        <div className="h-22px flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                          <input
                            className="cursor-pointer m-0 w-19px h-19px relative rounded-81xl box-border border-1 border-solid border-black-900"
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className="relative leading-26px inline-block min-w-58px">
                          Pick Up
                        </div>
                      </div>
                      <div className="relative leading-26px text-right inline-block min-w-54px">
                        %21.00
                      </div>
                    </div>
                  </div>
                </div>
                {/* Subtotal */}
                <div className="flex flex-row items-start justify-start pt-13px px-0 pb-11px max-w-full border-b-1 border-solid border-black-200">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-20px">
                    <div className="flex flex-row items-start justify-start gap-8px">
                      <img
                        className="h-5 w-5 relative hidden"
                        alt=""
                        src="/iconcoupon.svg"
                      />
                      <div className="relative leading-26px inline-block min-w-64px">
                        Subtotal
                      </div>
                    </div>
                    <div className="relative leading-26px font-semibold text-right inline-block min-w-75px whitespace-nowrap">
                      $1234.00
                    </div>
                  </div>
                </div>
                {/* Total */}
                <div className="flex flex-row items-start justify-start py-13px px-0 max-w-full text-xl">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full">
                    <div className="h-26px flex-1 flex flex-row items-start justify-between pt-0 px-0 pb-0 gap-20px max-w-full">
                      <div className="relative leading-32px font-semibold inline-block min-w-49px">
                        Total
                      </div>
                      <div className="relative leading-32px font-semibold text-right inline-block min-w-94px whitespace-nowrap">
                        $1345.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Checkout button */}
              <button className="cursor-pointer py-2.5 px-5 bg-neutral-07-100 self-stretch rounded-lg flex items-center justify-center hover:bg-darkslategray-100">
                <a className="text-lg tracking-wide leading-32px font-medium font-caption-1 text-white text-center inline-block min-w-80px">
                  Checkout
                </a>
              </button>
            </div>
          </div>
          {/* Coupon section */}
          <div className="w-2/5 flex flex-col items-start justify-start gap-16 max-w-full">
            <div className="flex flex-col items-start justify-start gap-7">
              <div className="relative leading-28px font-medium">
                Have a coupon?
              </div>
              <div className="relative leading-26px font-caption-1 text-neutral-04-100">
                Add your code for an instant cart discount
              </div>
            </div>
            {/* Coupon input */}
            <div className="box-border flex flex-col items-start justify-center py-0 px-4 max-w-full text-base text-neutral-04-100 font-caption-1 border-1 border-solid border-neutral-04-100">
              <div className="box-border flex flex-row items-center justify-start pt-3 px-0 pb-2.5 gap-8 max-w-full border-b-1 border-solid border-neutral-04-50">
                <div className="flex-1 flex flex-row items-center justify-start gap-8 min-w-222px max-w-full">
                  <img
                    className="h-6 w-6 relative"
                    loading="lazy"
                    alt=""
                    src="/ticketpercent.svg"
                  />
                  <div className="flex-1 relative tracking-wide leading-28px font-medium">
                    Coupon Code
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start text-neutral-07-100">
                  <div className="relative tracking-wide leading-28px font-medium inline-block min-w-43px">
                    Apply
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
