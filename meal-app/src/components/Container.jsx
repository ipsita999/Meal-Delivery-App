import React from 'react'
import Routes from '../routes'
import Footer from './shared/Footer'
import Nav from './shared/Nav'

const Container = () => {
        return (
        <div>
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
                <Nav />
                <Routes />
                <Footer />
        </div>
        )
}

export default Container