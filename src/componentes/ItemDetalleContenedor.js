import React, {useState,useEffect} from "react";
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";
//import Locura from '../assets/imagenlocura.png';
//import Carrito from '../assets/carrito.png';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

//const ejemplos2= [
  //{id:1, price: 50, title: "locura", image: (Locura), category: 'Mugs' },
 // {id:2, price: 100, title: "carrito", image: (Carrito), category: 'Fantasy' }
//]

    
const ItemDetalleContenedor= () => {
    const [productos, CambiarOrdenProductos ] = useState ({});
    const {detalleId}= useParams();

    useEffect(() => {
      const  querydb = getFirestore();
      const queryDoc = doc(querydb, 'productos', detalleId);
     getDoc(queryDoc)
          .then(resl=> CambiarOrdenProductos({id: resl.id, ...resl.data()}))
  },[detalleId])

    return(
    <ItemDetalle productos={productos}/>
    );
    }

export default ItemDetalleContenedor;