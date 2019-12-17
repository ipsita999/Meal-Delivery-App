import React from 'react'
import Routes from '../routes'
import Footer from './shared/Footer'
import Nav from './shared/Nav'

const Container = () => {
        return (
        <div>
                <Nav />
                <Routes />
                <Footer />
        </div>
        )
}

export default Container