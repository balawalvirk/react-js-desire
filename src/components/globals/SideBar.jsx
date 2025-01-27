import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import apple from "../../assets/images/app.png";
import playStore from "../../assets/images/appleStore.png";
import logo from "../../assets/images/dashboardLogo.png";
import { sidebarLinks } from "../../DummyData";
const SideBar = ({ routes, toggle, isOpen }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div
      className={`w-[300px] h-screen p-6 relative transition-all  bg-white shadow-2xl ${
        isOpen ? "sidebar-show " : "sidebar-hidden"
      } `}
    >
      <div className="flex justify-between">
        <div className="flex items-center mb-14">
          <img src={logo} alt="" className="w-full" />
        </div>
        <RxCross1
          className="text-yellow block lg:hidden cursor-pointer"
          onClick={toggle}
        />
      </div>
      <nav className=" p-0 w-full flex flex-col flex-wrap">
        <ul className="space-y-3">
          {sidebarLinks?.map((item, index) => {
            if (item?.isMenu) {
              return (
                <li key={index}>
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-base text-[#74747E] rounded hover:text-[#C61323] ${
                      location.pathname === item.link
                        ? "text-[#C61323] font-bold"
                        : ""
                    }`}
                    to={item?.link}
                  >
                    <img
                      src={
                        location.pathname === item.link
                          ? item.selectedIcon
                          : item?.unselectedIcon
                      }
                      alt=""
                    />
                    {item?.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
      <div className="absolute bottom-5 w-[200px]">
        <div className="flex justify-center items-center gap-x-3">
          <div className="size-14 rounded-full bg-white shadow-lg flex justify-center items-center">
            <img src={apple} alt="" />
          </div>
          <div className="size-14 rounded-full bg-white shadow-lg flex justify-center items-center">
            <img src={playStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
