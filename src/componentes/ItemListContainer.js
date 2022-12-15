import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetalle from "./ItemDetalle";
import Locura from '../assets/imagenlocura.png';


    const ejemplos2=
      {id:1, title: "locura", image:(Locura), category: 'Mugs'};
    
          
      const ItemLista=()=>{
          const [productos, CambiarProductos ] = useState ({});
          const {categoriaId}= useParams();
      
          useEffect(() => {
              const establecerProductos = new Promise(resolve => {
                setTimeout(() => {
                  resolve(ejemplos2);
                 },3000);
                });
                if (categoriaId){
                  establecerProductos.then (resl=> resl.filter(ejemplos2=> ejemplos2.category === categoriaId));
                }else{
                  
                  establecerProductos.then(resl => CambiarProductos(resl));
                }
                
            },[categoriaId])
      
          return(
          <ItemDetalle productos={productos}/>
          );
              
      }
      


export default ItemLista;