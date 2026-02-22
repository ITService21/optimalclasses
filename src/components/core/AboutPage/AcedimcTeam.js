import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import imageCompression from "browser-image-compression";
import Button from "../../common/Button";
import Input from "../../common/Input";
import Loader from "../../common/Loader"
import { academicTeam } from "../../../data/ouracademicteam"
import SEO from "../../common/SEO";
import { SEO_DATA } from "../../../data/seoData";

function AcademicTeam() {
  const apiUrl = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL;

  return (
    // <div className="w-[100vw] bg-[#ffffff] bg-gradient-to-b from-[#ffe6e9] to-[#cbfe90]">
    <div className="w-[100vw] bg-[#f3ffff] bg-gradient-to-b ">
      <SEO 
        title={SEO_DATA.acedemicTeam.title}
        description={SEO_DATA.acedemicTeam.description}
        keywords={SEO_DATA.acedemicTeam.keywords}
        url={SEO_DATA.acedemicTeam.url}
      />
      {/* <Loader loading={loader}/> */}
      <div className="text-[#db2929] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
        Our Academic Team
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 list-none ">
        {academicTeam?.map((teacher) => {
          return (
            <li
              key={teacher?._id}
              className="bg-gradient-to-b from-[#64fff5] to-[#94fef7] shadow-lg mx-4 md:mx-20 lg:mx-32 p-6 mb-10 rounded-2xl hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <img
                src={teacher?.photo}
                alt={teacher?.name}
                className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] mx-auto rounded-full shadow-md border-4 border-blue-300"
              />
              <h3 className="font-sans font-bold text-[22px] md:text-[26px] text-blue-700 text-center mt-4">
                {teacher?.title}
              </h3>
              <p className="font-serif font-semibold text-[20px] md:text-[24px] text-gray-700 text-center mt-2">
                {teacher?.name}
              </p>
              <p className="font-mono font-medium text-[18px] md:text-[20px] text-gray-600 text-center mt-1">
                {teacher?.education}
              </p>
              {/* <p className="font-mono text-[16px] md:text-[18px] text-gray-500 text-center mt-2">
                {teacher?.phone}
              </p> */}
            </li>
          );
        })}

      </ul>
    </div>
  );
}

export default AcademicTeam;
