import React from "react";
import { UsoContextoCarrito } from "../Contextos/CartContext";
import {Link} from 'react-router-dom';

const Cart =()=>{
const [carrito, TotalPrice]= UsoContextoCarrito();

    if (carrito.length ===0){
        return(
            <>
            <p>No hay productos registrados</p>
            <Link to='/'>Hacer Compras</Link>
            </>
        );
    }

    return(
        <>
        {
            carrito.map(producto=> <ItemsCart key={producto.id} producto={producto}/>)
        }
        <p>
            Total: {TotalPrice()}
        </p>
        </>
        );
}
export default Cart;