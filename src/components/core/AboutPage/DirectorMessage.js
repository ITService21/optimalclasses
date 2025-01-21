import React from "react";

function DirectorMessage() {
  return (
    <div>
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
          Director's message
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 px-4 md:px-10 ">
          <div className="flex flex-col">
            <div
              className={`text-black text-[18px] font-cinzel  md:my-[40px] text-justify flex md:gap-5 flex-col transition-all duration-300`}
            >
              Dear Students,
              <br />
              Welcome to Optimal Classes, a place where learning meets
              excellence! Since our establishment in 2022, it has been our
              mission to empower young minds and help shape a brighter future
              for every student who walks through our doors. 
              <br />
              <br />
              At Optimal Classes,
              we firmly believe that education is more than just scoring
              marks—it’s about understanding concepts, applying knowledge, and
              mastering skills that will serve you throughout life. Our focus is
              on building a strong foundation, fostering critical thinking, and
              preparing you to face challenges with confidence and resilience.
              <br />
              <br />
              Success is not a coincidence; it is the result of consistent effort, hard work, and a hunger to learn. With our dedicated faculty, cutting-edge digital classrooms, and personalized study plans, we ensure that each of you receives the support and guidance needed to reach your goals. Whether you're aiming for academic excellence in school or preparing for competitive exams like IIT-JEE and NEET, we are here to guide you every step of the way.
              <br />
              <br />
              Remember, every challenge you face is a stepping stone to growth. Stay disciplined, remain focused, and always believe in your abilities. Success may demand patience, but with determination and perseverance, you can achieve anything you set your heart on.
              <br />
              <br />
              At Optimal Classes, we are more than just educators; we are
              mentors, motivators, and partners in your journey to success.
              Together, let’s aim for greatness and make your dreams a reality.
              <br />
              <br />
              Warm regards,
              <br />
              Shobhit Kumar Srivastava
              <br />
              Director
              <br />
              B.Tech (Mechanical Engineering)
              {/* <span className="text-[#ff3737]">Read More</span> */}
            </div>
          </div>
          <div className="my-[20px] md:-mr-[14px] order-first">
            <div className="">
              <img
                src="/images/directorImage.jpeg"
                className="w-[93%] h-[93%] rounded-[10px] my-auto shadow-md shadow-gray-300 mt-[1.5vw] mx-auto"
                alt="pic not load"
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
