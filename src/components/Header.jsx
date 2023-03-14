import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faGear, faCircleUser, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'



function Header({ mobileNav, toggleNav}) {

  
  return (
    <header className='header'>

      {/* Mobile Hamburger toggler */}
     <a className='mobile-menu' onClick={toggleNav}>
        { mobileNav ? 
          <FontAwesomeIcon className='mobile-icon' icon={faXmark} size='xl' /> : 
          <FontAwesomeIcon className='mobile-icon' icon={faBars} size='xl'/>}
      </a>

      <div className='header-logo'>
        <h1><Link to="/">CripTo</Link></h1>
      </div>

      <div className='header-items'>
        <Link to='notifications'><FontAwesomeIcon className='header-item bell' icon={faBell} size='lg' /></Link>
        <Link to='settings'><FontAwesomeIcon className='header-item gear' icon={faGear} size='lg' /></Link>
        <Link to='/'><FontAwesomeIcon className='header-item user' icon={faCircleUser} size='2x' /></Link>
      </div>

    </header>
  )
}

export default Header