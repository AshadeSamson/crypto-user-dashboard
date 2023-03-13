import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faDollar, faWallet, faGears, faExchangeAlt} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'




function Navbar({ mobileNav, toggleNav }) {

    
  return (
    <nav className={ mobileNav ? 'navigation' : ''}>
      <NavLink to="." 
        className="nav-link"
        onClick={toggleNav}
        end>
          <FontAwesomeIcon  icon={faCreditCard}/>
          <h3>Balance</h3>
      </NavLink>

      <NavLink to="transactions" 
        className="nav-link" 
        onClick={toggleNav}>
          <FontAwesomeIcon  icon={faExchangeAlt}/>
          <h3>Transactions</h3>
      </NavLink>

      <NavLink to="wallet" 
        className="nav-link" 
        onClick={toggleNav}>
          <FontAwesomeIcon  icon={faWallet}/>
          <h3>Wallet</h3>
      </NavLink>

      <NavLink to="rates" 
        className="nav-link" 
        onClick={toggleNav}>
          <FontAwesomeIcon  icon={faDollar}/>
          <h3>Exchange Rates</h3>
      </NavLink>

      <NavLink to="settings" 
        className="nav-link" 
        onClick={toggleNav}>
          <FontAwesomeIcon  icon={faGears}/>
          <h3>Settings</h3>
      </NavLink>
    </nav>
  )
}

export default Navbar