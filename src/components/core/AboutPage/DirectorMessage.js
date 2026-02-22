import React from "react";
import SEO from "../../common/SEO";
import { SEO_DATA } from "../../../data/seoData";

function DirectorMessage() {
  return (
    <div>
      <SEO 
        title={SEO_DATA.ourDirector.title}
        description={SEO_DATA.ourDirector.description}
        keywords={SEO_DATA.ourDirector.keywords}
        url={SEO_DATA.ourDirector.url}
      />
      <div
        className="relative bg-cover bg-fixed flex justify-center items-center h-[130px] md:h-[220px] lg:h-[300px] custom-bg-position bg-gradient-to-b from-[#FF512F] to-[#DD2476]"
        style={{
          backgroundImage: "url('/images/whyTop.jpg')",
          //   backgroundPosition: "center top -340px",
          "background-size": "contain",
        }}
      >
        <style jsx>
          {`
            @media (max-width: 640px) {
              .custom-bg-position {
                background-position: center top -30px !important;
              }
            }
            @media (min-width: 768px) {
              .custom-bg-position {
                background-position: center top -200px !important;
              }
            }
            @media (min-width: 1024px) {
              .custom-bg-position {
                background-position: center top -260px !important;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 bg-black opacity-[0.5]"></div>
      </div>
      <div className=" pb-10 bg-gradient-to-b from-[#BFF098] to-[#6FD6FF]">
        <h1 className="text-[#ff3434] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-10">
          Our Director
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 px-4 md:px-10 ">
          <div className="flex flex-col">
            <div
              className={`text-black text-[18px] font-cinzel  md:my-[40px] text-justify flex md:gap-5 flex-col transition-all duration-300`}
            >
              <div>
                <br />
                <p>
                  <span class="font-semibold">Shobhit Kumar Srivastava</span>, the esteemed director of
                  <span class="font-semibold"> Optimal Classes</span>, is a visionary leader dedicated to transforming the field of education.
                  He earned his <span class="font-semibold">B. Tech. degree in 2007</span> from <span class="font-semibold">H. B. T. I. Kanpur</span>,
                  one of <span class="font-semibold">India's most prestigious engineering colleges</span>, showcasing his academic brilliance early on.
                </p>
                <p class="mt-4">
                  Before embarking on his journey as an educator, Mr. Srivastava built a remarkable career as a
                  <span class="font-semibold"> senior engineer</span> in two of <span class=""> India’s top companies</span>,
                  <span class="font-semibold"> Larsen & Toubro (L&T)</span> and <span class="font-semibold"> Hindustan Construction Company (HCC)</span>.
                  During his tenure from <span class="font-semibold">2007 to 2017</span>, he contributed significantly to
                  <span class="font-semibold"> high-impact engineering projects</span>, demonstrating <span class="font-semibold">excellence</span>,
                  <span class="font-semibold"> innovation</span>, and <span class="font-semibold">leadership</span>.
                </p>
                <p class="mt-4">
                  Driven by a profound desire to <span class="font-semibold"> serve the nation</span>, he transitioned to the
                  <span class="font-semibold"> field of education in 2017</span>. Since then, Mr. Srivastava has been passionately committed to
                  <span class="font-semibold"> nurturing young minds</span>, leveraging his <span class="font-semibold"> technical expertise </span>
                  and <span class="font-semibold">professional experience</span> to inspire students. His mission is to deliver
                  <span class="font-semibold"> exceptional education</span>, instill <span class="font-semibold"> critical thinking</span>,
                  and guide students to excel <span class="font-semibold"> academically</span> and <span class="font-semibold"> socially</span>,
                  contributing meaningfully to society.
                </p>
                <p class="mt-4">
                  Under his leadership, <span class="font-semibold"> Optimal Classes</span> continues to achieve
                  <span class="font-semibold"> remarkable results</span>, setting new benchmarks in <span class="font-semibold">academic excellence</span>.
                </p>
              </div>

              <div class="mt-2 p-6 bg-gradient-to-r from-[#eeefee] via-[#eeefee] to-[#eeefee] rounded-xl shadow-xl text-center">
  <p class="text-xl text-gray-700 font-medium">Warm regards,</p>
  <p class="text-2xl font-extrabold text-blue-700 mt-3 tracking-wide drop-shadow-md">
    Shobhit Kumar Srivastava
  </p>
  <p class="text-lg font-semibold text-green-600 mt-2 ">
    Director
  </p>
  <p class="text-md font-medium text-gray-600 mt-3 italic bg-yellow-50 px-4 py-1 rounded-full shadow-sm inline-block border-b-4 border-green-300">
    B.Tech from H.B.T.I Kanpur (Mechanical Engineering)
  </p>
</div>



              {/* <span className="text-[#ff3737]">Read More</span> */}
            </div>
          </div>
          <div className="my-[20px] md:-mr-[14px] order-first">
            <div className="">
              <img
                src="/images/directorImage.jpeg"
                className="w-[93%] h-[93%] rounded-[10px] my-auto shadow-md shadow-gray-300 mt-[1.5vw] mx-auto"
                alt="Director of Optimal Classes Varanasi - Shobhit Kumar Srivastava"
              />
            </div>
            {/* <div className="md:w-[600px] text-[#ffffff] h-[100px] bg-[#850e0e] m-8 rounded-md">
            <div className="text-center font-bold">ER. XYZ Singh</div>
            <div className="text-center">B.tech from XYZ College</div>
          </div> */}
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-fixed flex justify-center items-center h-[130px] md:h-[220px] lg:h-[280px] custom-bg-position1"
        style={{
          backgroundImage: "url('/images/whyBottom.webp')",
          //   backgroundPosition: "center top -200px",
          "background-size": "contain",
        }}
      >
        <style jsx>
          {`
            @media (max-width: 640px) {
              .custom-bg-position1 {
                background-position: center top 30px !important;
              }
            }
            @media (min-width: 768px) {
              .custom-bg-position1 {
                background-position: center top -80px !important;
              }
            }
            @media (min-width: 1024px) {
              .custom-bg-position1 {
                background-position: center top -130px !important;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 bg-black opacity-[0.5]"></div>
        {/* <h1 className="absolute text-white text-3xl font-bold">
        Why Optimal Classes
      </h1> */}
      </div>
    </div>
  );
}

export default DirectorMessage;
