import React from 'react'
import HotNotSlider from '../../sections/dashboard/hotOrNot/HotNotSlider'
import hotnot from '../../assets/images/hotnot.png'
import refresh from '../../assets/images/refresh.png'
import Button from '../../components/buttons/Button'
import heart from "../../assets/svgs/Heart 1.svg";
import filtericon from "../../assets/svgs/Filter 5.svg";
import search from "../../assets/svgs/search-normal.svg";
import Icon from '../../components/icons/Icon'
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
        city: 'Las Vegas, NV',

        img: hotnot
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
        type: 'hot'

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
        city: 'Las Vegas, NV'

    },
    {
        name: 'Kaiya Baptista',
        age: '27',
        location: '2 km',
        interests: ['Soccer Group', 'Traveling'],
        img: hotnot,
        city: 'Las Vegas, NV'

    },
    {
        name: 'Kaiya Baptista',
        age: '27',
        location: '2 km',
        interests: ['Soccer Group', 'Traveling'],
        img: hotnot,
        city: 'Las Vegas, NV'

    }
]
const RefreshScreen = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[90vh] ">
            <img src={refresh} alt="" />
            <p className="text-normal text-[#9EA1AE] text-center">No users found, Press refresh button <br />
                below to see more profiles</p>
            <div>
                <Button
                    text={"Refresh"}
                    btnClassName={
                        "rounded-full bg-[#C61323] text-white w-[400px] text-center py-3 my-8"
                    }

                />
            </div>
        </div>
    )
}
const HotOrNot = () => {
    return (
        <div className="p-3 lg:p-5">
            <div className="flex justify-between items-center ">
                <p className="text-lg font-semibold text-[25px]">Hot Or Not</p>

                <div className="flex mx-5">
                    <Icon className={"bg-white"} icon={<img alt="" src={search} />} />
                    <Icon className={"bg-white"} icon={<img alt="" src={filtericon} />} />
                    <Icon className={"bg-white"} icon={<img alt="" src={heart} />} />
                </div>

            </div>
            {
                data?.length > 0 ?
                    <HotNotSlider data={data} /> : <RefreshScreen />
            }

        </div>
    )
}

export default HotOrNot
