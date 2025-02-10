import React, { useState } from 'react';
import HotNotSlider from '../../sections/dashboard/hotOrNot/HotNotSlider';
import hotnot from '../../assets/images/hotnot.png';
import refresh from '../../assets/images/refresh.png';
import Button from '../../components/buttons/Button';
import heart from "../../assets/svgs/Heart 1.svg";
import filtericon from "../../assets/svgs/Filter 5.svg";
import search from "../../assets/svgs/search-normal.svg";
import Icon from '../../components/icons/Icon';
import PlaceOfResidenceModal from '../../components/models/settingsModals/PlaceOfResidenceModal';

const data = [
    {
        name: 'Kaiya Baptista',
        age: '27',
        location: '2 km',
        interests: ['Soccer Group', 'Traveling'],
        img: hotnot,
        city: 'Las Vegas, NV',
    },
    {
        name: 'Kaiya Baptista',
        age: '27',
        location: '2 km',
        interests: ['Soccer Group', 'Traveling'],
        img: hotnot,
        city: 'Las Vegas, NV',
        type: 'hot'
    },
    {
        name: 'Kaiya Baptista',
        age: '27',
        location: '2 km',
        interests: ['Soccer Group', 'Traveling'],
        img: hotnot,
        city: 'Las Vegas, NV',
    }
];

const RefreshScreen = ({ onRefresh }) => {
    return (
        <div className="flex flex-col justify-center items-center h-[90vh] ">
            <img src={refresh} alt="Refresh Icon" />
            <p className="text-normal text-[#9EA1AE] text-center">
                No users found, Press refresh button <br />
                below to see more profiles
            </p>
            <div>
                <Button
                    text="Refresh"
                    btnClassName="rounded-full bg-[#C61323] text-white w-[400px] text-center py-3 my-8"
                    handleClick={onRefresh}
                />
            </div>
        </div>
    );
};
const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
};

const HotOrNot = () => {
    const [showSlider, setShowSlider] = useState(false);
    const [modal, setModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(defaultCenter);

    return (
        <div className="p-3 lg:p-5">
            <PlaceOfResidenceModal
                isOpen={modal}
                onClose={() => setModal(false)}
                onSelectLocation={setSelectedLocation}
            />
            <div className="flex justify-between items-center mt-2 mx-3">
                <p className="text-lg font-semibold text-[25px]">Hot Or Not</p>

                <div className="flex justify-end gap-x-3 relative mb-12">
                    <Icon className="bg-white absolute right-16 z-30" handleClick={() => {
                        setModal(true)
                    }} icon={<img alt="Search" src={search} />} />
                    <Icon className="bg-white absolute right-8 z-20" icon={<img alt="Filter" src={filtericon} />} />
                    <Icon className="bg-white absolute " icon={<img alt="Heart" src={heart} />} />
                </div>
            </div>

            {showSlider ? (
                <HotNotSlider data={data} />
            ) : (
                <RefreshScreen onRefresh={() => setShowSlider(true)} />
            )}
        </div>
    );
};

export default HotOrNot;
