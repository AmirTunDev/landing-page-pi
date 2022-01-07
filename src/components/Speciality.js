import React from 'react'
import styled from 'styled-components'
import {useState, useEffect} from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';



function Counter() {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        let timer = setInterval(() => {
            setCount((count) => count + 1);
        },50);
        if (count === 80){
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    },[count])
    const [count1, setCount1] = useState(0);
    useEffect(()=> {
        let timer = setInterval(() => {
            setCount1((count) => count + 1);
        },50);
        if (count === 129){
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    },[count1])
    const [count2, setCount2] = useState(0);
    useEffect(()=> {
        let timer = setInterval(() => {
            setCount2((count) => count + 1);
        },50);
        if (count === 175){
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    },[count2])
    const [count3, setCount3] = useState(0);
    useEffect(()=> {
        let timer = setInterval(() => {
            setCount3((count) => count + 1);
        },50);
        if (count === 100){
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    },[count3])
    const [count4, setCount4] = useState(0);
    useEffect(()=> {
        let timer = setInterval(() => {
            setCount4((count) => count + 1);
        },50);
        if (count === 90){
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    },[count4])
    return (
        <Wrapper>
        <h2 className='about-h2'> Specialités </h2>
        <div className='specilaitySections'>
            <section className='section1'>
            <h4> GénieIndustriel </h4>
              <AccountTreeIcon/>
              <h1>{count2}</h1>
            </section>
            <section className='section1'>
            <h4> Informatique </h4>
            <ImportantDevicesIcon/>
            <h1>{count3}</h1>

            </section>
            <section className='section3'>
            <h4> Mécatronique </h4>
                <SettingsIcon/>
                <h1> {count} </h1>

            </section>
            <section className='section1'>
                <h4> Architecture </h4>
              <ArchitectureIcon/>
              <h1>{count1}</h1>
            </section>
            <section className='section1'>
            <h4> Management </h4>
              <ManageAccountsIcon/>
              <h1>{count4}</h1>

            </section>
        </div>
    </Wrapper>
    )
}



export default Counter

const Wrapper = styled.div`

h4::before {  
  transform: scaleX(0);
  transform-origin: bottom right;
  color: white;

}

h4:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
  color: white;


}

h4::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  background: #842029;
  z-index: -1;
  transition: transform .3s ease;
}

h4 {
  position: relative;

}

	font-size: 1.1em;
	width: 100%;
    
.about-h2{
    display:flex;
    justify-content:center;
    margin-bottom: 1em;
}
.specilaitySections{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 6%
}
 .section1{
        display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-left: 0%;
    }
    .section2{
        display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    }
    .section3{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    }
    .css-i4bv87-MuiSvgIcon-root {
        color:#842029;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 35%;
    height: 51%;
    display: inline-block;
    fill: currentColor;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;
}

`
