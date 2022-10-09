import React from 'react'
import Logo from './img/Logo.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div>
            <img src={Logo} alt="" />
        </div>
        <div>
            <a href="/">Products</a>
            <a href="/">Featured</a>
            <a href="/">Brands</a>
        </div>
        <div>
            <img src="" alt="" />
            <input type="text" placeholder='Search' />
        </div>
        <div>
            <a href="/"><img src="" alt="" />US</a>
            <a href="/"><img src="" alt="" /></a>
            <a href="/"><img src="" alt="" /></a>
        </div>
    </nav>
  )
}

export default Navbar