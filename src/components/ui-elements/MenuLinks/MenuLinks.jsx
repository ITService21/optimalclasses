import { Link } from "react-router-dom"; // Using React Router for navigation

export const MenuLinks = ({ menuLinks }) => {
  return (
    <ul className="flex px-1 lg:px-4 space-x-4">
      {menuLinks.map((link) => (
        <li
          className="p-2 font-semibold rounded-lg cursor-pointer lg:px-4 hover:text-slate-700 text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-transform duration-300"
          key={link.name}
        >
          <Link
            to={link.link} // Path to navigate using React Router
            className="relative group"
          >
            {link.name}
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#20ff51] transition-all duration-200 group-hover:w-full "></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
