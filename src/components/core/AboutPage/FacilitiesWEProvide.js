import React from "react";
import {
  FaChalkboardTeacher,
  FaBrain,
  FaClipboardList,
  FaMedal,
  FaCalendarCheck,
  FaBook,
  FaFileAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import SEO from "../../common/SEO";
import { SEO_DATA } from "../../../data/seoData";

const Facilities = () => {
  return (
    <div>
      <SEO 
        title={SEO_DATA.studentJourney.title}
        description={SEO_DATA.studentJourney.description}
        keywords={SEO_DATA.studentJourney.keywords}
        url={SEO_DATA.studentJourney.url}
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
      {/* Content */}
      <div className="facilities bg-gradient-to-b from-[#C6EA8D] to-[#E2D1C3] rounded-lg shadow-lg  mx-auto p-3 pb-[80px]">
        <h2 className="text-[#da2424] text-[28px] md:text-[38px] lg:text-[42px] font-rubik-vinyl font-bold text-center pt-4 md:pt-8  tracking-wider">
        Student’s Journey Inside Optimal Classes
        </h2>
        {/* Image content */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:gap-6 lg:gap-10 px-6 md:px-10 mt-8 md:mt-12">
          <img
            src="/images/journeyInside1.jpg"
            className="rounded-[10px] object-cover h-[300px] w-full"
            alt="Student Journey at Optimal Classes Varanasi - Digital Classroom Experience"
          />
          <img
            src="/images/inside_journey2.jpg"
            className="rounded-[10px] object-cover h-[300px] w-full hidden md:block "
            alt="Student Journey at Optimal Classes Varanasi - Digital Classroom Experience"
          />
          <img
            src="/images/journeyInside2.JPEG"
            className="rounded-[10px] object-cover h-[300px] w-full hidden md:block"
            alt="Student Journey at Optimal Classes Varanasi - Digital Classroom Experience"
          />
        </div>

        <ul className="space-y-6 mt-6 md:pl-6 lg:pl-8">
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className=" pt-1">
                  <FaChalkboardTeacher className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Digital Classrooms
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Our classrooms are equipped with state-of-the-art technology
                    to provide a dynamic and interactive learning experience
                    through multimedia tools.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className=" pt-1">
                  <FaBrain className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Focus on Critical Thinking
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    We emphasize conceptual understanding and critical thinking
                    skills to prepare students for academic and real-world
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className=" pt-1">
                  <FaClipboardList className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Balanced Preparation
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Our curriculum is designed to balance board exam preparation
                    with competitive exams like IIT-JEE and NEET, ensuring
                    success in both.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className=" pt-1">
                  <FaMedal className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Proven Track Record
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                  With a proven track record of excellence, our students consistently achieve outstanding results, solidifying our reputation as a trusted leader in education.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className=" pt-1">
                  <FaCalendarCheck className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Regular Assessments
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Weekly tests conducted every Sunday help track student
                    progress, identify areas of improvement, and ensure exam
                    readiness.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className=" pt-1">
                  <FaBook className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Customized Study Material
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Our in-house experts create study materials tailored to
                    simplify complex topics while aligning with the latest
                    syllabus.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className=" pt-1">
                  <FaFileAlt className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Worksheets for Every Chapter
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Every chapter is supplemented with worksheets to ensure
                    students thoroughly understand and practice each topic.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="flex items-start space-x-4 border-b pb-4 border-[#ff3434]">
            <div>
              <div className="flex">
                <div className=" pt-1">
                  <FaQuestionCircle className="text-[#da2424] text-[25px]" />
                </div>
                <div className="ml-1 md:ml-2 lg:ml-3">
                  <h3 className="pl-1 md:pl-0 text-[22px] font-semibold text-[#da2424]">
                    Doubt Clarification Sessions
                  </h3>
                  <p className="text-[#000000] text-[16px] text-justify">
                    Dedicated sessions address individual queries, ensuring no
                    student is left behind and all doubts are clarified.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
};

export default Facilities;
