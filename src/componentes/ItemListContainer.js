import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetalle from "./ItemDetalle";

    const ejemplos2= [
        {id:1, title: "Taza Mug", image:"https://grafico.online/wp-content/uploads/2021/05/Mug-1.png", category:'Mugs'},
          {id:2, title:"fantasy", image:"https://images.emojiterra.com/twitter/v13.1/512px/1f92a.png", category:'Fantasy'},
          {id:3, title:"anime", image:"https://revistadiners.com.co/wp-content/uploads/2019/09/portada_anime_1200x800.jpg", category:'Anime'}
      
        ];
    
          
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
                  establecerProductos.then (resl=> resl.filter(ejemplo2=> ejemplo2.category === categoriaId));
                }else{
                  
                  establecerProductos.then(resl => CambiarProductos(resl));
                }
                
            },[categoriaId])
      
          return(
          <ItemDetalle productos={productos}/>
          );
              
      }
      


export default ItemLista;