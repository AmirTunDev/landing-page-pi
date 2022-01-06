import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import orange from '../assets/images/orange.png'
import sofrecom from '../assets/images/sofrecom.png'
import tunisair from '../assets/images/tunisair.jpeg'
import injaz from '../assets/images/injaz.png'
import cat from '../assets/images/cat.png'
import iptech from '../assets/images/iptech.png'
import amen from '../assets/images/amen.png'

import styled from 'styled-components'

const ClientsWrapper = styled.div`

.carouselContainerClient { 
    width: 100%;
    padding: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: 5%;
    box-shadow :  -10px 1px 2px 3px rgb(148 187 233);
    margin-top: 3%;
    margin-bottom: 3%;
}


  .carousel .slide {
    width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
    display: inline-block;
    margin-bottom: auto;
    margin-top: auto;
  }
  .carousel .carousel-status {
    display: none;
  }
  .carousel .slide img {
    max-width: 28%;
    vertical-align: top;
    border: 0;
  }
  .control-dots {
    display: none;
  }
  .carousel .slider-wrapper {
    overflow: hidden;
    /* margin: auto; */
    width: 90%;
    transition: height 0.45s ease-in 0s;
    margin: auto;
  }
  @media screen and (min-width: 500px) {
    .carousel .slider-wrapper {
      overflow: hidden;
      width: 70%;
      transition: height 0.25s ease-in 0s;
    }
  }
  .carousel-root {
  }
`;

const Partenaire = function Partenaire () {
    return (
      <ClientsWrapper>
        <Carousel autoPlay infiniteLoop>
          <div className="">
            <img src={orange} alt="vgf" />
          </div>
          <div>
            <img src={sofrecom}alt="porsche" />
          </div>
          <div>
            <img src={tunisair} alt="lactalis"/>
          </div>
          <div>
            <img src={injaz} alt="carrefour" />
          </div>
          <div>
            <img src={cat} alt="mpx"/>
          </div>
          <div>
            <img src={amen} alt="mpx"/>
          </div>
          <div>
            <img src={iptech} alt="mpx"/>
          </div>
        </Carousel>
      </ClientsWrapper>
    );
  };
  export default Partenaire;
  