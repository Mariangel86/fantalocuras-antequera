import React, {useState,useEffect} from "react";
import ItemDetalle from "./ItemDetalle";
import { useParams } from "react-router-dom";

const ejemplos1= [
  {id:1, title: "Taza Mug", image:"https://grafico.online/wp-content/uploads/2021/05/Mug-1.png", category:'Mugs'},
    {id:2, title:"fantasy", image:"https://images.emojiterra.com/twitter/v13.1/512px/1f92a.png", category:'Fantasy'},
    {id:3, title:"anime", image:"https://revistadiners.com.co/wp-content/uploads/2019/09/portada_anime_1200x800.jpg", category:'Anime'}

  ];

    
const ItemDetalleContenedor=()=>{
    const [productos, CambiarProductos ] = useState ({});
    const {detalleId}= useParams();

    useEffect(() => {
        const establecerProductos = new Promise(resolve => {
          setTimeout(() => {
            resolve(ejemplos1);
           },3000);
          });
          if (detalleId){
            establecerProductos.then (resl=> CambiarProductos(resl.find(ejemplos1 => ejemplos1.id === parseInt(detalleId))));
          }else{
            
            establecerProductos.then(resl => CambiarProductos(resl));
          }
          
      },[detalleId])

    return(
    <ItemDetalle productos={productos}/>
    );
    }

export default ItemDetalleContenedor;