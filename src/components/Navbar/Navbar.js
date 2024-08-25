import React, { useState } from 'react'
import "./navbar.css"
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Navbar = () => {

  const [active, setActive] = useState('navbar');
  
  const show = () => {
    setActive('navbar activenavbar');
  }

  const remove = () => {
    setActive('navbar');
  }

  return (
    <section className='navbar-section'>
      <header className='header flex'>

        <div className='logodiv'>
          <a href='' className='logo'>
            <h1><MdTravelExplore className="icon" /> TravelEasy</h1>
          </a>
        </div>

        <div className={active}>

          <ul className='navlist flex'>

            <li className='navitem'>
              <a href='#home' className='navlink'>HOME</a>
            </li>

            <li className='navitem'>
              <a href='#package' className='navlink'>PACKAGES</a>
            </li>

            <li className='navitem'>
              <a href='#about' className='navlink'>ABOUT US</a>
            </li>

            <li className='navitem'>
              <a href='#form' className='navlink'>CONTACT</a>
            </li>

            <button className='btn'><a href=''>BOOK NOW</a></button>
          </ul>

          <div className='closenavbar' onClick={remove}>
            <IoMdCloseCircleOutline className="icon" />
          </div>
        </div>

        <div className='togglenavbar' onClick={show}>
          <HiOutlineDotsVertical className='icon' />
        </div>

      </header>
    </section>
  )
}

export default Navbar;  // Changed 'navbar' to 'Navbar'
