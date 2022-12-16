import React from "react";
import Item from "./Item";

const Items =({productos=[]})=> {
    return(
        productos.map(ejemplo2 => <Item key={ejemplo2.id} todo={ejemplo2}/>)
    );
}

export default Items;