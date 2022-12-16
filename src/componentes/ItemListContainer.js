import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Locura from '../assets/imagenlocura.png';
import Items from './Items';

    const ejemplos2=
          {id:1, title: "locura", image: (Locura), category: 'Mugs' };
    
          
      const ItemLista=()=>{
          const [productos, CambiarProductos ] = useState ([]);
          const {categoriaId}= useParams();
      
          useEffect(() => {
              const establecerProductos = new Promise(resolve => {
                setTimeout(() => {
                  resolve(ejemplos2);
                 },3000);
                });
                if (categoriaId){
                  establecerProductos.then(res=> CambiarProductos(res.filter(ejemplo2=> ejemplo2.category === categoriaId)));
            
                }else{
                  
                  establecerProductos.then(res => CambiarProductos(res));
                }
                
            },[categoriaId])
      
          return(
          <Items productos={productos}/>
          );
              
      }
      


export default ItemLista;