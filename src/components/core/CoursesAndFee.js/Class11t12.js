import React from "react";
import SEO from "../../common/SEO";
import { SEO_DATA } from "../../../data/seoData";

const courses = [
  {
    name: "Pioneers (for class XI)",
    description: "Lead the way with in-depth preparation for Class XI and beyond.",
    image: "/images/PioneersClass11_.jpeg", // Replace with the actual image URL
    totalFee: "₹ 45,600",
    installments: ["₹ 18,240", "₹ 18,240", "₹ 9,120"],
  },
  {
    name: "Gurus (for class XII)",
    description: "Master your subjects with advanced learning strategies for Class XII.",
    image: "/images/GurusClass12_.jpeg", // Replace with the actual image URL
    totalFee: "₹ 45,600",
    installments: ["₹ 18,240", "₹ 18,240", "₹ 9,120"],
  },
];

const FeeStructure = () => {
  return (
    <div className=" bg-gradient-to-b from-[#FFECD2] to-[#FCB69F] py-10 px-2 md:px-8 lg:px-12">
      <SEO 
        title={SEO_DATA.class11t12.title}
        description={SEO_DATA.class11t12.description}
        keywords={SEO_DATA.class11t12.keywords}
        url={SEO_DATA.class11t12.url}
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
              alt={`${course.name} - PCM PCB Coaching in Varanasi at Optimal Classes`}
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
          <span className="font-semibold">One-Time Payment Discount:</span> ₹4000 for Class XI/XII.
        </p>
        <p className="text-lg text-gray-800 mt-2">
          <span className="font-semibold">Fee Submission Schedule:</span> Gap of 60 days between 1st and 2nd installments, and 45 days between 2nd and 3rd installments.
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
