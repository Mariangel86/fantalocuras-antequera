import React from "react";
import { Link } from "react-router-dom";

const Item =({todo})=>{
    return(
    <Link to={`/detalle/${todo.id}`}>
        <img src={todo.image} alt=""/>
        <p>{todo.title}</p>
    </Link>
    );
        
}

export default Item;