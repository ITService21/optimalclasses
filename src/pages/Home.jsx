import React from 'react';
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import PerfectPlatform from "../components/core/HomePage/body2";
import Features from "../components/core/HomePage/Feature";
import CounterSection from "../components/core/HomePage/CounterSection";
import FeaturesSection from "../components/core/HomePage/Fourthsection";
import FAQSection from "../components/core/HomePage/Frequentlyaskques";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import StartSection from "../components/core/HomePage/StartSection";
import StatSection from "../components/core/HomePage/StatSection";
import useScrollToHash from '../hooks/useScrollToHash';   
import ContactForm from "../components/core/ContactUsPage/ContactForm"
const Home = () => {
  
  useScrollToHash();   

  return (
    <div className=" md:mt-0 bg-white">
      <StartSection />
      <PerfectPlatform />
      <StatSection />
   
        <Features />
        <CounterSection />
          <InstructorSection />
          <div className="py-20 bg-gradient-to-b from-[#ffa55b] to-[#34fce1]"><ContactForm/></div>
      {/* <FAQSection /> */}
      {/* <div className="relative mx-auto my-20 flex flex-col items-center justify-between gap-8 text-white mt-[30px] mb-[80px]">
        <h1 className="text-center text-4xl font-semibold -mb-[35px]"> Experiences shared by learners </h1>
        <ReviewSlider />
      </div> */}

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
