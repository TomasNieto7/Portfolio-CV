import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Skills = () => {
    return (
        <div className="bg-[#121212] pt-28 md:pt-[8rem] pb-[5rem]" id='skills'>
            <p className="heading">
                Mis <span className='text-[#3da8ac]'> Habilidades</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                <div className="bg-violet-700 hover:scale-110 h-[20rem] transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#F4F4F4]" />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Frontend
                    </h1>
                    <ul className='text-[15px] text-[F4F4F4] font-normal'>
                        <li>React</li>
                        <li>Next</li>
                    </ul>
                </div>
                <div className="bg-amber-700 hover:scale-110 h-[20rem] transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#F4F4F4]" />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Backend
                    </h1>
                    <ul className='text-[15px] text-[F4F4F4] font-normal'>
                        <li>Express</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="bg-cyan-700 hover:scale-110 h-[20rem] transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#F4F4F4]" />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Ingles
                    </h1>
                </div>
                <div className="bg-rose-700 hover:scale-110 h-[20rem] transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#F4F4F4]" />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Liderazgo
                    </h1>
                </div>
                <div className="bg-emerald-700 hover:scale-110 h-[20rem] transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#F4F4F4]" />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Trabajo en equipo
                    </h1>
                </div>
                <div className="bg-blue-700 hover:scale-110 h-[20rem] transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#F4F4F4]" />
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Solidaridad
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Skills