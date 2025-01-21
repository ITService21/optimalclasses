import { Link } from "react-router-dom";

export const SubLinksBox = (props) => {
  const { subLinks } = props;
  return (
    <div className="absolute top-10 md:top-8 lg:top-[32px] xl:top-[36px] bg-white group-hover:flex">
      <ul className="">
        {subLinks?.map((subLink) => {
          return (
            <li
              key={subLink.name}
              className="hover:bg-gray-50 flex items-center justify-start cursor-pointer font-bold"
            >
              <Link to={subLink.link} className="flex items-center">
                <div className={`flex items-center justify-center`}></div>
                <div className="flex flex-col w-[250px]">
                  <div className="text-[#ff0b0b] whitespace-nowrap pl-4 py-4">
                    {subLink.name}
                  </div>
                  <hr className="border-t-[1px] border-[#dcdcdc]" />
                </div>
              </Link>
            </li>
          );
        })}
 
      </ul>
    </div>
  );
};
