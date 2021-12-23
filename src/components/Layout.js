import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({children}) => {
    return (
        <>
            {children}
            <Navbar />
            <Footer />
        </>
    )
}

export default Layout
