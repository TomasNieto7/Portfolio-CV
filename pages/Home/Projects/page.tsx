import React from 'react'

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-28 md:pt-[8rem] pb-[5rem]" id='projects'>
            <p className="heading">
                Mis <span className='text-[#3da8ac]'> Proyectos</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                <div className="bg-violet-700 flex flex-col items-center justify-center hover:scale-110 h-[20rem] transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Sistema De Ventas 
                    </h1>
                    <img src="./img/iconSV.png" alt="" className='w-40'/>
                </div>
                <div className="bg-sky-700 flex flex-col items-center justify-center hover:scale-110 h-[20rem] transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                        Sistema De Ventas 
                    </h1>
                    <img src="./img/iconGato.png" alt="" className='w-40'/>
                </div>
            </div>
        </div>
  )
}

export default Projects