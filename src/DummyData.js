import homesvg from "../src/assets/svgs/home-red.svg";
import aroundme from "../src/assets/svgs/aroundme.svg";
import hotornot from "../src/assets/svgs/hotOrNot.svg";
import friends from "../src/assets/svgs/friendsWeb.svg";
import settings from "../src/assets/svgs/settings.svg";
import chat from "../src/assets/svgs/chat.svg";
import friend from "../src/assets/images/friend.png";
import friend1 from "../src/assets/images/friend1.png";
import friend2 from "../src/assets/images/friend2.png";
import friend3 from "../src/assets/images/friend3.png";
import vip1 from "../src/assets/images/vip1.png";
import vip2 from "../src/assets/images/vip2.jpeg";
import vip3 from "../src/assets/images/vip3.jpeg";
import vip4 from "../src/assets/images/vip4.jpeg";
import vip5 from "../src/assets/images/vip5.jpeg";
import gold1 from "../src/assets/images/gold1.jpeg";
import gold2 from "../src/assets/images/gold2.jpeg";
import gold3 from "../src/assets/images/gold3.jpeg";
import gold4 from "../src/assets/images/gold4.jpeg";
import goldBadge from "../src/assets/images/goldBadge.png";
import vipBadge from "../src/assets/images/vipBadge.png";
import homewhite from "../src/assets/svgs/home-white.svg"
import hotnot2 from "../src/assets/svgs/hotnot-red.svg"
import aroundme2 from "../src/assets/svgs/aroundme-red.svg"
import settings2 from "../src/assets/svgs/setting-red.svg"
import friends2 from "../src/assets/svgs/friends-red.svg"
import chat2 from "../src/assets/svgs/chat-red.svg"
export const sidebarLinks = [
    {
        title: "Home",
        link: "/",
        selectedIcon: homesvg,
        unselectedIcon: homewhite,
        isMenu: true,
    },
    {
        title: "Around Me",
        link: "/admin/around-me",
        icon: aroundme,
        selectedIcon: aroundme2,
        unselectedIcon: aroundme,
        isMenu: true,
    },
    {
        title: "Hot Or Not",
        link: "/admin/hot-or-not",
        icon: hotornot,
        isMenu: true,
        selectedIcon: hotnot2,
        unselectedIcon: hotornot,
    },
    {
        title: "Friends",
        link: "/admin/friends",
        icon: friends,
        isMenu: true,
        selectedIcon: friends2,
        unselectedIcon: friends,
    },
    {
        title: "Messages",
        link: "/admin/messages",
        icon: chat,
        isMenu: true,
        selectedIcon: chat2,
        unselectedIcon: chat,
    },
    {
        title: "Settings",
        link: "/admin/settings",
        icon: settings,
        selectedIcon: settings2,
        unselectedIcon: settings,
        isMenu: true,
    },
];
export const friendsList = [
    {
        name: "Ashlynn Korsgaard",
        location: "Miami, FL",
        distance: "12km",
        image: friend,
    },
    {
        name: "Cheyenne Philips",
        location: "Miami Beach, FL",
        distance: "8km",
        image: friend1,
    },
    {
        name: "Jaxon Montgomery",
        location: "Orlando, FL",
        distance: "15km",
        image: friend2,
    },
    {
        name: "Sienna Roberts",
        location: "Tampa, FL",
        distance: "20km",
        image: friend3,
    },
    {
        name: "Logan Hart",
        location: "Fort Lauderdale, FL",
        distance: "10km",
        image: friend1,
    },
    {
        name: "Ava Thompson",
        location: "West Palm Beach, FL",
        distance: "18km",
        image: friend,
    },
    {
        name: "Mason Rivera",
        location: "Naples, FL",
        distance: "25km",
        image: friend2,
    },
    {
        name: "Ella Jenkins",
        location: "Key West, FL",
        distance: "30km",
        image: friend3,
    },
];
export const profiles = [
    {
        type: "vip",
        img: vip1,
        name: "Anika Kenter",
        age: "28",
        location: "Miami, FL",
        distance: "12km",
        badge: vipBadge,
    },
    {
        type: "vip",
        img: vip2,
        name: "Anika Kenter",
        age: "28",
        location: "Miami, FL",
        distance: "12km",
        badge: vipBadge,
    },
    {
        type: "vip",
        img: vip3,
        name: "Anika Kenter",
        age: "28",
        location: "Miami, FL",
        distance: "12km",
        badge: vipBadge,
    },
    {
        type: "vip",
        img: vip4,
        name: "Anika Kenter",
        age: "28",
        location: "Miami, FL",
        distance: "12km",
        badge: vipBadge,
    },
    {
        type: "vip",
        img: vip5,
        name: "Anika Kenter",
        age: "28",
        location: "Miami, FL",
        distance: "12km",
        badge: vipBadge,
    },
    {
        type: "gold",
        img: gold1,
        name: "Anika Kenter",
        age: "28",
        location: "Miami, FL",
        distance: "12km",
        badge: goldBadge,
    },
    {
        type: "gold",
        img: gold2,
        name: "Anika Kenter",
        age: "28",
        location: "Miami, FL",
        distance: "12km",
        badge: goldBadge,
    },
    {
        type: "gold",
        img: gold3,
        name: "Anika Kenter",
        age: "28",
        location: "Miami, FL",
        distance: "12km",
        badge: goldBadge,
    },
    {
        type: "gold",
        img: gold4,
        name: "Anika Kenter",
        age: "28",
        location: "Miami, FL",
        distance: "12km",
        badge: goldBadge,
    },
];
export const chatList = [
    {
        name: "Ashlynn Korsgaard",
        lastMessage: "Sent 14 hrs ago",
        image: friend,
        type: "chat",
    },
    {
        name: "Cheyenne Philips",
        lastMessage: "Okay 🥰 . 1d",
        image: friend1,
        type: "chat",
    },
    {
        name: "Jaxon Montgomery",
        lastMessage: "I’ll be there waiting for you . 2d",
        image: friend2,
        type: "chat",
    },
    {
        name: "Sienna Roberts",
        lastMessage: "Sent 2d ago",
        image: friend3,
        type: "chat",
    },
    {
        name: "Logan Hart",
        image: friend1,
        callTime: "1 missed call . 1d ago",
        type: "anrufe",
    },
    {
        name: "Ava Thompson",
        image: friend,
        callTime: "23.10m . 16h ago",
        type: "anrufe",
    },
    {
        name: "Mason Rivera",
        image: friend2,
        callTime: "2.30m . 1h ago",
        type: "anrufe",
    },
    {
        name: "Ella Jenkins",
        image: friend3,
        callTime: "2.30m . 1h ago",
        type: "anrufe",
    },
];
