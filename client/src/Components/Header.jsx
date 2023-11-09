import React from 'react'
import './Header.css'
import {NavLink, Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='Header-comp'>
      <div>
        <NavLink to='/dashboard' className="navlink">Dashboard</NavLink>
        <NavLink to='/statistics' className="navlink">Statistics</NavLink>
        <NavLink to='/charts' className="navlink">Charts</NavLink>
      </div>
    </div>
  )
}

export default Header