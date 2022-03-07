import React from 'react'
import "./Menu.css"

export default function Menu() {
    return (
        <div className='menu'>
            <a className='logo' href='#home'>
            <h1>LOGO</h1>
            </a>
            <nav className='navbar'>
                <a href='about' className='ancor'>About</a>
                <a href='donate' className='ancor'>Donate</a>
                <a href='contact' className='ancor'>Contact</a>
            </nav>
        </div>
    )
}
