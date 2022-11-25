import React from "react";
import './NavBar.css';
import Logo from '../assets/Locuraslogo.jpg';
import Carrito from "./CartWidget";
import styled from "styled-components";

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

        <BotonFanta>
            Comienza la FantaLocura
            </BotonFanta>
        </nav>
        );

    }
    const BotonFanta= styled.button`
    background-color:rgb(255, 255, 128);
    color: #FEFEFE
    margin-left:15px;
    margin-right:15px
    `;

    export default NavBar;