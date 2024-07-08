import Article from "./Article";
import kitchen from '../assets/kitchen.png'
import decor from '../assets/decor.png'
import right from '../assets/arrow-right.png'


const Blog = () => {
  return (
    <section className="self-stretch bg-white flex flex-col items-center justify-start py-20 pr-5 pl-[21px] box-border gap-[40px] max-w-full text-left text-21xl text-black font-caption-2-bold mq750:gap-[20px] mq750:pt-[52px] mq750:pb-[52px] mq750:box-border">
      <div className="w-[1121px] flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <h1 className="m-0 relative text-inherit tracking-[-0.4px] leading-[44px] font-medium font-inherit mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
          Articles
        </h1>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[4px] border-b-[1px] border-solid border-neutral-07-100">
          <div className="flex flex-row items-center justify-start">
            <div className="relative text-base tracking-[-0.4px] leading-[28px] font-medium font-caption-1 text-neutral-07-100 text-left inline-block min-w-[98px]">
              More Articles
            </div>
          </div>
          <img
            className="h-5 w-5 relative"
            alt=""
            src={right}
          />
        </button>
      </div>
      <div className="w-[1121px] grid flex-row items-start justify-start gap-[25px] max-w-full grid-cols-[repeat(3,_minmax(268px,_1fr))] text-xl text-neutrals-2 mq750:grid-cols-[minmax(268px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(268px,_464px))]">
        <Article
          imgContainer={decor}
          waysToDecorYourHome="7 ways to decor your home"
        />
        <Article
          imgContainer={kitchen}
          waysToDecorYourHome="Kitchen organization"
        />
        <Article
          imgContainer={decor}
          waysToDecorYourHome="Decor your bedroom"
        />
      </div>
    </section>
  );
};

export default Blog;