import React from 'react'
import img from './illustrations/hero.svg'
import './Hero.css'
const Hero = () => {
    return (
        <main className='hero-section'>
            <span></span>
            <div className='hero-content'>
                <h1>
                    Bring your favorite<br></br> sorcerers home
                </h1>
                <p>At FunkoMania you have fun and start<br></br> your amazing collection of Funkos!</p>
                <a href="/">Shop now</a>
            </div>
            <div className='hero-ill'>
                <img src={img} alt="" />
            </div>
        </main>
    )
}

export default Hero