import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import apple from "../../assets/images/app.png";
import playStore from "../../assets/images/appleStore.png";
import logo from "../../assets/images/dashboardLogo.png";
import { sidebarLinks } from "../../DummyData";

const SideBar = ({ toggle, isOpen }) => {
  const location = useLocation();

  return (
    <div
      className={`fixed md:static top-0 left-0 h-screen w-[300px] bg-white shadow-2xl transition-transform z-50 
      ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:w-[300px] md:z-0`}
    >
      {/* Toggle Button for Desktop */}
      <div className="relative">
        <div
          className="hidden md:flex rounded-full bg-white size-8 shadow-2xl justify-center items-center absolute right-[-20px] top-8 cursor-pointer"
          onClick={toggle}
        >
          <FaChevronLeft />
        </div>
      </div>

      {/* Logo & Close Button */}
      <div className="flex justify-between items-center mb-14 px-6 pt-6">
        <img src={logo} alt="Logo" className="w-full" />
        {/* <RxCross1
          className="text-yellow block md:hidden cursor-pointer"
          onClick={toggle}
        /> */}
      </div>

      {/* Sidebar Links */}
      <nav className="p-0 w-full flex flex-col">
        <ul className="space-y-3 mx-4">
          {sidebarLinks?.map(
            (item, index) =>
              item?.isMenu && (
                <li key={index}>
                  <Link
                    to={item?.link}
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-base rounded hover:text-[#C61323] transition-all
                  ${
                    location.pathname === item.link
                      ? "text-[#C61323] font-bold"
                      : "text-[#74747E]"
                  }`}
                    onClick={toggle} // Close sidebar on click
                  >
                    <img
                      src={
                        location.pathname === item.link
                          ? item.selectedIcon
                          : item.unselectedIcon
                      }
                      alt=""
                    />
                    {item?.title}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>

      {/* App Store Links */}
      <div className="absolute bottom-5 w-full flex justify-center items-center gap-3">
        <div className="size-14 rounded-full bg-white shadow-lg flex justify-center items-center">
          <img src={apple} alt="Apple Store" />
        </div>
        <div className="size-14 rounded-full bg-white shadow-lg flex justify-center items-center">
          <img src={playStore} alt="Play Store" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
