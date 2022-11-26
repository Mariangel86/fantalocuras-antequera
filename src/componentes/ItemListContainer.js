import React from "react";
import styled from "styled-components";

const ItemLista = (props)=> {
return(
    <ContenedorLista >
        <h3>{props.title}</h3>
        <p> incredible world</p>
    </ContenedorLista >
);
}

const ContenedorLista = styled.div`
    {color: blue;
    width: 100%;
    padding: 14px
    }`

export default ItemLista;