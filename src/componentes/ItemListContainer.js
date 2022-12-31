import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//import Locura from '../assets/imagenlocura.png';
//import Items from './Items';
//import Carrito from '../assets/carrito.png';
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from './../firebase/firebaseConfig';

  //  const ejemplos2=[
  //        {id:1, price: 50, title: "locura", image: (Locura), category: 'Mugs' },
  //        {id:2, price:100, title: "carrito", image: (Carrito), category: 'Fantasy' }
  //      ]
    
          
      const ItemLista=()=>{
          const [productos, CambiarProductos ] = useState ([]);

          const {categoriaId}= useParams();

          useEffect(() => {
            const queryCollection = collection(db, 'productos');
            if (categoriaId) {
            const queryFilter= query(queryCollection,
              where('category', '==', categoriaId))

           getDocs(queryFilter)
                .then (resl=> CambiarProductos(resl.docs.map(producto=>({id: producto.id, ...producto.productos() }))))
          }else{
            getDocs(queryCollection)
                .then (resl=> CambiarProductos(resl.docs.map(producto=>({id: producto.id, ...producto.productos() }))))
          }

        },[categoriaId])
      }
      
        //  useEffect(() => {
        //      const establecerProductos = new Promise(resolve => {
        //        setTimeout(() => {
        //          resolve(ejemplos2);
        //         },3000);
        //        });
        //         if (categoriaId){
        //          establecerProductos.then(res=> CambiarProductos(res.filter(ejemplo2=> ejemplo2.category === categoriaId)));
        //    
        //        }else{
        //          
        //          establecerProductos.then(res => CambiarProductos(res));
        //        }
        //        
        //    },[categoriaId])
        //
        //  return(
        //  <Items productos={productos}/>
        //  );
        //      
        //}
      


export default ItemLista;