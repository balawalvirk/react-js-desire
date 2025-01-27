import React from 'react'
import HotNotSlider from '../../sections/dashboard/hotOrNot/HotNotSlider'
import hotnot from '../../assets/images/hotnot.png'
const data = [
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
        city: 'Las Vegas, NV',

        img: hotnot
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
const HotOrNot = () => {
    return (
        <div className="p-3 lg:p-5">
            <div className="flex justify-between items-center ">
                <p className="text-lg font-semibold text-[25px]">Friends</p>
            </div>
            <HotNotSlider data={data} />

        </div>
    )
}

export default HotOrNot
