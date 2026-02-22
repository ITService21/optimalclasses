import React from "react";
import AboutImage from "../../../assets/Images/about_image.jpg";
import HighlightText from "./HighLightText";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../HomePage/Button";
import Lottie from "react-lottie";

const AboutSection = () => {
  return (
    <section id="about_section" className="diffSection bg-black pt-[60px] px-4">
      <div className="max-w-maxContent mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left part - Image */}
        <div className="w-full lg:w-[38%]">
          {/* <img
            src={AboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg object-cover object-center w-full h-auto lg:max-w-none border-none"
          /> */}
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              // path: "/lottie/darkThemeMove.json",
              path: "/lottie/think.json",
            }}
          />
        </div>

        {/* Right part - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 py-8">
          <h1 className="text-4xl text-white font-semibold text-center">
            What do you think about us? <HighlightText text={"Optimal classes"} />
          </h1>

          <p className="text-[16px] text-justify text-richblack-200 -mt-6">
            At Optimal Classes, we believe that every student has the potential
            to excel when provided with the right guidance and resources. Our
            mission is to create a supportive and dynamic learning environment
            that not only nurtures academic growth but also instills confidence
            and curiosity in our students. We see ourselves as more than just
            educators—we are mentors, motivators, and partners in every
            student’s journey. Our focus spans across Class 6 to Class 12,
            emphasizing academic excellence while offering tailored support for
            IIT-JEE and NEET preparation. With a team of experienced faculty,
            state-of-the-art digital tools, and a student-centric approach, we
            aim to empower learners to achieve their goals and unlock their true
            potential. At Optimal Classes, your success is our passion.
          </p>

          {/* <div className="flex -mt-4 mx-auto  pb-10">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Learning Today <FaArrowRight />
              </div>
            </CTAButton>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
