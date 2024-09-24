import React, { useState } from 'react'
import ProfilePhoto from "../assets/profile-pictures/user1.jpg"

export const About = () => {
    const [data, setData] = useState({
        image: ProfilePhoto,
        title: "Java Full Stock Developer",
        desc1: `first description`,
        desc2: `Second description`,
        actionButton: {
            title: "Read more..",
            link: "/readmore",
        },

    });
    return <>
        <div className='main-container bg-gray-100 boarder py-16'>
            <h1 className='text-center py-16 text-5xl underline font-bold'>About</h1>

            <div className='flex items-center'>
                {/* Image Container */}
                <div className='w-full flex justify-center' >
                    <img className='w-fit' src={data.image} alt=' Ramesh Naari' />
                </div>
                {/* Text Container */}
                <div className='w-full flex justify-center'>
                    <div className='sace-y-5 w-2/3'>
                        {/* </div> */}
                        <h1 className='text-5xl font-semibold'> {data.title} </h1>
                        <p> {data.desc1} </p>
                        <p> {data.desc2}</p>
                        <button className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'>{data.actionButton.title}</button>
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default About;