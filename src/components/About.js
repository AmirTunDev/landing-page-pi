import React from 'react'
import { Link } from 'gatsby'

const About = () => {
    return (
        <main className='page'>
            <section className='about-page'>
            <h2 className='about-page-h2'>Pourquoi choisir PI</h2>
            <p className='about-page-p'>
                Abscessit leviter et ambage ultimum dicto consistorium leviter
                et in ambage prope venit et est et hocque inquit tuas ambage
                dicto et annonas conspectum prope cessaveris consistorium
                consistorium annonas si.
            </p>
            <Link to='/' className='btn-about'>
                S'inscrire
            </Link>
            </section>
        </main>
    )
}

export default About
