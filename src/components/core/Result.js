import React from "react";
import { studentsResult } from "../../data/results";
// {
//     year: 2024,
//     heading: "Best Performance Students in Acedemic 2024 from Optimal Classes",
//     class12: [{ above90: 30, above80: 45, above70: 64, firstDivision: 87 }],
//     class10: [{ above90: 30, above80: 45, above70: 64, firstDivision: 87 }],
//     class9: [{ above90: 30, above80: 45, above70: 64, firstDivision: 87 }],
//     class8: [{ above90: 30, above80: 45, above70: 64, firstDivision: 87 }],
//     class7: [{ above90: 30, above80: 45, above70: 64, firstDivision: 87 }],
//   },
function Result() {
  return (
    <div className="bg-[#e8e8e8] pb-16">
      <div className="text-[#db2929] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
        Our Acheivers
      </div>
      {studentsResult?.map((yearRecord) => {
        return (
          <div>
            <h2 className="text-[#1daa28] text-[24px] md:text-[30px] lg:text-[38px] font-rubik-vinyl font-bold text-center mx-2">
              {yearRecord?.heading}
            </h2>
            <div className="flex flex-col items-center mt-4">
              <h3 className="text-[#202020] text-[21px] md:text-[28px] lg:text-[30px] font-semibold font-cinzel text-start ">
                Best Performance in Class 12 :
              </h3>
              {yearRecord?.class12?.map((record) => {
                return (
                  <div className="mb-4">
                    {record?.above95 ? (
                      <h3 className="text-[#0f0f0f] text-[18px] md:text-[20px] lg:text-[20px] font-roboto text-start">
                        Total Students Score above 95% :
                        <span className="text-[#b51253] text-[18px] md:text-[20px] lg:text-[20px] font-semibold">{` ${record?.above95}`}</span>
                      </h3>
                    ):""}
                    <h3 className="text-[#0f0f0f] text-[18px] md:text-[20px] lg:text-[20px] font-roboto text-start">
                      Total Students Score above 90% :
                      <span className="text-[#b51253] text-[18px] md:text-[20px] lg:text-[20px] font-semibold">{` ${record?.above90}`}</span>
                    </h3>
                    <h3 className="text-[#0f0f0f] text-[18px] md:text-[22px] lg:text-[20px] font-roboto text-start">
                      Total Students Score above 80%:
                      <span className="text-[#b51253] text-[18px] md:text-[20px] lg:text-[20px]   font-semibold">{` ${record?.above80}`}</span>
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center mt-4">
              <h3 className="text-[#202020] text-[21px] md:text-[28px] lg:text-[30px] font-semibold font-cinzel text-start ">
                Best Performance in Class 10 :
              </h3>
              {yearRecord?.class10?.map((record) => {
                return (
                  <div className="mb-4">
                    {record?.above95 ? (
                      <h3 className="text-[#0f0f0f] text-[18px] md:text-[20px] lg:text-[20px] font-roboto text-start">
                        Total Students Score above 95% :
                        <span className="text-[#b51253] text-[18px] md:text-[20px] lg:text-[20px] font-semibold">{` ${record?.above95}`}</span>
                      </h3>
                    ):""}
                    <h3 className="text-[#0f0f0f] text-[18px] md:text-[20px] lg:text-[20px] font-roboto text-start">
                      Total Students Score above 90% :
                      <span className="text-[#b51253] text-[18px] md:text-[20px] lg:text-[20px] font-semibold">{` ${record?.above90}`}</span>
                    </h3>
                    <h3 className="text-[#0f0f0f] text-[18px] md:text-[22px] lg:text-[20px] font-roboto text-start">
                      Total Students Score above 80%:
                      <span className="text-[#b51253] text-[18px] md:text-[20px] lg:text-[20px]   font-semibold">{` ${record?.above80}`}</span>
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Result;
