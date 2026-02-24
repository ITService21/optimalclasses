import React, { useState } from "react";
import { Link } from "react-router-dom";
const Features = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <section
      className="relative not-prose scroll-mt-[72px] text-white mt-[80px]"
      id="features"
    >
      <div className="bg-yellow-5 pt-[40px] pb-10">
        <div className="text-clip bg-clip-text font-bold text-[#ff0b0b] text-[24px] md:text-2xl lg:text-4xl text-center md:mb-4 px-3">
          Transforming Education in Varanasi
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 px-4 md:px-10 ">
          <div className="flex flex-col">
            <div
              className={`text-black text-[18px] font-cinzel  my-[40px] text-justify flex md:gap-5 flex-col ${
                expanded ? "" : "overflow-hidden max-h-[4000px]"
              } transition-all duration-300`}
            >
              Looking for the best coaching institute in Varanasi to boost
              academic excellence for students from Class 6 to 12? Your search
              ends here! Our institute is committed to nurturing young minds
              through exceptional academic support and a strong focus on
              conceptual clarity. With a team of highly experienced faculty, we
              aim to simplify complex topics in Physics, Chemistry, Biology, and
              Mathematics, laying a strong foundation for academic success. Our
              structured curriculum and engaging teaching techniques are
              designed to make learning both effective and enjoyable.
              <br />
              <br />
              Understanding that every student learns differently, we provide
              personalized mentoring and regular doubt-clearing sessions
              tailored to individual needs. Our comprehensive study materials,
              weekly tests, and periodic assessments help students track their
              progress and overcome challenges. We also emphasize continuous
              improvement through practice and revision, ensuring students excel
              in school exams while building long-term confidence in their
              abilities.
              <br />
              <br />
              Situated in the heart of Varanasi, our institute fosters a
              disciplined, goal-oriented environment ideal for academic growth.
              By addressing the core academic requirements of Classes 7 to 12,
              we prepare students not only for school exams but also for a
              lifetime of learning. Join us to experience a holistic approach to
              education and empower your child with the knowledge and skills to
              excel in every aspect of academics.
              {/* <span className="text-[#ff3737]">Read More</span> */}
            </div>
          </div>
          <div className=" my-[20px] md:-mr-[14px]">
            <img
              src="/images/slide005.jpeg"
              className="w-full h-full float-right rounded-[10px] shadow-md shadow-gray-300"
              alt="pic not load"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
