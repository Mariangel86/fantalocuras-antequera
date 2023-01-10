import React from "react";
import { UsoContextoCarrito } from "../Contextos/CartContext";
import {Link} from 'react-router-dom';
import ItemsCart from './ItemsCart';
import { getFirestore, addDoc, collection} from 'firebase/firestore';

const Cart =()=>{
const {carrito, TotalPrice}= UsoContextoCarrito();
const db = getFirestore();
const Orden={
    comprador:{
        name:'mariangel',
        email: 'mariangel_antequera@hotmail.com',
        telefono:'3024081255',
        direccion: 'cra 29 #65-21'
    },
    Items: carrito.map(producto=> ({id: producto.id, title: producto.title, price: producto.price, cuenta: producto.cuenta})),
    Total: TotalPrice(),
}

const handleClick=()=>{
    const ordenesCollection= collection(db, 'Ordenes');
    addDoc(ordenesCollection, Orden)
    .then (({id})=> console.log(id))

}


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
        <button onClick={handleClick}>Generar Orden</button>
        </>
        );
}
export default Cart;