import MobileNavBar from '@/components/MobileNavBar/MobileNavBar'
import NavBar from '@/components/NavBar/NavBar'
import React, { useState } from 'react'
import Inicio from './Home/Inicio/page'


const HomePage = () => {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div className='bg-[#f2f2f2]'>
      <MobileNavBar nav={nav} closeNav={closeNav}/>
      <NavBar openNav={openNav}/>
      <Inicio/>
    </div>
  )
}

export default HomePage