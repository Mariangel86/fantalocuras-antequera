import React from "react";
import Item from "./Item";

const Items =({productos=[]})=>{
    return(
        productos.map(ejemplo=> <Item key={ejemplo.id} todo={ejemplo}/>)
    );
}

export default Items;