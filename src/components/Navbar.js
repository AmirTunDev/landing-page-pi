import React,{useState} from 'react'
import { Link } from 'gatsby'
import {FaAlignJustify} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    const [show,setShow] = useState(false);
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='logo polytech intl'/>
                    </Link>
                    <button className='nav-btn' onClick={()=> setShow(!show)}>
                        <FaAlignJustify />
                    </button>
                </div>
                <div className={show ? "nav-links show-links":"nav-links"}>
                    <Link 
                        to='/formations' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={()=> setShow(false)}>
                        Formations
                    </Link>
                    <Link 
                        to='/specialites' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={()=> setShow(false)}>
                        S'inscrire
                    </Link>
                    <Link 
                        to='/contact' 
                        className='nav-link' 
                        activeClassName='active-link'
                        onClick={()=> setShow(false)}>
                        Contact
                    </Link>
                </div>
                <div className='nav-search-container'>
                    <BsSearch />
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
