import React, { useState } from "react";
import profile from "../../assets/images/image.jpeg";
import { SettingsTabCard } from "../../components/card/Cards";
import { settingTabs } from "../../utils/utils";
import MySearchModal from "../../components/models/settingsModals/MySearchModal";
import PlaceOfResidenceModal from "../../components/models/settingsModals/PlaceOfResidenceModal";
import BuyCoinsModal from "../../components/models/settingsModals/BuyCoinsModal";
import PayForCoinModal from "../../components/models/settingsModals/PayForCoinModal";
import SubscriptionModal from "../../components/models/settingsModals/SubscriptionModal";
import SupportModal from "../../components/models/settingsModals/SupportModal";
import MyCreditModal from "../../components/models/settingsModals/MyCreditModal";
import AppSettingsModal from "../../components/models/settingsModals/AppSettingsModal";
import EditProfileModal from "../../components/models/settingsModals/EditProfileModal";

const Settings = () => {

    const [screen, setScreen] = useState("");
    const [modal, setModal] = useState(false)
    const handleTabClick = (data) => {
        setScreen(data?.tab)
        setModal(true)
    };

    const renderItem = () => {
        switch (screen) {
            case '1':
                return <EditProfileModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
            case '2':
                return <PlaceOfResidenceModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
            case '3':
                return <MySearchModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
            case '4':
                return <BuyCoinsModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
            case '5':
                // return <PayForCoinModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
                return <MyCreditModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
            case '6':
                return <SubscriptionModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
            case '7':
                return
            case '8':
                return <AppSettingsModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
            case '9':
                return <SupportModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
            case '10':
                return
            case '11':
                return
            default:
                break;
        }
    }
    return (
        <div className="p-3 lg:px-5">
            {renderItem()}
            <div className="relative w-full h-36 lg:h-52 bg-[#272829] rounded-2xl shadow-lg mb-16 lg:mb-24">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <img
                        src={profile}
                        alt="Profile Image"
                        className="size-28 lg:size-40 rounded-full  shadow-xl object-cover t"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="text-center mb-5 lg:mb-4 mt-4 lg:mt-6">
                <p className="text-lg lg:text-xl font-bold text-center">Ethan Blake, 25</p>
                <p className="text-sm lg:text-normaltext-secondary">2177 Marigold Lane, United States</p>
            </div>
            <div>
                {settingTabs?.map((i, index) => {
                    return (
                        <SettingsTabCard
                            key={index}
                            data={i}
                            name={i?.name}
                            icon={i?.icon}
                            handleClick={handleTabClick}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Settings;
