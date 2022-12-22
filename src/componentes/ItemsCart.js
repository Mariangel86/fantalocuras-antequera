import React from "react";
import { UsoContextoCarrito } from "../Contextos/CartContext";

const ItemsCart = ( {producto} ) =>{
    const {RemoverProducto}= UsoContextoCarrito();
    return (
        <div>
            <img src={producto.image} alt={producto.title}/>
            <div>
                <p> Titulo: {producto.title}</p>
                <p>Cantidad: {producto.cuenta}</p>
                <p>Precio u.: {producto.price}</p>
                <p>Subtotal: ${producto.cuenta * producto.price}</p>
                <button onClick={()=> RemoverProducto(producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}