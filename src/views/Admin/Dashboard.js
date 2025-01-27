import { useState } from "react";
import searchFilter from "../../assets/images/searchFilter.png";
import Button from "../../components/buttons/Button";
import { profiles } from "../../DummyData";

import HomePageHeader from "../../components/headers/HomePageHeader";
import SearchFilterModal from "../../components/models/homePageModals/SearchFilterModal";
import GoldProfiles from "../../sections/dashboard/home/GoldProfiles";
import VipProfiles from "../../sections/dashboard/home/VipProfiles";
const Dashboard = () => {
    const [filterModal, setFilterModal] = useState(false);
    const [positionModal, setPositionModal] = useState(false);
    return (
        <div className="p-3 lg:p-5">
            <SearchFilterModal
                isOpen={filterModal}
                setFilterModal={setFilterModal}
                onClose={(prev) => setFilterModal(!prev)}
                setPositionModal={setPositionModal}
                positionModal={positionModal}
            />
            <HomePageHeader
                setFilterModal={setFilterModal}
                setPositionModal={setPositionModal}
            />
            {profiles?.length > 0 ? (
                <>
                    <VipProfiles />
                    <GoldProfiles />
                </>
            ) : (
                <div className="flex flex-col justify-center items-center h-[90vh]">
                    <img src={searchFilter} alt="" />
                    <div>
                        <Button
                            text={"Customize Search Filter"}
                            btnClassName={
                                "rounded-full bg-[#C61323] text-white w-[400px] text-center py-3 my-8"
                            }
                            handleClick={() => {
                                setFilterModal(true);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
