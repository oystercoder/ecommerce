import arrow from '../assets/arrow-right.png'
const ElementsCard = ({ imagePlaceholder, bedroom }) => {
    return (
      <div className="self-stretch flex flex-row items-end justify-start py-10 px-8 box-border relative min-h-[319px] max-w-full text-left text-15xl text-neutral-07-100 font-caption-2-bold">
        <img
          className="self-stretch w-full absolute !m-[0] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imagePlaceholder}
        />
        <div className="w-[420px] flex flex-col items-start justify-start py-0 px-0 box-border gap-[12px] max-w-full z-[1]">
          <h1 className="m-0 w-[516px] relative text-inherit tracking-[-0.6px] leading-[38px] font-medium font-inherit inline-block max-w-[123%] shrink-0 mq1050:text-8xl mq1050:leading-[30px] mq450:text-xl mq450:leading-[23px]">
            {bedroom}
          </h1>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[4px] border-b-[1px] border-solid border-neutral-07-100">
            <div className="flex flex-row items-center justify-start">
              <div className="relative text-base tracking-[-0.4px] leading-[28px] font-medium font-caption-1 text-neutral-07-100 text-left inline-block min-w-[76px]">
                Shop Now
              </div>
            </div>
            <img
              className="h-5 w-5 relative"
              alt=""
              src={arrow}
            />
          </button>
        </div>
      </div>
    );
  };
  
  export default ElementsCard;