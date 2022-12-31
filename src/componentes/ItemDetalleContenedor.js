import React, {useState,useEffect} from "react";
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";
//import Locura from '../assets/imagenlocura.png';
//import Carrito from '../assets/carrito.png';
import { doc, getDoc} from 'firebase/firestore';
import {db}from './../firebase/firebaseConfig';

//const ejemplos2= [
  //{id:1, price: 50, title: "locura", image: (Locura), category: 'Mugs' },
 // {id:2, price: 100, title: "carrito", image: (Carrito), category: 'Fantasy' }
//]

    
const ItemDetalleContenedor=()=>{
    const [productos, CambiarProductos ] = useState ({});
    const {detalleId}= useParams();

    useEffect(() => {
      const queryDoc = doc(db, 'productos', '0DwN5cnlsVF59eUv4Lub');
     getDoc(queryDoc)
          .then (resl=> CambiarProductos({id: resl.id, ...resl.productos()}))
  },[detalleId])

   (/* useEffect(() => {
        const establecerProductos = new Promise(resolve => {
          setTimeout(() => {
            resolve(ejemplos2);
           },3000);
          });
            establecerProductos.then (res=> CambiarProductos(res.find(ejemplo2 => ejemplo2.id === parseInt(detalleId))));
    },[detalleId])*/)

    return(
    <ItemDetalle productos={productos}/>
    );
    }

export default ItemDetalleContenedor;