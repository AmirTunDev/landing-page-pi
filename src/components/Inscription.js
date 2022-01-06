import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Partenaire from '../components/carousel'
import Video from '../components/video'
const Inscription = () => {
    return (
            <main className='page'> 
                <section className='inscription-page' style={{
                    marginTop: '7%'
                }}>
                    <article>
                        <h2 className='about-h2' >Inscription</h2>
                        <p>
                        L’Université Polytech Intl ,est une école d’ingénieurs privée en Tunisie qui vise l’excellence. Son objectif est de créer une nouvelle génération qualifiée d’ingénieurs et d’architectes compétents qui seront immédiatement opérationnels. En outre, la formation de ses futurs ingénieurs tient compte de la techno-science, la pratique managériale et la maîtrise des langues.

Finalement, le credo de l’université privée Polytech Intl est la formation pour l’emploi..
                        </p>
                        <Link to='/' className='btn'>
                            S'inscrire
                        </Link>
                    </article>
                    <StaticImage 
                        src='../assets/images/pi.jpg' 
                        alt='inscriptions universitaires'
                        className='inscription-img'
                        placeholder='blurred'
                    />
                </section>
                <section className='inscription-page' style={{
                    marginTop: '7%'
                }}>
                    <StaticImage 
                        src='../assets/images/pi3.jpg' 
                        alt='inscriptions universitaires'
                        className='inscription-img'
                        placeholder='blurred'
                    />
                    <article>
                    <h2 className='about-page-h2'>Pourquoi choisir PI</h2>
            <p className='about-page-p'>
            L’Université Polytech Intl ,est une école d’ingénieurs privée en Tunisie qui 
            vise l’excellence. Son objectif est de créer une nouvelle génération qualifiée d’ingénieurs 
            et d’architectes compétents qui seront immédiatement opérationnels. En outre, la formation de ses futurs ingénieurs tient compte de la techno-science, la pratique managériale et la maîtrise des langues.
Finalement, le credo de l’université privée Polytech Intl est la formation pour l’emploi.
            </p>
            <Link to='/' className='btnR'>
                S'inscrire
            </Link>
                    </article>
                   
                </section>
                <h2 className='about-h2' >Nos partenaires</h2>

                <Partenaire/>
                <section className='inscription-page' style={{
                    
                    marginTop: '7%',
                    backgroundColor: '#c92830',
                    marginBottom: '10%'
                }}>
                    <article >
                        <h4 className='about-h2'  style={{
                            color:'white',
                            textAlign: 'center',
                            display:'flex',
                            justifyContent:'center',
                            fontFamily: "montserratregular",
                            fontSize: '20px'


                        }}>Centre d’examen TEFAQ – TEF Canada
                        </h4>
                        <p style={{
                            paddingLeft: '15px',
                            color: 'white',
                            fontSize: '15px'
                            
                        }}>Le Centre d’examen de l’université privée Polytech Intl organise régulièrement des sessions TEF (Test d’évaluation de français). Tél : 93 109 250
                        </p>
                        
                    </article>
                   
                    <article>
                        <h4 className='about-h2'style={{
                            marginTop:'2%',
                            color:'white',
                            textAlign: 'center',
                            display:'flex',
                            justifyContent:'center',
                            fontFamily: "montserratregular",
                            fontSize: '20px'


                        }} >Formation certifiantes en Arabe langue étrangère CIMA
                        </h4>
                        <p style={{
                            color: 'white',
                            fontSize: '15px',
                        }}>
                        Le CIMA , est la première certification mondialement reconnue qui permet de valider votre niveau en arabe moderne standard.
                        </p>
                        
                    </article>
                  
                </section>
            </main>
        
    )
}

export default Inscription
