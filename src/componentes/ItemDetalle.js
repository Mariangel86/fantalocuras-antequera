import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../src/ItemDetalleContenedor.css';
import ContadorFuncional from "./ContadorFuncional2";
import {UsoContextoCarrito} from "./../Contextos/CartContext";

const ItemDetalle =({productos})=>{

    const [irACarrito,cambiarIrACarrito]= useState(false);

    const {AgregarProducto}= UsoContextoCarrito();

    const onAdd=(cantidad)=>{
        cambiarIrACarrito(true);
        AgregarProducto(productos, cantidad);
       };

    return(
    <div className="contenedor">
        <div className="detalle">
        <img className="detalle-image" src={productos.image} alt=""/>
        </div>

        <div className="contenido">
        <h1>{productos.title}</h1>
            { irACarrito 
            ? <Link to='/Cart' >Finalizar Su Compra/</Link> 
            :
        <ContadorFuncional cantidadAincrementar={1} cantidadAdisminuir= {1} stock={8} onAdd={onAdd} initial={1}/>}
        </div>
 
    </div>
    );
        
}

export default ItemDetalle;