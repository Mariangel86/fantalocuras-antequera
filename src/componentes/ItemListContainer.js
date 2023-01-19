import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Items from './Items';
import {getFirestore, collection, getDocs, query, where } from "firebase/firestore";
    
          
      const ItemLista=()=>{
          const [productos, CambiarOrdenProductos ] = useState ([]);

          const {categoriaId}= useParams();

          useEffect(() => {
            const  querydb = getFirestore();
          const queryCollection= collection(querydb, 'productos');
          if (categoriaId){
          const queryFilter = query(queryCollection,where('category', '==',categoriaId))
          getDocs(queryFilter)
          .then(resl=> CambiarOrdenProductos(resl.docs.map(producto=>({id: producto.id, ...producto.data() })))) 
          } else{
          getDocs(queryCollection)
          .then(resl=> CambiarOrdenProductos(resl.docs.map(producto=>({id: producto.id, ...producto.data() }))))
          } 
        },[categoriaId])


         return(
        <Items productos={productos}/>
           );      
        }
      


export default ItemLista;