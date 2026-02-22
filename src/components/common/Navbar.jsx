import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { CompanyLogo } from "../ui-elements/CompanyLogo/CompanyLogo";
import { HamburgerButton } from "../ui-elements/HamburgerButton/HamburgerButton";
import { MenuLinks } from "../ui-elements/MenuLinks/MenuLinks";
import { MobileMenu } from "../ui-elements/MobileMenu/MobileMenu";
import { NavbarLinks } from "../../data/navbar-links";

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="flex items-center h-20 px-3 m-0 md:px-4 bg-[#000000] z-40 ">
        <div className="flex items-center justify-between w-full md:mx-4 lg:mx-8 2xl:w-[80em] 2xl:mx-auto">
          <div className="flex items-center justify-center">
            <div className="md:hidden">
              <HamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
            <div className="hidden md:block">
              <CompanyLogo />
            </div>
            <div className="absolute right-0 hidden ml-4 md:block">
              <MenuLinks menuLinks={NavbarLinks} />
            </div>
          </div>
          <div className="absolute block transform -translate-x-1/2 md:hidden left-1/2">
            <CompanyLogo />
          </div>
        </div>
        <div className="md:hidden z-[40]">
          {isMobileMenuOpen && <MobileMenu menuLinks={NavbarLinks} />}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
