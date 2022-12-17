import React,{ useState, useContext } from "react";

const CartContext= React.createContext([]);

const UsoContextoCarrito = () => useContext(CartContext);

const CartProvider=({children})=>{
    const [carrito, cambiarCarrito] = useState([]);

 const LimpiarCarrito=()=>cambiarCarrito([]);

 const EstaEnCarrito=(id)=> carrito.find(producto=>producto.id=== id)? true:false;

 const RemoverProducto=(id)=> cambiarCarrito(carrito.filter(producto=> producto.id !== id)) 

 const AgregarProducto=(item, nuevaCantidad)=>{
    const nuevoCarrito = carrito.filter(producto => producto.id !== item.id); 
    nuevoCarrito.push({ ...item, cantidad: nuevaCantidad });
    cambiarCarrito(nuevoCarrito);
 }
    return(
        <CartContext.Provider value={{
            LimpiarCarrito,
            EstaEnCarrito,
            RemoverProducto,
            AgregarProducto
        }}>
            {children}
        </CartContext.Provider>
    );
}

export {CartProvider, UsoContextoCarrito};