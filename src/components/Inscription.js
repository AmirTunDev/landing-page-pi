import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


const Inscription = () => {
    return (
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
                        className='inscription-img'
                        placeholder='blurred'
                    />
                </section>
            </main>
        
    )
}

export default Inscription
