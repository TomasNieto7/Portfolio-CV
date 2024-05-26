import MobileNavBar from '@/components/MobileNavBar/MobileNavBar'
import NavBar from '@/components/NavBar/NavBar'
import React, { useState } from 'react'
import Inicio from './Home/Inicio/page'
import About from './Home/About/page'
import Skills from './Home/Skills/page'
import Projects from './Home/Projects/page'
import Contact from './Home/Contact/page'
import Footer from '@/components/Footer/Footer'


const HomePage = () => {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div className='bg-[#f2f2f2]'>
      <MobileNavBar nav={nav} closeNav={closeNav}/>
      <NavBar openNav={openNav}/>
      <Inicio/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage