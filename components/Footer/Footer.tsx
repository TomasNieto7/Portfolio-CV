import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#121212] h-32 flex items-center justify-center py-24 lg:py-0'>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
                <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">STomasio 2024 | All Rights Reserved</div>
                <div className="flex items-center space-x-10">
                    <p className="text-[16px] text-white opacity-20 cursor-pointer">Terms & Condition</p>
                    <p className="text-[18px] text-white opacity-20 cursor-pointer">Privacy Policy</p>
                    <p className="text-[18px] text-white opacity-20 cursor-pointer">Sitemap</p>
                </div>
            </div>
        </div>
    )
}

export default Footer