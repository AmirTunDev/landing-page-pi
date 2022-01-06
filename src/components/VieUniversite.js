import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import styled from 'styled-components'
import articleImage from '../assets/images/article.png'

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
                <h2 className='ArticlePageHeading'>Vie a l'université</h2>
                <section className='article1' >
                    <img src={articleImage} alt='image 1 de la section vie universiatire' className='articleImage'/> 
                    <article className='article1Text'>
                        <p>
                            Abscessit leviter et ambage ultimum dicto consistorium leviter
                            et in ambage prope venit et est et hocque inquit tuas ambage
                            dicto et annonas conspectum prope cessaveris consistorium
                            consistorium annonas si.
                        </p>
                    </article>
                </section>
                <section className='article2'>
                    <img src={articleImage} alt='image 1 de la section vie universiatire' className='articleImage' /> 
                    <article className='article2Text'>
                        <p>
                            Abscessit leviter et ambage ultimum dicto consistorium leviter
                            et in ambage prope venit et est et hocque inquit tuas ambage
                            dicto et annonas conspectum prope cessaveris consistorium
                            consistorium annonas si.
                        </p>
                    </article>
                    <btn />
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
    margin-bottom: 1%;
    .ArticlePageHeading{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
    }
    .article1{
        display:flex;
        justify-content:space-between;
    }
    .article2{
        display:flex;
        justify-content:space-between;

    }
    .articleImage{
        width:35%;
        height:50%
    }

`