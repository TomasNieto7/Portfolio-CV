import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Contact = () => {
    return (
        <div className="bg-[#121212] pt-[8rem]" id="contact">
            <div className="grid border-b-[1px] pb-[6rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]">
                <div className="flex items-center space-x-6">
                    <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <MapIcon className="w-[4rem] h-[4rem] text-black" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Direccion</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">Calle 9, New York</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <DevicePhoneMobileIcon className="w-[4rem] h-[4rem] text-black" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Celular</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">+525898964258</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <EnvelopeIcon className="w-[4rem] h-[4rem] text-black" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Email</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">example@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact