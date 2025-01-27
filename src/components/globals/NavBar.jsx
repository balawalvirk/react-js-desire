import React from "react";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
const NavBar = ({ toggle, isOpen }) => {

    return (
        <nav className="bg-[#f5f5f5] text-black shadow-lg " >
            <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="lg:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center " >
                            {isOpen ? (
                                <IoIosCloseCircleOutline
                                    size={30}
                                    className=" cursor-pointer"
                                    onClick={toggle}
                                />
                            ) : (
                                <FaBars size={30} className=" cursor-pointer"
                                    onClick={toggle}

                                />
                            )}
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                    aria-current="page"
                                >
                                    Construction AI
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;
