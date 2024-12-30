import { Link } from "react-router-dom";

export const SubLinksBox = (props) => {
  const { subLinks, extraLinks } = props;
  return (
    <div className="absolute top-10 w-fit bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_0px_40px] shadow-slate-400 dark:shadow-slate-700 hidden group-hover:flex rounded-xl">
      <ul className="p-2 h-fit w-96 flex-col">
        {subLinks?.map((subLink) => {
          return <li
            key={subLink.name}
            className="h-16 hover:bg-gray-50 rounded-xl flex items-center justify-start cursor-pointer font-bold"
          >
            <Link to={subLink.link} className="flex items-center">
              <div
                className={`h-10 w-10 ml-5 flex items-center justify-center rounded-lg ${subLink.color}`}
              >
                <div className="h-3/5 w-3/5">
                  {subLink.icon}
                </div>
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-gray-600">
                  {subLink.name}
                </p>
                <p className="text-gray-400 text-xs">
                  {subLink.description}
                </p>
              </div>
            </Link>
          </li>
        })}
      </ul>
      {extraLinks && (
        <div className="flex">
          <div className="h-[calc(100%-3em)] my-auto w-[1px] bg-gray-300" />
          <ul className="w-56 p-2">
            {extraLinks.map((extraLink) => (
              <Link to={extraLink.link} key={extraLink.name} className="flex items-center w-full">
                <li className="p-2 h-10 hover:text-black rounded-lg flex items-center justify-start cursor-pointer text-sm font-semibold text-gray-400">
                  {extraLink.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
