import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Inscription from "./Inscription"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Inscription />
            <Footer />
        </>
    )
}

export default Layout
