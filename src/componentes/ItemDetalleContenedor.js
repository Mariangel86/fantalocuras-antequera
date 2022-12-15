import React, {useState,useEffect} from "react";
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";
import Locura from '../assets/imagenlocura.png';

const ejemplos2= 
    {id:4, title: "locura", image:(Locura), category: 'Mugs' };

    
const ItemDetalleContenedor=()=>{
    const [productos, CambiarProductos ] = useState ({});
    const {detalleId}= useParams();

    useEffect(() => {
        const establecerProductos = new Promise(resolve => {
          setTimeout(() => {
            resolve(ejemplos2);
           },3000);
          });
            establecerProductos.then (resl=> CambiarProductos(resl.find(ejemplo2 => ejemplo2.id === parseInt(detalleId))));
    },[detalleId])

    return(
    <ItemDetalle productos={productos}/>
    );
    }

export default ItemDetalleContenedor;