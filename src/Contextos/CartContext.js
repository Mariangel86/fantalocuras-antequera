import React,{ useState, useContext } from "react";

const CartContext= React.createContext([]);

export const UsoContextoCarrito = () => useContext(CartContext);

const CartProvider=({children})=>{
    const [carrito, cambiarCarrito] = useState([]);

 const LimpiarCarrito=()=>cambiarCarrito([]);

 const EstaEnCarrito=(id)=> carrito.find(producto=>producto.id=== id)? true:false;

 const RemoverProducto=(id)=> cambiarCarrito(carrito.filter(producto=> producto.id !== id)) 

 const AgregarProducto=(item, cuenta)=>{
    if (estaEnCarrito(item.id)){
        cambiarCarrito(carrito.map(producto=>{
            return producto.id === item.id ? { ...producto, cuenta:producto.cuenta+ cuenta} : producto

        }));
    } else {
        cambiarCarrito([...carrito, {...item, cuenta}]);
    }
     
 }


 const TotalPrice=()=>{
    return carrito.reduce ((prev, act)=> prev+ act.cuenta*act.price, 0);
 }

 const TotalProductos=()=> carrito.reduce((acumulador,productoActual)=> acumulador+ productoActual.cuenta,0);

    return(
        <CartContext.Provider value={{
            LimpiarCarrito,
            EstaEnCarrito,
            RemoverProducto,
            AgregarProducto,
            TotalPrice,
            TotalProductos
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;