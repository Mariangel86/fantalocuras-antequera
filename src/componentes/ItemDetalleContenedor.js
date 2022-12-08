import React, {useState,useEffect} from "react";
import ItemDetalle from "./ItemDetalle";

const ejemplos2= [
  {id:1, title: "Taza Mug", image:"https://grafico.online/wp-content/uploads/2021/05/Mug-1.png", category:'Mugs'},
    {id:2, title:"fantasy", image:"https://images.emojiterra.com/twitter/v13.1/512px/1f92a.png", category:'fantasy'}
  ];
    
const ItemDetalleContenedor =()=>{
    const [productos, CambiarProductos ] = useState ({});
    const {categoriaId}= useParams();

    useEffect(() => {
        const establecerProductos = new Promise(resolve => {
          setTimeout(() => {
            resolve(ejemplos2);
           },3000);
          });
          if (categoriaId){
            establecerProductos.then (resl=> resl.filter(ejemplos2= ejemplos2.category === categoriaId));
          }else{
            
            establecerProductos.then(resl => CambiarProductos(resl));
          }
          
      },[])

    return(
    <ItemDetalle productos={productos}/>
    );
        
}

export default ItemDetalleContenedor;