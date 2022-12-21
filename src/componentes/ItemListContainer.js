import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Locura from '../assets/imagenlocura.png';
import Items from './Items';
import Carrito from '../assets/carrito.png';

    const ejemplos2=[
          {id:1, price: 50, title: "locura", image: (Locura), category: 'Mugs' },
          {id:2, price:100, title: "carrito", image: (Carrito), category: 'Fantasy' }
        ]
    
          
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