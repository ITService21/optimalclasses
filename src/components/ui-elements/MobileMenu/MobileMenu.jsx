import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const MobileMenu = ({ menuLinks }) => {
  const navigate = useNavigate();
  const [expandedLinkId, setExpandedLinkId] = useState(null);

  const onMenuItemClick = (index) => {
    if (expandedLinkId === index) {
      setExpandedLinkId(null);
    } else {
      setExpandedLinkId(index);
    }
  };

  return (
    <div className="absolute w-[calc(100vw-2.5em)] top-20 left-5 bg-[#f2f2f2] pb-[20px]">
      <div className="flex flex-col h-[calc(100%-4em)] m-8 overflow-auto">
        <ul>
          {menuLinks?.map((record, index) => (
            <>
              {console.log("svdfvdfv43", record)}
              <div className="relative group" key={record.name}>
                <li
                  className="py-3 font-semibold rounded-lg cursor-pointer lg:px-4"
                  onClick={() => onMenuItemClick(index)}
                >
                  <div className="flex justify-between text-[#ff0b0b]">
                    {record?.link ? (
                      <Link to={record?.link} className="text-[16px] font-bold">
                        {record.name}
                      </Link>
                    ) : (
                      <p className="text-[16px] font-bold">{record.name}</p>
                    )}
                    {Array.isArray(record?.subLinks) &&
                      record?.subLinks?.length !== 0 && (
                        <div className="w-8 h-8 p-1">
                          {expandedLinkId === index ? (
                            <ChevronUpIcon />
                          ) : (
                            <ChevronDownIcon />
                          )}
                        </div>
                      )}
                  </div>
                  {expandedLinkId === index && (
                    <div className="w-full h-full">
                      <ul className="">
                        {record?.subLinks?.map((subLink) => (
                          <li
                            className="pl-1 py-1 text-[#ff0b0b] cursor-pointer"
                            key={subLink?.name}
                          >
                            <Link
                              to={subLink.link}
                              className="flex items-center"
                            >
                              <div className="flex flex-col ml-1 py-2">
                                <p className="font-bold flex">
                                  <ChevronRightIcon className="w-6 h-6 p-1" />
                                  {subLink?.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {subLink?.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </div>
              <hr className="border-t-[1px] border-[#dcdcdc] w-full" />
            </>
          ))}
          <div>
            {/* <div className="mx-auto py-4 w-[200px]">
              {localStorage?.getItem("isAdmin") ? (
                <button
                  className="md:text-[12px] lg:text-[16px] ml-2 bg-[#ff601c] hover:opacity-[0.8] text-white font- py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={(e) => {
                    navigate("/admin-logout");
                  }}
                >
                  S.K.S (Admin )
                </button>
              ) : (
                <button
                  className="md:text-[12px] lg:text-[16px] ml-2 bg-[#ff0077] hover:opacity-[0.8] text-white font- py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={(e) => {
                    navigate("/admin-panel");
                  }}
                >
                  Admin Panel
                </button>
              )}
            </div> */}
          </div>
        </ul>
      </div>
    </div>
  );
};
