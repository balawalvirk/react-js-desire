import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/globals/SideBar";
import { FaAlignJustify } from "react-icons/fa";

const AdminLayout = ({ routes }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen((prev) => !prev);
    const [blur, setBlur] = useState(false)
    useEffect(() => {
        window.addEventListener('modal-open', (e) => {
            setBlur(e.detail.modal_open)
        })
    }, [window])

    return (
        <>
            <div className={`${blur ? "h-screen w-screen backdrop-blur-sm fixed bg-[#EECD591A]/20 z-[1200]" : ""}`}></div>
            <div className={`flex h-screen `}>
                <SideBar routes={routes} toggle={toggle} isOpen={isOpen} />

                <div className=" w-full relative overflow-y-scroll">
                    {
                        !isOpen && <FaAlignJustify size={30} className="block md:hidden m-2 cursor-pointer" onClick={toggle} />
                    }
                    <Routes>
                        {routes?.map((item, key) => {
                            let Component = item?.component;
                            return (
                                <Route key={key} path={item?.path} element={<Component />} />
                            );
                        })}
                    </Routes>

                </div>
            </div>
        </>
    );
};

export default AdminLayout;
