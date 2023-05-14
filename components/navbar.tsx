import React, { useCallback, useState, useEffect } from "react";
import NavbarItem from "./navbaritem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "./mobilemenu";
import AccountMenu from "./accountmenu";

const TOP_OFFSET = 66;
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [TOP_OFFSET]);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);
  return (
    <nav className="w-full fixed z-40">
      <div
        className={`        
        px-4
        md:px-16
        py-6
        flex
        flex-row
        items-center
        transition
        duration-500
        ${showBackground ? "bg-zinc-900/90" : ""}
        `}
      >
        <img src="/images/logo.png" className="h-4 lg:h-7" alt="logo" />
        <div
          className="
        flex-row
        ml-8
        gap-7
        hidden
        lg:flex
        "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Movies" />
          <NavbarItem label="Series" />
          <NavbarItem label="Anime" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="Browse by language" />
          <NavbarItem label="Favourites" />
        </div>
        {/* mobile menu div */}
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row item-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        {/* profile div */}
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>
          {/* profile menu */}
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer realtive"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="blue profile" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
