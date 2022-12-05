import React from "react";
import styled from "styled-components";

const Boton= styled.button`
    background-color:rgb(255, 255, 128);
    color: #FEFEFE
    margin-left:15px;
    margin-right:15px
    `;

const Carrito=()=>{
    return(
        <Boton><i className="bi bi-cart4"></i></Boton>
    );
}
export default Carrito;