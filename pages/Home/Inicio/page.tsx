import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'


const Inicio = () => {
    return (
        <div className="h-[88vh] w-full relative">
            <img src="/img/imgF.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute w-full h-full flex flex-col items-center justify-center z-50">
                <p className="text-[2.5rem] h-[6rem] text-white sm:text-[3rem] sm:mb-2 md:text-[4rem] md:mb-6 lg:text-[5rem] lg:mb-10">Bienvenid@s a mi sitio</p>
                <button className="hover:bg-white transition-all duration-200 py-[1rem] w-40 text-[18px] rounded-xl font-bold uppercase bg-[#3da8ac] text-black flex items-center  justify-center">
                    CONTACTAME
                </button>
            </div>
        </div>
    )
}

export default Inicio

/*
<div className="inset-0 w-full h-full bg-[url('/img/imgF.jpg')] bg-cover bg-center absolute"></div>

<div className='px-[2rem] hover:bg-white transition-all duration-200 py-[1rem] text-[18px]
                font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                    <button>
                        <p>Descargar CV</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                    </button>
                </div>

 */