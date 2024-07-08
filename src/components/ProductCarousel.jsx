import ProductCard from "./ProductCard";
import arrow from '../assets/right-arrow.png'
import kitchen from '../assets/kitchen.png'
const ProductCarousel = () => {
  return (
    <section className="bg-white flex flex-col items-start justify-start pt-12 pb-0 pr-0 pl-40 box-border gap-[48px] max-w-full text-left text-21xl text-black font-caption-2-bold mq750:gap-[24px] mq750:pl-20 mq750:pt-[31px] mq750:box-border mq450:pl-5 mq450:box-border">
      <div className="w-[1140px] flex flex-row items-end justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full">
        <h1 className="m-0 relative text-inherit tracking-[-0.4px] leading-[44px] font-medium font-inherit mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
          <p className="m-0">{`New `}</p>
          <p className="m-0">Arrivals</p>
        </h1>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[4px] border-b-[1px] border-solid border-neutral-07-100">
          <div className="flex flex-row items-center justify-start">
            <div className="relative text-base tracking-[-0.4px] leading-[28px] font-medium font-caption-1 text-neutral-07-100 text-left inline-block min-w-[108px]">
              More Products
            </div>
          </div>
          <img
            className="h-5 w-5 relative"
            alt=""
            src={arrow}
          />
        </button>
      </div>
      <div className="w-[1280px] overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full text-center text-base text-neutral-07-100 font-caption-1">
        <div className="w-[262px] shrink-0 flex flex-col items-start justify-start gap-[12px] [debug_commit:1de1738] text-left">
          <div className="self-stretch flex flex-col items-start justify-start p-4 relative gap-[215px]">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-placeholder-4@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[8px] z-[1]">
                <button className="cursor-pointer [border:none] py-1 px-3.5 bg-white rounded flex flex-row items-start justify-start hover:bg-gainsboro">
                  <b className="relative text-base leading-[16px] uppercase inline-block font-caption-1 text-neutral-07-100 text-center min-w-[39px]">
                    NEW
                  </b>
                </button>
                <button className="cursor-pointer [border:none] py-1 px-3.5 bg-green rounded flex flex-row items-start justify-start hover:bg-mediumseagreen">
                  <b className="relative text-base leading-[16px] uppercase inline-block font-caption-1 text-neutral-01-100 text-center min-w-[43px]">
                    -50%
                  </b>
                </button>
              </div>
              <div className="h-8 w-8 shadow-[0px_8px_16px_-8px_rgba(15,_15,_15,_0.12)] rounded-13xl bg-white flex flex-row items-center justify-center p-1.5 box-border z-[1]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/iconsheartline.svg"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[9px] px-[74px] bg-neutral-07-100 shadow-[0px_8px_16px_rgba(0,_0,_0,_0.04)] rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkslategray-100">
              <div className="relative text-base tracking-[-0.4px] leading-[28px] font-medium font-caption-1 text-neutral-01-100 text-center inline-block min-w-[82px]">
                Add to cart
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <img
                  className="w-[88px] h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/ratingrating-group.svg"
                />
                <div className="self-stretch relative leading-[26px] font-semibold">
                  Loveseat Sofa
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[12px] text-sm">
                  <div className="relative leading-[22px] font-semibold inline-block min-w-[56px] whitespace-nowrap">
                    $199.00
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 inline-block min-w-[57px] whitespace-nowrap">
                    $400.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductCard
          imagePlaceholder="/image-placeholder-5@2x.png"
          loveseatSofa="Table Lamp"
          prop="$24.99"
        />
        <ProductCard
          imagePlaceholder="/image-placeholder-6@2x.png"
          loveseatSofa="Beige Table Lamp"
          prop="$24.99"
          propMinWidth="49px"
        />
        <ProductCard
          imagePlaceholder="/image-placeholder-7@2x.png"
          loveseatSofa="Bamboo basket"
          prop="$24.99"
          propMinWidth="49px"
        />
        <ProductCard
          imagePlaceholder="/image-placeholder-8@2x.png"
          loveseatSofa="Toasted"
          prop="$224.99"
          propMinWidth="58px"
        />
        <div className="w-[262px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px] [debug_commit:1de1738]">
          <div className="self-stretch h-[349px] relative">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-placeholder-8@2x.png"
            />
            <div className="absolute top-[16px] left-[16px] w-[67px] h-6 flex flex-col items-start justify-start gap-[8px] z-[1]">
              <div className="self-stretch flex-1 rounded bg-white flex flex-row items-center justify-center py-1 px-3.5">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                  <b className="self-stretch flex-1 relative leading-[16px] uppercase">
                    NEW
                  </b>
                </div>
              </div>
              <div className="w-[71px] rounded bg-green hidden flex-row items-center justify-center py-1 px-3.5 box-border text-white">
                <div className="h-4 flex-1 flex flex-row items-center justify-start">
                  <b className="self-stretch flex-1 relative leading-[16px] uppercase">
                    -50%
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[16px] left-[calc(50%_-_115px)] shadow-[0px_8px_16px_rgba(0,_0,_0,_0.04)] bg-neutral-07-100 w-[230px] hidden flex-row items-center justify-center py-[9px] px-6 box-border whitespace-nowrap text-neutral-01-100">
              <div className="self-stretch relative tracking-[-0.4px] leading-[28px] font-medium">
                Add to cart
              </div>
            </div>
          </div>
          <div className="self-stretch h-[72px] flex flex-col items-start justify-start text-left">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                <img
                  className="w-[88px] h-4 relative"
                  alt=""
                  src="/ratingrating-group.svg"
                />
                <div className="self-stretch flex-1 relative leading-[26px] font-semibold">
                  Bamboo basket
                </div>
                <div className="w-[69px] h-[22px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[12px] text-sm">
                  <div className="self-stretch flex-1 relative leading-[22px] font-semibold whitespace-nowrap">
                    $24.99
                  </div>
                  <div className="self-stretch w-[57px] relative [text-decoration:line-through] leading-[22px] text-neutral-04-100 hidden whitespace-nowrap">
                    $400.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1120px] h-1 flex flex-row items-start justify-start relative max-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-61xl bg-neutral-03-100" />
        <div className="self-stretch w-[854px] relative rounded-61xl bg-darkslategray-200 max-w-full z-[1]" />
      </div>
    </section>
  );
};

export default ProductCarousel;