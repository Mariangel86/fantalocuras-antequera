import React from "react";

const Item =({todo})=>{
    return(
    <a href="/">
        <img src={todo.image} alt=""/>
        <p>{todo.title}</p>
    </a>
    );
        
}

export default Item;