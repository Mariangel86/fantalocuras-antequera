import React from "react";
import styled from "styled-components";


const Boton= styled.button`
    background-color:rgb(255, 255, 128);
    color: blue;
    margin-left:15px;
    margin-right:15px;
    padding:18px;
    border-radius: 1.5rem; /* 10px */
    `;
    const Cart = styled.i`
    font-size: x-large;
    `;

const Carrito=()=>{
    return(
        <Boton><Cart className="bi bi-cart4"></Cart></Boton>
    );
}
export default Carrito;