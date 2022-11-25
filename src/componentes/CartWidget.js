import React from "react";
import styled from "styled-components";
import carrito from "../assets/carrito.png";


const Boton= styled.button`
    width: 30%;
    margin-left: 8rem; /* 20px */
	color: #FEFEFE ;
	height: 3.75rem; /* 60px */
	
`;

const Carrito=()=>{
    return(
        <div>
        <Boton><img src= {carrito} alt='carro'/></Boton>
        </div>
    );
}
export default Carrito;