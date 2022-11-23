import React, {useState} from "react";

const ContadorFuncional= () => {

    const [Contador, cambiarContador] = useState  (0);
    const incrementar = function() { cambiarContador(Contador + 1); };
    const disminuir = function() { cambiarContador(Contador - 1); };


    return (
        
        <>
        <h1>{Contador}</h1>

        <button onClick = {incrementar}>Incrementar</button>
        <button onClick = {disminuir}>Disminuir</button>
    
        </>
    )
}

export default ContadorFuncional;