import React, {useState,useEffect} from "react";
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';

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