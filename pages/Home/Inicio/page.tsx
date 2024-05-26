import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'


const Inicio = () => {
    return (
        <div className="h-[100vh] w-full relative">
            <img src="./img/imgF.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute w-full h-full flex flex-col items-center justify-center z-50">
                <p className="text-[2.5rem] h-[6rem] text-white sm:text-[3rem] sm:mb-2 md:text-[4rem] md:mb-6 lg:text-[5rem] lg:mb-10">Bienvenid@s a mi sitio</p>
                <button className="hover:bg-white transition-all duration-200 py-[1rem] w-40 text-[18px] rounded-xl font-bold uppercase bg-[#55e6a5] text-black flex items-center  justify-center">
                    CONTACTAME
                </button>
            </div>
        </div>
    )
}

export default Inicio
