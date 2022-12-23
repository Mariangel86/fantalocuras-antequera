import React from "react";
import styled from "styled-components";
import { UsoContextoCarrito } from "../Contextos/CartContext";

const Cart= styled.button`
    background-color:rgb(255, 255, 128);
    color: blue;
    margin-left:15px;
    margin-right:15px;
    padding:18px;
    border-radius: 1.5rem; /* 10px */
    font-size: x-large;
    `;

const Carrito=()=>{
    const {Totalproductos}=UsoContextoCarrito();

    return(
        <>
        <Cart className="bi bi-cart4"></Cart>
        <span>{Totalproductos()|| ''}</span>
        </>
    );
}
export default Carrito;