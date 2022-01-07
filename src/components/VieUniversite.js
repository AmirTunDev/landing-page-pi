import React from 'react'
//import { useStaticQuery,graphql } from 'gatsby'
import styled from 'styled-components'
//import articleImage from '../assets/images/article1.jpeg'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

/*const Myquery = graphql`
    {
        allFile(filter: {name: {eq: "article"}}) {
        nodes {
            name
            childImageSharp {
            gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 400, height: 200)
            }
        }
        }
    }
`*/

const VieUniversite = () => {
    return (
        <div>
            <Wrapper>
                <h2 className='about-h2'>Vie a l'université</h2>
                <section className='article1' >
                    <StaticImage 
                            src='../assets/images/article1.jpeg' 
                            alt='1er article dans la section vie universitaire'
                            className='article-img'
                            placeholder='blurred'
                    />
                    <article className='article1Text'>
                        <p>
                        Les clubs jouent un rôle crucial dans la vie étudiante au sein de la faculté privée Polytech Intl. En effet, ils constituent des terrains d’expérimentation permettant la transition de l’idée à l’action. Par ailleurs la vie associative permet  d’initier l’élève ingénieur aux enjeux de la vie professionnelle.

                        L’approche de la faculté privée Polytech Intl consiste à enrichir le profil scientifique et technique de l’étudiant par des aptitudes diverses : initiative, volontariat et responsabilité. C’est la raison pour laquelle, l’école a mis en place une véritable politique afin de développer une vie étudiante de qualité. Chaque semaine des événements sont planifiés par les membres des clubs liés à des thématiques variées (Robotique, gaming, culture,…) privilégiant ainsi les échanges entre les différents membres de l’école.
                        </p>
                    </article>
                </section>
                <section className='article2'>
                    <StaticImage 
                            src='../assets/images/article2.jpeg' 
                            alt='1er article dans la section vie universitaire'
                            className='article-img'
                            placeholder='blurred'
                    />
                    <article className='article2Text'>
                        <p>
                            L’étudiant sera accompagné pendant la première semaine de son arrivée par le service des étudiants internationaux. Il veillera à lui assurer les meilleures conditions de logement.
                            De nombreux transports en commun s’arrêtent à quelques mètres de l’université. Un avantage qui permet aux étudiants de résider dans des quartiers proches.
                            La bibliothèque est équipée d’outils numériques et accès Wifi. Les ordinateurs sont équipés d’applications choisies par la bibliothèque : bibliothèque, presse écrite, audiovisuel, ressources en ligne ainsi que de logiciels bureautique.
                            La bibliothèque est équipée aussi d’un photocopieur en libre accès.
                            Un responsable est à votre service pour acquisitions des livres, périodiques et bases de données.<br/>
                            L’école met à la disposition des étudiants une salle de fitness et de musculation avec des machines à disposition pour libérer leur esprit et gérer leur stress.

                        </p>
                    </article>
                </section>
            </Wrapper>
        </div>
    )
}

export default VieUniversite

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 1em;
    padding-right: 2em;
    margin-bottom: 1%;
    .ArticlePageHeading{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
    }
    .article1{
        display:flex;
        justify-content:space-between;
        margin-Top: 2em;
    }
    .article2{
        display:flex;
        justify-content:space-between;

    }
    .article-img{
        display: flex;
        width: 48%;
        height: 75%;

    }
    

`