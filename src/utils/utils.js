import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsChat, BsCoin, BsDatabase } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoBagOutline, IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
export const settingTabs = [
    {
        icon: <CiUser size={25} />,
        name: 'Edit Profile',
        tab: '1'
    },
    {
        icon: <CiLocationOn size={25} />,
        name: 'Place of Residence',
        tab: '2'
    },
    {
        icon: <CiSearch size={25} />,
        name: 'My Search',
        tab: '3'
    },
    {
        icon: <BsCoin size={25} />,
        name: 'Buy Coins',
        tab: '4'
    },
    {
        icon: <BsCoin size={25} />,
        name: 'Coin Wallet',
        tab: '5'
    },
    {
        icon: <MdOutlineSubscriptions size={25} />,
        name: 'Subscription',
        tab: '6'
    },
    {
        icon: <IoBagOutline size={25} />,
        name: 'Restore Purchase',
        tab: '7'
    },
    {
        icon: <IoSettingsOutline size={25} />,
        name: 'App - Settings',
        tab: '8'
    },
    {
        icon: <BsChat size={25} />,
        name: 'Support',
        tab: '9'
    },
    {
        icon: <BsDatabase size={25} />,
        name: 'Admin Panel',
        tab: '10'
    },
    {
        icon: <IoLogOutOutline color="red" size={25} />,
        name: <label className="text-red-600">Sign Out</label>,
        tab: '11'
    }
]