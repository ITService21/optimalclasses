import React from "react";
import SEO from "../../common/SEO";
import { SEO_DATA } from "../../../data/seoData";

const courses = [
  {
    name: "Pre-Foundation (for class VI)",
    description: "Build a strong Pre-foundation with our tailored program for Class VII students.",
    image: "/images/Class_6.png", // Replace with the actual image URL
    totalFee: "₹ 22,200",
    installments: ["₹ 8,880", "₹ 8,880", "₹ 4,440"],
  },
  {
    name: "Foundation (for class VII)",
    description: "Build a strong foundation with our tailored program for Class VII students.",
    image: "/images/FoundationClass7_.jpeg", // Replace with the actual image URL
    totalFee: "₹ 22,200",
    installments: ["₹ 8,880", "₹ 8,880", "₹ 4,440"],
  },
  {
    name: "Spark (for class VIII)",
    description: "Ignite the spark of learning with our advanced curriculum for Class VIII.",
    image: "/images/SparksClass8_.jpeg", // Replace with the actual image URL
    totalFee: "₹ 22,200",
    installments: ["₹ 8,880", "₹ 8,880", "₹ 4,440"],
  },
  {
    name: "Maverick (for class IX)",
    description: "Empower young minds to excel in Class IX with a comprehensive learning experience.",
    image: "/images/MaverickClass9_.jpeg", // Replace with the actual image URL
    totalFee: "₹ 30,000",
    installments: ["₹ 12,000", "₹ 12,000", "₹ 6,000"],
  },
  {
    name: "Ace (for class X)",
    description: "Achieve excellence and ace your Class X exams with expert guidance.",
    image: "/images/AceClass10_.jpeg", // Replace with the actual image URL
    totalFee: "₹ 30,000",
    installments: ["₹ 12,000", "₹ 12,000", "₹ 6,000"],
  },
 
];

const FeeStructure = () => {
  return (
    <div className=" bg-gradient-to-b from-[#fff97e] to-[#cbfe90] py-10 px-2 md:px-8 lg:px-12">
      <SEO 
        title={SEO_DATA.class7t10.title}
        description={SEO_DATA.class7t10.description}
        keywords={SEO_DATA.class7t10.keywords}
        url={SEO_DATA.class7t10.url}
      />
      <h1 className="text-[#ff3434] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pb-10">Courses & Fee Structure (Session 2026-27)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-5">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 "
          >
            <img
              src={course.image}
              alt={`${course.name} - Coaching in Varanasi at Optimal Classes`}
              className="w-full p-4 rounded-md"
            />
            <div className="p-5 pt-3 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-blue-500">Total Fee: {course.totalFee}</p>
                <div className="mt-2">
                  <p className="text-gray-700">1st Installment: {course.installments[0]}</p>
                  <p className="text-gray-700">2nd Installment: {course.installments[1]}</p>
                  <p className="text-gray-700">3rd Installment: {course.installments[2]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 px-5 text-center">
        <p className="text-lg text-gray-800">
          <span className="font-semibold">One time fee payment: For one time fee payment will given 1500, 2100 and 3000 concessions
in fee for class VI/VII/VIII, class IX/X and XI/XII respectively .</span> 
        </p>
        <p className="text-lg text-gray-800 mt-2">
          <span className="font-semibold">Fee Submission Schedule:</span> Gap between I and II installment is of 60 days.
        </p>
        <p className="text-lg text-red-500 mt-2">
          <span className="font-semibold">Late Fee Penalty:</span> ₹50 per day.
        </p>
        <p className="text-lg text-gray-800 mt-2">
          <span className="font-semibold">Registration Fee:</span> ₹500.
        </p>
      </div>
    </div>
  );
};

export default FeeStructure;
