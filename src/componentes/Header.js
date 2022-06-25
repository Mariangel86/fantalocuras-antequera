import React from 'react';
import Logo from '../assets/Locuraslogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus,} from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import { Alert } from 'reactstrap';
const Header = () => {
  return (
    <Alert>
    <header>
    <img src= {Logo} alt='Logo'/>
        <h1>Fantalocuras</h1>
        
        <FontAwesomeIcon icon ={faCartPlus}/>
        <button className='header__button'>
            Comienza la FantaLocura
            </button>
    </header>
    </Alert>
  );
}

export default Header;