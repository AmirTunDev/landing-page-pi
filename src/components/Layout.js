import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import Inscription from "./Inscription"
import About from './About'
import Gallery from './Gallery'
import VieUniversite from './VieUniversite'
import Speciality from './Speciality'

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
             <Inscription />
             <Gallery />
             <VieUniversite />
             <Speciality />
            {/* <About />*/}
            <Footer />
        </>
    )
}

export default Layout
