import React from "react";
import '../../src/ItemDetalleContenedor.css';


const ItemDetalle =({productos})=>{
    return(
    <div className="contenedor">
        <div className="detalle">
        <img className="detalle-image" src={productos.image} alt=""/>
        </div>

        <div className="contenido">
        <h1>{productos.title}</h1>
        </div>
    </div>
    );
        
}

export default ItemDetalle;