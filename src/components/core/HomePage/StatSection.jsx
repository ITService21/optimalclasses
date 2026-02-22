import React from "react";
import girlImage from "../../../assets/Images/girl.webp";
import mocktest from "../../../assets/Images/mocktest.webp";
import practicepaper from "../../../assets/Images/practicepaper.webp";
import videolecture from "../../../assets/Images/videolecture.webp";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

const StatsSection = () => {
  const animationLeftRef1 = useScrollAnimation("animate-slideInLeftToRight");
  const animationRightRef1 = useScrollAnimation("animate-slideInRightToLeft");
  const animationLeftRef2 = useScrollAnimation("animate-slideInLeftToRight");
  const animationRightRef2 = useScrollAnimation("animate-slideInRightToLeft");
  return (
    <section className="py-16 ">
      <h2 className="text-[24px] md:text-2xl lg:text-4xl font-cinzel md:mt-8 font-bold py-2 md:py-2 text-center -mb-[80px]">
        <span className=" py-4 bg-clip-text font-bold text-[#ff0b0b]">
          Student Testimonials
        </span>
      </h2>

      {/* <div className="flex flex-col md:flex-row md:flex-flow justify-center items-center"> ffcdcd*/}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center bg-gradient-to-r from-[#ffcdcd] to-[#ffcdcd] py-[100px] px-2 md:px-8">
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center  transition-all     duration-200 overflow-hidden hover:scale-105">
          <span className="relative z-10 text-[#838383] mb-4 block transition-opacity duration-200 text-justify p-6 py-2">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className=" mb-4 icon icon-quote w-[20px]"
              viewBox="0 0 41 35"
            >
              <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
            </svg>
          </span>
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify p-6">
            Best Faculty for its optimal price and the effort made by the
            teachers... regular evaluation of results, competitive environment,
            and obviously, the skills are outstanding... definitely way to go 👍
          </span>
          <div className="relative z-10 w-[140px] mx-auto">
            <img src="/images/AnasSiddiqui_.jpeg" className="" alt="..." />
            <h3 className="py-2 font-cinzel text-[18px]">Anas Siddqui</h3>
          </div>
          <h2 className="text-[16px] font-semibold text-center relative z-10 text-black block transition-opacity duration-200">
            Scored 96% marks in Boards
          </h2>
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center  transition-all     duration-200 overflow-hidden hover:scale-105">
          <span className="relative z-10 text-[#838383] mb-4 block transition-opacity duration-200 text-justify p-6 py-2">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className=" mb-4 icon icon-quote w-[20px]"
              viewBox="0 0 41 35"
            >
              <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
            </svg>
          </span>
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify p-6">
            I would like to express my sincere gratitude to optimal classes...
            Shobhit sir has been a great mentor. He is always helped me in my
            understanding of concepts, and he not only supports my academics but
            also motivated me to stay on course. His hard work and geniue
            interest in his student's success making him an ideal choice as a
            mentor.
            <br />
            Thank you sir for believing in me and helping me to give my best. 👍
          </span>
          <div className="relative z-10 w-[140px] mx-auto">
            <img src="/images/NiyatiSingh_.jpeg" className="" alt="..." />
            <h3 className="py-2 font-cinzel text-[18px] whitespace-normal">Niyati V. Singh</h3>
          </div>
          
          <h2 className="text-[16px] font-semibold text-center relative z-10 text-black block transition-opacity duration-200">
            Scored 93.5% marks in Boards
          </h2>
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center  transition-all     duration-200 overflow-hidden hover:scale-105">
          <span className="relative z-10 text-[#838383] mb-4 block transition-opacity duration-200 text-justify p-6 py-2">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className=" mb-4 icon icon-quote w-[20px]"
              viewBox="0 0 41 35"
            >
              <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
            </svg>
          </span>
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify p-6">
            Really having a good service by the tutorial staff here. I am
            provided with excellent support great knowledge by Shobhit Sir. His
            teaching is simple yet incredibly powerful. Highly recommended.👍
          </span>
          <div className="relative z-10 w-[140px] mx-auto">
            <img src="/images/SakshiSrivastava_.jpeg" className="" alt="..." />
            <h3 className="py-2 font-cinzel text-[18px]">Sakshi Srivastava</h3>
          </div>

          <h2 className="text-[16px] font-semibold text-center relative z-10 text-black block transition-opacity duration-200">
            Scored 93% marks in Boards
          </h2>
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        {/* <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center  transition-all     duration-200 overflow-hidden hover:scale-105">
          <span className="relative z-10 text-[#838383] mb-4 block transition-opacity duration-200 text-justify p-6 py-2">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              className=" mb-4 icon icon-quote w-[20px]"
              viewBox="0 0 41 35"
            >
              <path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
            </svg>
          </span>
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify p-6">
            Best Faculty for its optimal price and the effort made by the
            teachers... regular evaluation of results, competitive environment,
            and obviously, the skills are outstanding... definitely way to go 👍
          </span>
          <div className="relative z-10 w-[140px] mx-auto">
            <img src="/images/AnasSiddiqui_.jpeg" className="" alt="..." />
          </div>
          <h3 className="py-2 font-cinzel text-[18px]">Khushi Yadav</h3>
          <h2 className="text-[16px] font-semibold text-center relative z-10 text-black block transition-opacity duration-200">
            Scored 96% marks in Boards
          </h2>
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div> */}
      </div>
    </section>
  );
};

export default StatsSection;
