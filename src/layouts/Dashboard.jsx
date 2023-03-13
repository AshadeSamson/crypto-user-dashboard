import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Dashboard() {


  // State to handle Hamburger Menu on Mobile View
  const [mobileNav, setMobileNav] = useState(() => false);

  function toggleNav(){
    setMobileNav(prevState => !prevState)
  }

  


  return (
    <>    
        <Header 
        mobileNav={mobileNav}
        toggleNav={toggleNav}
        />
  
      
        <section className='main'>
          <Navbar 
            mobileNav={mobileNav}
            toggleNav={toggleNav}
          />
          <div className='main-content'>
            <Outlet />
          </div>
        </section> 
         
    </>
  )
}

export default Dashboard