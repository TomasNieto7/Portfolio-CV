import MobileNavBar from '@/components/MobileNavBar/MobileNavBar'
import NavBar from '@/components/NavBar/NavBar'
import React, { useState } from 'react'


const HomePage = () => {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div>
      <MobileNavBar nav={nav} closeNav={closeNav}/>
      <NavBar openNav={openNav}/>
    </div>
  )
}

export default HomePage