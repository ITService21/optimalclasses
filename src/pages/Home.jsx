import React from 'react';
import PerfectPlatform from "../components/core/HomePage/body2";
import Features from "../components/core/HomePage/Feature";
import CounterSection from "../components/core/HomePage/CounterSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import StartSection from "../components/core/HomePage/StartSection";
import StatSection from "../components/core/HomePage/StatSection";
import useScrollToHash from '../hooks/useScrollToHash';   
import ContactForm from "../components/core/ContactUsPage/ContactForm";
import SEOContent from "../components/core/HomePage/SEOContent";
import SEO from "../components/common/SEO";
import { SEO_DATA } from "../data/seoData";

const Home = () => {
  
  useScrollToHash();   

  return (
    <div className=" md:mt-0 bg-white">
      <SEO 
        title={SEO_DATA.home.title}
        description={SEO_DATA.home.description}
        keywords={SEO_DATA.home.keywords}
        url={SEO_DATA.home.url}
      />
      <StartSection />
      {/* <PerfectPlatform /> */}
      <SEOContent />
      <StatSection />
      <Features />
      <CounterSection />
      <InstructorSection />
      <div className="py-20 bg-gradient-to-b from-[#ffa55b] to-[#34fce1]"><ContactForm/></div>
    </div>
  );
}

export default Home;
