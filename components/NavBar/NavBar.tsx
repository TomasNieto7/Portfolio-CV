import { Bars3Icon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

interface Props {
  openNav: () => void
}

const NavBar = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#06070e] shadow-md">
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-[#F4F4F4] font-bold'>
          PORTA
          <span className='text-[#3da8ac]'>FOLIO</span>
        </h1>
        <Link href={"#inicio"}><div className='nav-link'>Inicio</div></Link>
        <Link href={"#about"}><div className='nav-link'>Acerca</div></Link>
        <Link href={"#skills"}><div className='nav-link'>Habilidades</div></Link>
        <Link href={"#projects"}><div className='nav-link'>Proyectos</div></Link>
        <Link href={"#contact"}><div className='nav-link'>Contacto</div></Link>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#3da8ac]' />
        </div>
      </div>
    </div>
  )
}

export default NavBar
