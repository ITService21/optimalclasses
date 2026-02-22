import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const SEOContent = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      title: "Class 6 to class 10 CBSE, ICSE and ISC Coaching",
      desc: "We provide comprehensive Class 6 to class 10 CBSE coaching in Varanasi, focusing on concept clarity, NCERT coverage and exam-oriented preparation.",
      icon: "📚",
      link: "/class-6t10"
    },
    {
      title: "PCM & PCB Coaching Institute in Varanasi",
      desc: "Optimal Classes is a leading PCM coaching institute in Varanasi and PCM/PCB coaching, offering expert guidance in Physics, Chemistry, Mathematics and Biology.",
      icon: "🔬",
      link: "/class-11t12"
    },
    {
      title: "IIT JEE Coaching in Varanasi",
      desc: "Our structured IIT JEE coaching in Varanasi helps students prepare for JEE Main and Advanced with advanced problem-solving techniques and regular mock tests.",
      icon: "🎯",
      link: "/iit-jee-neet"
    },
    {
      title: "NEET Coaching in Varanasi",
      desc: "We offer result-driven NEET coaching in Varanasi with experienced biology faculty, making us a preferred choice for students searching for NEET coaching in Varanasi.",
      icon: "🩺",
      link: "/iit-jee-neet"
    },
    {
      title: "ICSE / ISC Coaching",
      desc: "Optimal Classes also provides ICSE coaching and ISC coaching with a strong academic foundation for science students.",
      icon: "🏆",
      link: null
    },
    {
      title: "Foundation & Pre-Foundation Classes",
      desc: "Our foundation classes in Varanasi and pre foundation coaching help students build strong fundamentals from an early stage.",
      icon: "🌱",
      link: null
    },
    {
      title: "Science, Maths, English & Biology Coaching",
      desc: "We provide specialized science coaching in Varanasi, math coaching in Varanasi, and biology coaching in Varanasi for school and competitive exams.",
      icon: "✨",
      span: true,
      link: null
    }
  ];

  const benefits = [
    { text: "Experienced faculty members from top educational backgrounds", icon: "👨‍🏫" },
    { text: "Regular tests and doubt-solving sessions", icon: "📝" },
    { text: "Smart classrooms and interactive learning tools", icon: "💻" },
    { text: "Fully air-conditioned classrooms.", icon: "❄️" },
    { text: "Comprehensive study material designed for CBSE, ICSE, and State Board syllabi", icon: "📖" },
    { text: "Strong focus on foundation building for competitive exams like IIT JEE and NEET", icon: "🎓" }
  ];

  const faqs = [
    {
      q: "Q1. What subjects do you teach at Optimal Classes?",
      a: "We offer coaching in all major subjects including Physics, Chemistry, Biology, and Mathematics for CBSE, ICSE, and ISC students from Classes 8–12."
    },
    {
      q: "Q2. Do you provide IIT JEE and NEET preparation?",
      a: "Yes. We are a leading IIT JEE and NEET coaching institute in Varanasi with expert faculty, regular tests, and performance tracking.",
    },
    {
      q: "Q3. Are foundation and pre-foundation courses available?",
      a: "Absolutely. Our pre-foundation coaching in Varanasi helps younger students strengthen their basics early for future academic challenges."
    },
    {
      q: "Q4. Which locations do you serve?",
      a: "We serve students across BLW, Kakarmatta, Sunderpur, Lanka, Manduadih, Chitaipur, Cantt, Lahartara, Durgakund, and nearby areas."
    },
    {
      q: "Q5. Why choose Optimal Classes over other institutes?",
      a: "Our unique combination of experienced teachers, personalized attention, quality study materials, and consistent results makes us the best coaching institute in Varanasi.",   
    }
  ];

  const locations = [
    "BLW", "Sunderpur", "Susuwahi", "Bajardhia", "Chitaipur", 
    "Manduwadih", "Lahartara", "Lanka", "Naria", "Bhelupur", 
    "Khojwan", "Durgakund", "Shivpur", "Kakarmatta", "Bhagwanpur", 
    "Varanasi Cantonment"
  ];

  return (
    <>
      {/* SECTION 1: Hero SEO Section - Enhanced Design */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#fff5f5] via-white to-[#fffbeb] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#ff0b0b] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffd724] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0b0b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            {/* Animated Badge */}
            <div className="flex justify-center mb-10">
              <motion.span 
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#ff0b0b] to-[#b51616] text-white rounded-full text-sm md:text-base font-bold shadow-xl shadow-red-200 border-2 border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ 
                  boxShadow: ["0 10px 40px -10px rgba(255,11,11,0.3)", "0 10px 40px -10px rgba(255,11,11,0.5)", "0 10px 40px -10px rgba(255,11,11,0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xl">🏆</span> 
                <span className="tracking-wide">TOP RATED INSTITUTE</span>
              </motion.span>
            </div>

            {/* Main Heading with better styling */}
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-6 leading-tight font-cinzel"
              variants={fadeInUp}
            >
              <span className="text-black">Top Rated Coaching Institute in</span>
              <br />
              <span className="text-[#ff0b0b] relative">
                Varanasi, Uttar Pradesh
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 7 Q50 0 100 7 T200 7" stroke="#ffd724" strokeWidth="3" fill="none"/>
                </svg>
              </span>
            </motion.h1>

            {/* Content Card */}
            <motion.div 
              className="bg-white rounded-2xl p-6 md:p-10 shadow-xl shadow-gray-200 border border-gray-100 max-w-4xl mx-auto mt-10"
              variants={scaleIn}
            >
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 text-justify leading-relaxed"
                variants={fadeInUp}
              >
                <span className="text-[#ff0b0b] font-bold">Optimal Classes</span> is a top rated educational institute in Varanasi offering result-oriented coaching classes for <span className="font-semibold text-[#b51616]">CBSE, ICSE/ISC, IIT JEE and NEET</span> preparation. We are widely trusted as the best coaching institute in Varanasi for students of Class 6 to class 12, foundation and pre-foundation levels.
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-gray-600 text-justify leading-relaxed"
                variants={fadeInUp}
              >
                Located in <span className="font-semibold">Varanasi, Uttar Pradesh, India</span>, Optimal Classes is easily accessible for students searching for a coaching center in Varanasi.
              </motion.p>

              {/* Quick Highlights */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100"
                variants={staggerContainer}
              >
                {[
                  { icon: "📚", label: "Class 6-12" },
                  { icon: "🎯", label: "IIT JEE" },
                  { icon: "🩺", label: "NEET" },
                  { icon: "🏆", label: "Board Exams" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-[#fff5f5] to-[#fffbeb] rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-sm md:text-base font-semibold text-gray-700">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Decorative Divider */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-[#ffd724] rounded-full"></div>
                <div className="w-3 h-3 bg-[#ff0b0b] rounded-full"></div>
                <div className="w-12 h-1 bg-[#ffd724] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Why Choose Us - Green to Blue Gradient */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#BFF098] to-[#6FD6FF]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-[24px] md:text-2xl lg:text-4xl font-cinzel font-bold text-center mb-10 text-[#ff0b0b]"
          >
            Why Choose Optimal Classes in Varanasi?
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
            className="bg-[#f4f4f4] rounded-lg p-6 md:p-10 shadow-lg shadow-[#8b8b8b]"
          >
            <motion.p 
              className="text-base md:text-lg text-black mb-8 text-justify leading-relaxed"
              variants={fadeInUp}
            >
              At Optimal Classes, we focus on personalized learning, conceptual clarity, and result-driven preparation. Our experienced teachers and interactive sessions make us the most preferred coaching institute near you in Varanasi for both board and competitive exams.
            </motion.p>

            {/* Benefits Grid */}
            <div className="bg-white rounded-lg p-5 md:p-8 mb-8">
              <motion.p 
                className="text-xl md:text-2xl font-bold text-[#b51616] mb-6 text-center font-cinzel"
                variants={fadeInUp}
              >
                Our students benefit from:
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 bg-[#f4f4f4] rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                    <span className="text-black text-base md:text-lg">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.p 
              className="text-base md:text-lg text-black text-justify leading-relaxed"
              variants={fadeInUp}
            >
              Whether you are searching for "coaching classes in Varanasi" or "best tuition classes Varanasi", Optimal Classes is the most reliable choice for your child's future success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Courses Offered - Yellow to Green Gradient */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#fff97e] to-[#cbfe90]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-[24px] md:text-2xl lg:text-4xl font-cinzel font-bold text-center mb-10 text-[#ff0b0b]"
          >
            Courses Offered at Optimal Classes
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                onClick={() => course?.link && navigate(course?.link)}
                className={`group bg-[#f4f4f4] rounded-lg p-6 shadow-lg shadow-[#8b8b8b] hover:shadow-xl transition-all duration-300 ${course.span ? 'md:col-span-2' : ''} ${course.link ? 'cursor-pointer' : ''}`}
              >
                {/* Icon */}
                <div className="text-3xl mb-4 inline-block">
                  {course?.icon}
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-[#b51616] mb-3 group-hover:text-[#ff0b0b] transition-colors duration-300 font-cinzel">
                  {course?.title}
                </h4>
                <p className="text-black text-base md:text-lg leading-relaxed text-justify">
                  {course?.desc}
                </p>
                {course?.link && (
                  <div className="mt-4 text-[#ff0b0b] font-semibold text-sm group-hover:underline">
                    Learn More →
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Board Exams Success - Peach Gradient */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#FFECD2] to-[#FCB69F]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            className="bg-[#f4f4f4] rounded-lg shadow-lg shadow-[#8b8b8b] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#ff0b0b] py-4 md:py-6 px-6">
              <motion.h3 
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center font-cinzel"
                variants={fadeInUp}
              >
                🎓 Coaching for Board Exams and Competitive Success
              </motion.h3>
            </div>

            <div className="p-6 md:p-10">
              <motion.p 
                className="text-base md:text-lg text-black mb-8 leading-relaxed text-justify"
                variants={fadeInUp}
              >
                At Optimal Classes, we don't just prepare students for exams—we shape their academic future. Our specialized coaching for board exams in Varanasi ensures high scores with systematic revision plans, previous year paper discussions, and time management techniques. We also offer science coaching, math coaching, and biology coaching, making it easy for students to master difficult subjects.
              </motion.p>

              <motion.div 
                className="bg-[#b51616] rounded-lg p-5 md:p-6 text-white"
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-base md:text-lg leading-relaxed text-center">
                  Students from BLW, Kakarmatta, Sunderpur, Lanka, Manduadih, Chitaipur, Lahartara, and Durgakund trust us for consistent academic excellence. Our learning environment motivates students to aim higher and achieve their best potential.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Areas We Serve - Light Green Gradient */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#C6EA8D] to-[#E2D1C3]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.h4
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-[24px] md:text-2xl lg:text-4xl font-cinzel font-bold text-center mb-6 text-[#ff0b0b]"
          >
            📍 Areas We Serve Across Varanasi
          </motion.h4>

          <motion.p 
            className="text-base md:text-lg text-black mb-8 text-center leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our coaching centers and services are easily accessible from the following prime locations:
          </motion.p>

          {/* Locations grid */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {locations.map((loc, i) => (
              <motion.span
                key={i}
                variants={staggerItem}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-[#ffd724] hover:bg-[#ff0b0b] hover:text-white rounded-full text-black font-medium transition-all duration-300 cursor-default shadow-md"
              >
                {loc}
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            className="text-base md:text-lg text-black text-center leading-relaxed max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            If you're searching for "best coaching classes in Varanasi" or "coaching institute in Varanasi", you'll find Optimal Classes conveniently located and ready to help.
          </motion.p>
        </div>
      </section>

      {/* SECTION 6: FAQ - Pink Background */}
      <section className="py-12 md:py-20 bg-[#ffcdcd]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.h4
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-[24px] md:text-2xl lg:text-4xl font-cinzel font-bold text-center mb-10 text-[#ff0b0b]"
          >
            Frequently Asked Questions
          </motion.h4>

          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="group bg-[#f4f4f4] rounded-lg shadow-lg shadow-[#8b8b8b] p-5 md:p-6 transition-all duration-300 hover:shadow-xl"
              >
                <p className="text-lg md:text-xl font-bold text-[#b51616] mb-3 group-hover:text-[#ff0b0b] transition-colors duration-300">
                  {faq.q}
                </p>
                <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SEOContent;
