import React from "react";
import './NavBar.css';
import Logo from '../assets/Locuraslogo.jpg';
import Carrito from "./CartWidget";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (

<nav>
    <img src= {Logo} alt='Logo'/>

        <h1>Fantalocuras</h1>
        

     <h1>Menu</h1>

        <ul>
            <li>
                <NavLink to='/*'>MUGS</NavLink>
        </li>
            <li>
                <NavLink to='/'>ANIME</NavLink>
        </li>
            <li>
                <NavLink to='/'>FANTASY </NavLink>
            </li>
           
         </ul>

         <NavLink to='/Cart'><Carrito/></NavLink>

        <BotonFanta>
            Comienza la FantaLocura
            </BotonFanta>
        </nav>
        );

    }
    const BotonFanta= styled.button`
    background-color:rgb(255, 255, 128);
    color: blue;
    margin-left:15px;
    margin-right:15px;
    border-radius: 2rem; /* 10px */
    padding:18px
    `;

    export default NavBar;