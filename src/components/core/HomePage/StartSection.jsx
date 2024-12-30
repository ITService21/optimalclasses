import React from "react";
import Lottie from "react-lottie";
import { FaGoogle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '@fontsource/roboto';
import "./style.css"
const StartSection = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: "/lottie/pinkBacteria.json",
  };
  return (
    <div className="relative rounded-b-full">
      {/* Image Section */}
      {/* <img
        src="/images/startImage.jpg"
       className="w-[100vw] h-auto opacity-[0.6]"
        alt="img loading..."
      /> */}
      <Lottie options={defaultOptions} />
 
      {/* Text Content */}
      <div className="absolute top-[30%] w-full h-full flex flex-col md:flex-row justify-between items-start px-8">
        <div className="w-[80vw] mx-auto">
          <h1 className="text-[90px] text-white text-center font-roboto font-thin">
            Start{" "}
            <b>
              <u>learning</u>
            </b>{" "}
            a new language today{" "}
            <b>
              <u>with the best</u>
            </b>{" "}
            online tutors!
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default StartSection;
