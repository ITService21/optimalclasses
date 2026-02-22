import React from "react";
import SEO from "../../common/SEO";
import { SEO_DATA } from "../../../data/seoData";

function Why() {
  return (
    // bg-gradient-to-b from-[#C6EA8D] to-[#FE90AF]
    <div>
      <SEO 
        title={SEO_DATA.whyOc.title}
        description={SEO_DATA.whyOc.description}
        keywords={SEO_DATA.whyOc.keywords}
        url={SEO_DATA.whyOc.url}
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
      <div className="bg-white">
        <h1 className="text-[#ff3434] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-10">
          Why Choose US?
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 px-4 md:px-10 ">
          <div className="flex flex-col">
            <div
              className={`text-black text-[18px] font-cinzel  my-[40px] text-justify flex md:gap-5 flex-col transition-all duration-300`}
            >
              <div
  
>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>Because great students are guided by ever greater teachers.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>Regular exam-oriented mock tests conducted every Sunday.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>We have a proven record of delivering toppers year after year.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>Fully air-conditioned classrooms for a comfortable learning experience.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>Smart board equipped classrooms for interactive learning.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>Biometric attendance system ensuring discipline and transparency.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>24×7 CCTV monitoring for complete safety and security.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>RO water cooler dispenser providing clean drinking water.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>All necessary fire-fighting and safety equipment installed.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>Fully Wi-Fi enabled campus.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#16a34a] text-xl mt-1">✔</span>
                  <span>Proper and secure parking facility available.</span>
                </li>
              </ul>

              <br />
              <br />

              While our primary focus remains on academic excellence, we also
              provide coaching for IIT-JEE and NEET, catering to the needs of
              students aspiring for competitive exams. However, unlike traditional
              institutes that place overwhelming emphasis on competition, we
              maintain a balanced approach. We ensure that academic performance is
              never compromised while providing students with the strategies and
              knowledge necessary for tackling these rigorous exams.

              <br />
              <br />

              At Optimal Classes, we believe that every student deserves
              individualized attention and guidance. Our supportive learning
              environment helps students stay motivated, build confidence, and work
              toward their academic and career goals. Whether you're aiming to
              excel in your school exams or preparing for national-level competitive
              exams, Optimal Classes offers a comprehensive coaching experience
              designed for success.
            </div>

  

              <br />
              <br />
          
              <br />
              <br />
              {/* <span className="text-[#ff3737]">Read More</span> */}
            </div>
          </div>
          <div className=" my-[20px] md:-mr-[14px] order-first">
            <img
              src="/images/whyChooseUs _.jpeg"
              className="w-[93%] h-[53%] rounded-[10px] my-auto shadow-md shadow-gray-300 mt-[1.5vw] mx-auto"
              alt="Why Choose Optimal Classes Varanasi - Best Coaching Institute"
            />
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

export default Why;
