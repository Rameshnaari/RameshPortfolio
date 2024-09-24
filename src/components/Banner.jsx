import React from 'react'
import ProfilePhoto from "../assets/profile-pictures/user1.jpg"
import bannerbackground from "../assets/BannerForText.jpg";
export const Banner = () => {
    return (

        <div style={{
            backgroundImage: `url(${bannerbackground})`,
            backgroundSize: "cover",
        }} className='main-container flex item-center'>
            <div className='w-full flex'>
                {/* Text Section */}
                <div className=' w-full flex justify-center'>
                    <div className='w-2/3 space-y-2 ms-10'>
                        <h3 className='text-3xl font-semibold'> Hi I am
                        </h3>
                        <h1 className='text-3xl font-bold'> Ramesh Nari</h1>
                        <h2 className='text-3xl '>I am Fullstock delveloper</h2>
                        <p className='mt-3'> paragrap</p>
                        <br />

                        <div className='icons-container flex space-x-5'>
                            <a className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i class="fa-brands text-4xl fa-facebook"></i>
                            </a>
                            <a className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i class="fa-brands text-4xl fa-instagram"></i>
                            </a>
                            <a className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i class="fa-brands text-4xl fa-youtube"></i>
                            </a>
                            <a className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800'>
                                <i class="fa-brands text-4xl fa-linkedin-in"></i>
                            </a>
                        </div>
                        <a className="px-3 py-2" href='/contact'>Contact Me</a>
                    </div>
                </div>
                <div className='border w-full flex justify-center' >
                    {/* Image Section */}
                    <img className="rounded-full shadow lg w-fit" src={ProfilePhoto} />
                </div>
            </div>
        </div>
    )
} 
