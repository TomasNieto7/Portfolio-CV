import TextAnimation from '@/components/TextAnimation/TextAnimation'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'

const About = () => {
    return (
        <div className='w-full py-10 lg:py-0 bg-[#141c27] flex items-center'>
            <div className='w-full lg:h-[42rem]'>
                <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center'>
                    <div className='flex flex-col justify-around h-96'>
                        <div>
                            <h2 className='text-[35px] md:text-[50px] text-[#F4F4F4] font-bold'>
                                Tomás
                                <span className='text-[#F4F4F4]'> Nieto</span>
                            </h2>
                            <TextAnimation />
                        </div>
                        <p className='text-[#F4F4F4]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sint inventore consequuntur repudiandae consectetur natus ratione harum blanditiis laboriosam, labore dignissimos sit soluta voluptatem quia corporis facilis ipsum ex maxime.</p>
                        <div className='px-[2rem] w-56 rounded-xl hover:bg-white transition-all duration-200 py-[1rem] text-[18px]
                            font-bold uppercase bg-[#55e6a5] text-black flex items-center justify-center space-x-2'>
                            <button className='flex items-center justify-around w-full'>
                                <p>Descargar CV</p>
                                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src="./img/person1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About