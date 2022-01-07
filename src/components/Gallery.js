import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const query =graphql`
{
    allFile (filter: {extension: {eq: "jpg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 400
            height:200
          )
        }
      }
    }
  }
  
`
const Gallery = () => {
    const data = useStaticQuery(query)
    const nodes = data.allFile.nodes
    return (
        <Wrapper>
            <div className='gallery-headings'>
                <h2 className='about-h2'>Événements</h2>
            </div>
            {nodes.map((image,index)=>{
                const { name } = image
                const pathToImage = getImage(image)
                console.log(name)
                return (
                    <div>
                    <article key={index} className='item'>
                        <GatsbyImage 
                            image={pathToImage} 
                            alt={name}
                            className='gallery-img'
                        />
                    </article>
                    </div>

                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10%;
    .item{
        margin-right: 1rem;
    }
    .gallery-img{
        border-radius: 1rem;

    }
    .gallery-headings{
        display: flex;
        justify-content: center;
    }
`

export default Gallery
