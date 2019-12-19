import React from 'react'
import fb from '../../assets/FACEBOOK.png'
import insta from '../../assets/INSTAGRAM.png'
import timeMeal from '../../assets/No Prep Meal logo (in yellow).png'
import twitter from '../../assets/TWITTER.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer left">
                <img src={timeMeal} alt="" />
                <p>NO PREP MEALS</p>
            </div>
            <div className="footer mid">
                <div className="media-icon">
                    <img src={fb} alt="" />
                    <img src={twitter} alt="" />
                    <img src={insta} alt="" />
                </div>
                <div className="copyright">
                    <p>Copyright © 2019 No Prep Meals ® </p>
                </div>
            </div>
            <div className="footer right">
                <p>Contact</p>
                <p>support@noprepmeals.com</p>
                <p>+1(800)-457-8793</p>
            </div>
            <div className='mobile-footer'>
                <p className='mobile-contact'>support@noprepmeals.com</p>
                <p className='mobile-contact'>+1(800)-457-8793</p>
                <div className="media-icon-mobile">
                    <img src={fb} alt="" className='social' />
                    <img src={twitter} alt="" className='social' />
                    <img src={insta} alt="" className='social' />
                </div>
            </div>
        </footer>
    )
}

export default Footer