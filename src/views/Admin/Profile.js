import { useState } from "react";
import { RxChevronLeft } from "react-icons/rx";
import ProfileInformation from "../../sections/dashboard/profile/ProfileInformation";
import Requests from "../../sections/dashboard/profile/Requests";
import Revoke from "../../sections/dashboard/profile/Revoke";
const Profile = () => {
    const [selectedView, setSelectedView] = useState('profileInformation')


    const renderView = () => {
        switch (selectedView) {
            case 'profileInformation':
                return <ProfileInformation setSelectedView={setSelectedView} />
            case 'requests':
                return <Requests setSelectedView={setSelectedView} />
            case 'revoke':
                return <Revoke setSelectedView={setSelectedView} />
            default:
                break;
        }
    }
    return (
        <div className="p-3 lg:p-5 ">
            {renderView()}
        </div>
    );
};

export default Profile;
