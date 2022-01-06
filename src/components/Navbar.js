/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { createTheme } from '@mui/material/styles';
import logo from '../assets/images/logo.png'
import styled from 'styled-components'
const HeaderWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');body {
  font-family: 'Roboto', sans-serif;  margin: 0;
  width:100%;
  height:100vh
}
.Header {
  top: 0; /* Stick it to the top */
  max-height: 100%;
  width: 100%;
  grid-template-areas: "logo nav";
  margin-bottom: 1%;
}

.Logo {
  grid-area: logo;
  height: 70px;
}

.Nav {
    display: flex;
    grid-area: nav;
    grid-template-columns: repeat(4,auto);
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-items: center;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    flex-wrap: nowrap;

}
.Nav a {
  color: black;
  font-size: 20px;
  font-weight: 500;
  transition: 0.5s;
  text-decoration: none;
  margin-left: 3%;

}
.Nav a:hover {
  transform: scale(1.1);
}
.Nav button {
  padding: 5px;
  outline: none;
  border: none;
  font-size: 20px;
  color: #fff;
  font-weight: 200;
  background-color: #94bbe9;
  border-radius: 25px;
  cursor: pointer;
  transition: 70ms;
  margin-bottom: 1%;
}

.Nav button:active {
  transform: translateY(3px);
  box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
}

.Burger {
  display: none;
  grid-area: burger;
  margin: 0 20px 0 0;
  padding: 0;
  justify-self: end;
  font-size: 40px;
  border: none;
  background: none;
  outline: none;
  transition: 0.1s;
}
.Burger:active {
  transform: scale(1.2);
}

@media (max-width: 700px) {
  .Header {
    grid-template-areas: "logo burger" "nav nav";
  }
  .Nav {
    display: flex;
    grid-area: nav / nav / nav / nav;
    grid-template-columns: repeat(4, auto);
    -webkit-box-align: center;
    place-items: center;
    flex-flow: row nowrap;
    place-content: center;
    -webkit-box-pack: center;
  }

  .Burger {
    display: inline;
  }
}

.NavAnimation-enter {
  opacity: 0;
  transform: scale(0.5);
}
.NavAnimation-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 350ms, transform 350ms;
}
.NavAnimation-exit {
  opacity: 1;
}
.NavAnimation-exit-active {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 350ms, transform 350ms;
}

.toggle{
  width:40%
}
@media (max-width: 700px) {
.toggle{
  width:100%
}
}
.logopi{
    width: 10%;
  
}
.Syrine{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    margin-bottom: 1%;
}
`

 function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };


  return (
    <HeaderWrapper>
      <header className="Header">
          <div className="Syrine">
        <img className="logopi"
        src={logo}
        alt="logo" />
        </div>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <a href="https://pi.tn/formations-universitaires-depolytech-intl/">Formation</a>
            <a href="https://pi.tn/entreprise/">Entreprise</a>
            <a href="https://pi.tn/international/">International</a>
            <a href="https://pi.tn/international/">Qualité et innovation</a>
            <a href="https://pi.tn/inscription/"> Inscription </a>
          </nav>
        </CSSTransition>
        <button type="button"onClick={toggleNav} className="Burger">
          🚀
        </button>
      </header>
    </HeaderWrapper>
  );
}
export default Header;