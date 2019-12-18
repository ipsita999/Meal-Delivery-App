import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-blue.png'
import cart from '../../assets/cart.png'

const Nav = () => {
    return (
        <div className='nav-bar'>
            <img src={logo} alt='logo'/>
            <NavLink className='nav-link' to='/'>NO PREP MEALS</NavLink>
            <p>RECIPES</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
            <p>MY PROFILE</p>
            <img className='cart' src={cart} alt='cart'/>
        </div>
    )
}

export default Nav