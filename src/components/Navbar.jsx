import React from 'react'
import Logo from './img/Logo.svg'
import Search from './img/Search.svg'
import Language from './img/Language.svg'
import Cart from './img/Cart.svg'
import Profile from './img/Profile.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div>
            <img src={Logo} alt="" />
        </div>
        <div className='navbar-elemts'>
            <a href="/">Products</a>
            <a href="/">Featured</a>
            <a href="/">Brands</a>
        </div>
        <div className='navbar-search'>
            <img src={Search} alt="" />
            <input type="text" placeholder='Search' />
        </div>
        <div className='navbar-icons'>
            <a href="/"><img src={Language} alt="" className='margining'/>US</a>
            <a href="/"><img src={Cart} alt="" /></a>
            <a href="/"><img src={Profile} alt="" /></a>
        </div>
    </nav>
  )
}

export default Navbar