import right from '../assets/arrow-right.png'
const Article = ({ imgContainer, waysToDecorYourHome }) => {
    return (
      <div className="flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-xl text-neutrals-2 font-caption-2-bold">
        <img
          className="self-stretch h-[325px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={imgContainer}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
            {waysToDecorYourHome}
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[4px] border-b-[1px] border-solid border-neutral-07-100">
            <div className="flex flex-row items-center justify-start">
              <div className="relative text-base tracking-[-0.4px] leading-[28px] font-medium font-caption-1 text-neutral-07-100 text-left inline-block min-w-[79px]">
                Read More
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
    );
  };
  
  export default Article;