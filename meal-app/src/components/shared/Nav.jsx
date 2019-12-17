import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-bar'>
        <NavLink className='nav-link' to='/'>NO PREP MEALS</NavLink>
        <p>RECIPES</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
        <p>MY PROFILE</p>
        </div>
    )
}

export default Nav