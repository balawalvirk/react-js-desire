import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/globals/SideBar";
import { FaAlignJustify } from "react-icons/fa";

const AdminLayout = ({ routes }) => {
    const [isOpen, setIsOpen] = useState(false);  // Default to closed for better UX
    const [blur, setBlur] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const handleModalOpen = (e) => setBlur(e.detail.modal_open);
        window.addEventListener("modal-open", handleModalOpen);

        return () => window.removeEventListener("modal-open", handleModalOpen);
    }, []);

    return (
        <>
            {blur && (
                <div className="fixed inset-0 backdrop-blur-sm bg-[#EECD591A]/20 z-[1200]"></div>
            )}
            <div className="flex h-screen relative">
                {/* Sidebar Overlay for Mobile Click to Close */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggle}></div>
                )}

                {/* Sidebar */}
                <SideBar toggle={toggle} isOpen={isOpen} />

                {/* Main Content */}
                <div className="w-full relative overflow-y-scroll">
                    {!isOpen && (
                        <FaAlignJustify size={30} className="block md:hidden m-2 cursor-pointer" onClick={toggle} />
                    )}
                    <Routes>
                        {routes?.map((item, key) => (
                            <Route key={key} path={item?.path} element={<item.component />} />
                        ))}
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
