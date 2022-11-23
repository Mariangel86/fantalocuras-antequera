import React from "react";
import styled from "styled-components";

const ItemLista = ()=> {
return(
    <ContenedorLista >
        <h3>hello world</h3>
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