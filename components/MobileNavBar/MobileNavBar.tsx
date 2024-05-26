import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props{
  nav:boolean
  closeNav: () => void
}

const MobileNavBar = ({nav, closeNav}:Props) => {

  const navAnimation = nav?'translate-x-0':'translate-x-[-100%]'

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div className='nav-link-mobile'>INICIO</div>
        <div className='nav-link-mobile'>ACERCA</div>
        <div className='nav-link-mobile'>HABILIDADES</div>
        <div className='nav-link-mobile'>PROYECTOS</div>
        <div className='nav-link-mobile'>CONTACTO</div>
      </div>
      <div onClick={closeNav}
      className='absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#3da8ac]'>
        <XMarkIcon/>
      </div>
    </div>
  )
}

export default MobileNavBar