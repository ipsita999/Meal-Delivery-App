import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo-blue.png'
import cart from '../../assets/cart.png'
import hamburger from '../../assets/HAMBURGER.png'

class Nav extends React.Component {

    constructor() {
        super()
        this.state = {
            display: 'none'
        }
    }

    handleClick = () => {
        console.log('working')
        this.setState({display: 'block'})
    }
    render() {
        return (
            <div className='nav-bar'>
                <div className='hamburger-dropdown'>
                    <img className='hamburger' src={hamburger} alt='hamburger'/>
                </div>
                <Link to='/'><img className='logo' src={logo} alt='logo'/></Link>
                <NavLink className='nav-link' to='/'>NO PREP MEALS</NavLink>
                <p>RECIPES</p>
                <p>ABOUT</p>
                <p>CONTACT</p>
                <p>MY PROFILE</p>
                <img className='cart' src={cart} alt='cart'/>
            </div>
        )
    }
}

export default Nav