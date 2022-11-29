import React from "react";

const Item =(ejemplo)=>{
    return(
    <a href=''>
        <img src={ejemplo.image} alt=""/>
        <p>{ejemplo.title}</p>
    </a>
    );
        
}

export default Item;