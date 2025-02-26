
import { signUp } from "./firebase/Config";
import AroundMe from "./views/Admin/AroundMe";
import BlockedUsers from "./views/Admin/BlockedUsers";
import Chat from "./views/Admin/Chat";
import Dashboard from "./views/Admin/Dashboard";
import Friends from "./views/Admin/Friends";
import FriendsRequests from "./views/Admin/FriendsRequests";
import HotOrNot from "./views/Admin/HotOrNot";
import Messages from "./views/Admin/Messages";
import Profile from "./views/Admin/Profile";
import RequestsSent from "./views/Admin/RequestsSent";
import Settings from "./views/Admin/Settings";

import Login from "./views/Auth/Login";
import PasswordReset from "./views/Auth/PasswordReset";

export const routes = {
    adminRoutes: [
        {
            name: "Dashboard",
            path: "/",
            component: Dashboard,
        },
        {
            name: "Friends",
            path: "/admin/friends",
            component: Friends,
        },
        {
            name: "Request Sent",
            path: "/admin/request-sent",
            component: RequestsSent,
        },
        {
            name: "Friends Requests",
            path: "/admin/friend-requests",
            component: FriendsRequests,
        },
        {
            name: "Block Users",
            path: "/admin/block-users",
            component: BlockedUsers,
        },
        {
            name: "Hot Or Not",
            path: "/admin/settings",
            component: Settings,
        },
        {
            name: "Settings",
            path: "/admin/hot-or-not",
            component: HotOrNot,
        },
        {
            name: "Around Me",
            path: "/admin/around-me",
            component: AroundMe,
        },
        {
            name: "Profile",
            path: "/admin/profile",
            component: Profile,
        },
        {
            name: "Messages",
            path: "/admin/messages",
            component: Messages,
        },
        {
            name: "Chat",
            path: "/admin/chat",
            component: Chat,
        },

    ],

    authRoutes: [
        { path: "/auth/account", component: Login },
        { path: "/auth/reset-password", component: PasswordReset },


    ],
};
