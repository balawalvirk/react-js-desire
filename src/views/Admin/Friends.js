import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/svgs/menu.svg";
import { FriendListCard } from "../../components/card/Cards";
import Icon from "../../components/icons/Icon";
import DropdownMenu from "../../components/inputs/DropdownMenu";

import { friendsList } from "../../DummyData";
import InviteFriendsModal from "../../components/models/homePageModals/InviteFriendsModal";
const Friends = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const menuItems = [
        {
            label: "Invite Friends",
            action: () => setIsOpen(true),
        },
        {
            label: "Block Users",
            action: () => navigate("/admin/block-users")
        },
    ];
    return (
        <div className="p-3 lg:p-5">
            <InviteFriendsModal isOpen={isOpen} onClose={(prev) => setIsOpen(!prev)} />
            <div className="flex justify-between items-center ">
                <p className="text-lg font-semibold text-[25px]">Friends</p>
                <DropdownMenu
                    menuItems={menuItems}
                    icon={
                        <Icon
                            icon={<img src={menu} className="size-5" />}
                            className={"font-bold"}
                        />
                    }
                    buttonClassName="bg-white"
                    dropdownClassName="w-44 rounded-lg shadow-xl"
                    itemClassName="text-black"
                    onOpen={() => console.log("Dropdown opened")}
                    onClose={() => console.log("Dropdown closed")}
                />
            </div>
            <div className="grid grid-cols-2 border-2 border-lightSecondary rounded-full py-2 lg:py-3 mt-10 mb-8 font-semibold">
                <div className="flex justify-center cursor-pointer" onClick={() => navigate('/admin/friend-requests')}>
                    <p className="text-sm lg:text-normal">
                        Friend Requests <span className="text-primary">(3)</span>
                    </p>
                </div>
                <div className="flex justify-center cursor-pointer" onClick={() => navigate('/admin/request-sent')}>
                    <p className="text-sm lg:text-normal">
                        Request Sent <span className="text-primary">(4)</span>
                    </p>
                </div>
            </div>
            <div>
                <p className="text-normal font-semibold ">All Friends (16)</p>
                {friendsList?.map((i) => (
                    <FriendListCard
                        name={i?.name}
                        location={i?.location}
                        distance={i?.distance}
                        img={i?.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Friends;
