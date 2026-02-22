import React from "react";
import SEO from "../../common/SEO";
import { SEO_DATA } from "../../../data/seoData";

function MissionVision() {
  return (
    <div>
      <SEO 
        title={SEO_DATA.missionVision.title}
        description={SEO_DATA.missionVision.description}
        keywords={SEO_DATA.missionVision.keywords}
        url={SEO_DATA.missionVision.url}
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
      <div className=" pb-10 bg-gradient-to-b from-[#FFECD2] to-[#FCB69F]">
        <h1 className="text-[#ff3434] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-10">
          Our Vision & Mission
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 px-4 md:px-10 ">
          <div className="flex flex-col">
            <div
              className={`text-black text-[18px] font-cinzel  md:my-[40px] text-justify flex md:gap-5 flex-col transition-all duration-300`}
            >
              <div className="bg-[#40d7e8] px-3 pb-10 mb-8">
                <h2 className="text-[#c62929] text-[26px] md:text-[36px] lg:text-[40px] font-rubik-vinyl font-bold text-center pt-10">
                  Our Vision
                </h2>
                <p className="px-[6px]">
                  To empower students through high-quality digital education,
                  fostering easy understanding with the guidance of highly
                  qualified and experienced tutors. We aim to develop critical
                  thinking abilities and equip students to excel in board exams
                  and competitive examinations, ensuring their academic and
                  personal growth.
                </p>
              </div>
              <div className="bg-[#d0d370] px-3 pb-10">
                <h2 className="text-[#c62929] text-[26px] md:text-[36px] lg:text-[40px] font-rubik-vinyl font-bold text-center pt-10">
                  Our Misson
                </h2>
                <p className="px-[6px]">
                  To be a leading provider of innovative digital education that
                  transforms learning into an engaging, accessible, and
                  effective journey, enabling students to achieve academic
                  excellence and critical thinking skills for a successful
                  future.
                </p>
              </div>
            </div>
          </div>
          <div className="my-[20px] md:-mr-[14px] order-first">
            <div className="">
              <img
                src="/images/directorImage.jpeg"
                className="w-[93%] h-[93%] rounded-[10px] my-auto shadow-md shadow-gray-300 mt-[1.5vw] mx-auto"
                alt="Vision and Mission of Optimal Classes Varanasi"
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

export default MissionVision;
