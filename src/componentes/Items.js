import React from "react";
import Item from "./Item";

const Items =({productos=[]})=>{
    return(
        productos.map(ejemplos2=> <Item key={ejemplos2.id} todo={ejemplos2}/>)
    );
}

export default Items;