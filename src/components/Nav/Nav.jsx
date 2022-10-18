import React, { useState } from 'react'
import "./Nav.css"


import  { NavLink } from 'react-router-dom'

import Sell from '@mui/icons-material/Sell';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';

const Nav = () => {

    const [toggle, setToggle]= useState(false);

    const handleToggle=()=>{
      setToggle(!toggle);
    }

    
  return (
    <div>
        <nav className={toggle?'navbar expanded':'navbar'}>
            <h2 className='logo'>Car-DealerShip</h2>

            <div className='toggle-icon' onClick={handleToggle}>
            {toggle?<Close/>:<Menu />}
            </div>

            <ul className='links'>
            <li> <NavLink to='/buy'><span> <ShoppingCart /> </span> Buy a Ride</NavLink> </li>
            <li> <NavLink to='/sell'> <span> <Sell /> </span> Sell a Ride </NavLink> </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav