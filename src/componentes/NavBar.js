import React from "react";
import './NavBar.css';
import Logo from '../assets/Locuraslogo.jpg';
import Carrito from "./Cartwidget";

const NavBar = () => {

    return (

<nav>
    <img src= {Logo} alt='Logo'/>

        <h1>Fantalocuras</h1>
        

     <h1>Menu</h1>

        <ul>
            <li>MUGS</li>
            <li>ANIME</li>
            <li>FANTASY </li>
           
         </ul>

        <Carrito/>

        <button className='header__button'>
            Comienza la FantaLocura
            </button>
        </nav>
        );

    }

    export default NavBar;