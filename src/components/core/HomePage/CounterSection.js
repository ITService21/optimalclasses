import React from "react";
import Counter from "../../common/Counter";
function CounterSection() {
  return (
    // fae8b8
    <section className="text-center py-16 text-white bg-gradient-to-r from-[#C6EA8D] via-[#FE90AF] to-red-500 pt-[90px]">
      <div className=""></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 lg:gap-8 justify-center items-center w-[80vw] md:w-[58vw] lg:w-[90vw] mx-auto">
        {/* First Card */}
        <div className="mx-auto relative flex flex-col justify-center w-[80vw] sm:w-[250px] h-[280px] rounded-lg bg-yellow-100 group overflow-hidden">
          <div className="transition-all duration-300 group-hover:mb-32">
            <div className="text-4xl font-bold text-[#272727]">
              <Counter targetNumber={8} duration={1000} className="counter" />
            </div>
            <div className="text-gray-600">Dedicated Teachers</div>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative flex flex-col justify-center w-[80vw] sm:w-[250px] h-[280px] rounded-lg bg-pink-100 group overflow-hidden">
          <div className="transition-all duration-300 group-hover:mb-32">
            <div className="text-4xl font-bold text-[#272727]">
              <Counter targetNumber={10} duration={1000} className="counter" />
            </div>
            <div className="text-gray-600">Members</div>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative flex flex-col justify-center w-[80vw] sm:w-[250px] h-[280px] rounded-lg bg-blue-100 group overflow-hidden">
          <div className="transition-all duration-300 group-hover:mb-32">
            <div className="text-4xl font-bold text-[#272727]">
              <Counter targetNumber={300} duration={1000} className="counter" />
            </div>
            <div className="text-gray-600">Students</div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="relative flex flex-col justify-center w-[80vw] sm:w-[250px] h-[280px] rounded-lg bg-orange-400 group overflow-hidden">
          <div className="transition-all duration-300 group-hover:mb-32">
            <div className="text-4xl font-bold text-[#272727]">
              <Counter targetNumber={30} duration={1000} className="counter" />
            </div>
            <div className="text-gray-600">Toppers</div>
          </div>
        </div>
      </div>

      {/* Slanted Line */}
      {/* <div className="relative w-full h-0 border-t-[150px] border-transparent border-r-[160vw] border-r-white transform rotate-2 -mt-10 -ml-32 -mb-24"></div> */}
    </section>
  );
}

export default CounterSection;
