import React, {useState,useEffect} from "react";
import ItemDetalle from "./ItemDetalle";

const ejemplos2= {
    id:1, title: "Taza Mug", image:"https://grafico.online/wp-content/uploads/2021/05/Mug-1.png"} ;
    
const ItemDetalleContenedor =()=>{
    const [productos, CambiarProductos ] = useState ({});

    useEffect(() => {
        const establecerProductos = new Promise(resolve => {
          setTimeout(() => {
            resolve(ejemplos2);
           },3000);
          });
          establecerProductos.then(resl => CambiarProductos(resl));
      },[])

    return(
    <ItemDetalle productos={productos}/>
    );
        
}

export default ItemDetalleContenedor;