import React, { useRef } from "react";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import Lottie from "react-lottie";
import {Link} from 'react-router-dom'
const PerfectPlatform = () => {
  const animationRef5 = useScrollAnimation("animate-flipInX");
  const animationRef6 = useScrollAnimation("animate-flipInX");
  const animationRef7 = useScrollAnimation("animate-flipInX");
  const animationRef8 = useScrollAnimation("animate-flipInX");
  const animationRef9 = useScrollAnimation("animate-flipInX");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <section className="py-6 md:py-16">
      <h2 className="text-[14px] md:text-xl lg:text-2xl font-bold py-3 md:py-2 text-center mb-4 text-white bg-[#ff0b0b]">
        <span className="bg-gradient-to-b py-4 from-[#fff5f3] to-[#ffffff] text-transparent bg-clip-text font-bold">
        TOP RATED COACHING CLASSES IN VARANASI
        </span>
      </h2>

      <h2 className="text-[14px] md:text-xl lg:text-2xl md:mt-8 font-bold py-2 md:py-2 text-center text-white bg-[#ff0b0b] mb-10">
        <span className="bg-gradient-to-b py-4 from-[#fff5f3] to-[#ffffff] text-transparent bg-clip-text font-bold">
          OUR BATCHES
        </span>
      </h2>

      {/* <div className="flex flex-col md:flex-row md:flex-flow justify-center items-center"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 justify-center items-center -mt-2 md:mt-20 md:px-8">
        {/* <ScrollAnimation animateIn="flipInX"> */}
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center    transition-all duration-200 overflow-hidden hover:scale-105">
          {/* Lottie Animation */}
          <div className="relative z-10 w-[120px] mx-auto mb-4">
            <img src="/images/nurturing.webp" className="" alt="..." />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl text-[#b51616] font-cinzel font-semibold mb-2 transition-transform duration-200">
            Pre-Foundation
          </div>
          <div className="mx-[20%] py-1 relative z-10 text-xl font-[2px] bg-[#ffd724] rounded-[10px] text-black transition-transform duration-200 font-rubik-vinyl mb-8">
            Class 6 to 10
          </div>
          {/* Description */}
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify">
            Preparing for exams, building a strong foundation, or excelling
            academically? Our expert guidance and proven strategies help Class 6
            to 10 students master subjects like Science, Math, and English with
            ease. Engage in personalized mentoring, interactive learning
            methods, and confidence-building techniques tailored to every
            student’s needs. We ensure you’re well-prepared for school exams and
            future academic challenges, setting a solid foundation for higher
            studies and lifelong success.
          </span>
          {/* Button */}
          <Link
            type="button"
            className="relative z-10 text-center text-[16px] text-roboto sm:text-[16px] w-[260px] md:w-[80%] py-2 font-bold rounded-full bg-[#b51616] hover:bg-[#c84343] transition-all duration-100 text-white mt-4 mb-4"
            to="/class-6t10"
            onClick={scrollToTop}
          >
            Learn more
          </Link>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center     transition-all duration-200 overflow-hidden hover:scale-105">
          {/* Lottie Animation */}
          <div className="relative z-10 w-[120px] mx-auto mb-4">
            <img src="/images/foundation.webp" className="" alt="..." />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl text-[#b51616] font-cinzel font-semibold mb-2 transition-transform duration-200">
            Foundation
          </div>
          <div className="mx-[20%] py-1 relative z-10 text-xl font-[2px] bg-[#ffd724] rounded-[10px] text-black transition-transform duration-200 font-rubik-vinyl mb-8">
            Class 11th ,12th
          </div>
          {/* Description */}
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify">
            Transitioning into Class 11th and 12th? These crucial years are the
            foundation of your future success. Master advanced concepts in
            Physics, Chemistry, Mathematics, or Biology with our expert-led,
            personalized guidance. Our program equips you with essential
            problem-solving skills, effective study strategies, and the
            confidence to excel in board exams, competitive exams like JEE and
            NEET, and beyond. Unlock your potential and pave the way for a
            bright future today!
          </span>
          {/* Button */}
          <Link
            type="button"
            className="relative z-10 text-center text-[16px] text-roboto sm:text-[16px] w-[260px] md:w-[80%] py-2 font-bold rounded-full bg-[#b51616] hover:bg-[#c84343] transition-all duration-100 text-white mt-4 mb-4"
            to="/class-11t12"
            onClick={scrollToTop}
          >
            Learn more
          </Link>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
        <div className="py-12 group relative bg-[#f4f4f4] m-3 p-6 rounded-lg shadow-lg shadow-[#8b8b8b] text-center     transition-all duration-200 overflow-hidden hover:scale-105">
          {/* Lottie Animation */}
          <div className="relative z-10 w-[120px] mx-auto mb-4">
            <img src="/images/target.webp" className="" alt="..." />
          </div>
          {/* Title */}
          <div className="relative z-10 text-xl text-[#b51616] font-cinzel font-semibold mb-2 transition-transform duration-200">
             Aspiring Minds
          </div>
          <div className="mx-[20%] py-1 relative z-10 text-xl font-[2px] bg-[#ffd724] rounded-[10px] text-black transition-transform duration-200 font-rubik-vinyl mb-8">
            IIT-JEE / NEET
          </div>
          {/* Description */}
          <span className="relative z-10 text-black mb-4 block transition-opacity duration-200 text-justify">
            Dreaming of securing a seat in top IITs? Unlock your potential with
            our expert-led IIT-JEE preparation program. Gain mastery over
            Physics, Chemistry, and Mathematics through structured lessons,
            problem-solving sessions, and in-depth conceptual clarity. Our
            proven strategies, personalized mentoring, and rigorous test series
            ensure you're ready to excel in JEE Main and Advanced. Start your
            journey to IIT success today!
          </span>
          {/* Button */}
          <Link
            type="button"
            className="relative z-10 text-center text-[16px] text-roboto sm:text-[16px] w-[260px] md:w-[80%] py-2 font-bold rounded-full bg-[#b51616] hover:bg-[#c84343] transition-all duration-100 text-white mt-4 mb-4"
             to="/iit-jee-neet"
             onClick={scrollToTop}
          >
            Learn more
          </Link>
          {/* Hover Overlay (Optional for Visual Feedback) */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#e1e1e1] transition-all duration-200"></div>
        </div>
      </div>
    </section>
  );
};

export default PerfectPlatform;
