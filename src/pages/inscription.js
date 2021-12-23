import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Inscription = () => {
    return (
        <Layout>
            <main className='page'> 
                <section className='inscription-page'>
                    <article>
                        <h1>Inscription</h1>
                        <p>
                            Abscessit leviter et ambage ultimum dicto consistorium leviter
                            et in ambage prope venit et est et hocque inquit tuas ambage
                            dicto et annonas conspectum prope cessaveris consistorium
                            consistorium annonas si.
                        </p>
                        <Link to='/' className='btn'>
                            S'inscrire
                        </Link>
                    </article>
                    <StaticImage 
                        src='../assets/images/inscriptions.png' 
                        alt='inscriptions universitaires'
                    />
                </section>
            </main>
        </Layout>
    )
}

export default Inscription
