import React from "react";


const ItemDetalle =({productos})=>{
    return(
    <div>
        <div>
        <img src={productos.image} alt=""/>
        </div>

        <div>
        <h1>{productos.title}</h1>
        </div>
    </div>
    );
        
}

export default ItemDetalle;