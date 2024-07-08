import ElementsCard from "./ElementCard";
import kitchen from '../assets/kitchen.png'
import arrow from '../assets/arrow-right.png'

const BannerGrid = () => {
  return (
    <section className="mb-5 self-stretch bg-white flex flex-row flex-wrap items-start justify-start py-0 px-40 box-border gap-[24px] max-w-full text-left text-15xl text-neutral-07-100 font-caption-2-bold mq750:pl-20 mq750:pr-20 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="h-[664px] flex-1 relative min-w-[356px] max-w-full mq750:min-w-full">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={kitchen}
        />
        <div className="absolute top-[48px] left-[48px] w-[360px] flex flex-col items-start justify-start gap-[12px] z-[1]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.6px] leading-[38px] font-medium font-inherit mq1050:text-8xl mq1050:leading-[30px] mq450:text-xl mq450:leading-[23px]">
              Living Room
            </h1>
            <div className="self-stretch h-[52px] relative text-base leading-[26px] font-caption-1 text-text-blue whitespace-pre-wrap hidden">
              Phosfluor escently engage worldwide with web-enabled technology.
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
              src={arrow}
            />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[356px] max-w-full mq750:min-w-full">
        <ElementsCard
          imagePlaceholder={kitchen}
          bedroom="Bedroom"
        />
        <ElementsCard
          imagePlaceholder={kitchen}
          bedroom="Kitchen"
        />
      </div>
    </section>
  );
};

export default BannerGrid;