import React,{ useState } from "react";

const CartContext= React.createContext([]);

const CartProvider=({children})=>{
    const [carrito, cambiarCarrito]=useState([]);

 const LimpiarCarrito=()=>cambiarCarrito([]);

 const EstaEnCarrito=(id)=> carrito.find(producto=>producto.id=== id)? true:false;

 const RemoverProducto=(id)=> cambiarCarrito(carrito.filter(producto=> producto.id==!id)) 

    return(
        <CartContext.Provider value={{
            LimpiarCarrito,
            EstaEnCarrito,
            RemoverProducto
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default {CartProvider,CartContext};