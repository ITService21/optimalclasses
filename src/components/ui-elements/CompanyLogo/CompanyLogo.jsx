import { Link } from "react-router-dom";

export const CompanyLogo = () => {
  return (
    <Link to="/home" className="flex items-center">
      <div className="    self-center text-xl font-bold text-gray-800 whitespace-nowrap dark:text-white hover:text-gray-200">
       <img src="/images/comapny-logo3.png" className="w-[45vw] md:w-[29vw] lg:w-[18vw]" alt="company logo"></img>
      </div>
    </Link>
  );
};
