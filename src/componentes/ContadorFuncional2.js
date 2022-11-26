import React, {useState} from 'react';

const ContadorFuncional = (props) => {
    const [cuenta, CambiarCuenta ] = useState (0);
    const incrementar = (cantidad) =>CambiarCuenta(cuenta + cantidad);
    const disminuir = (cantidad) => CambiarCuenta(cuenta - cantidad);

return (
<div>
    <h1>Contador: {cuenta}</h1>

<button disabled={cuenta >= 10} onClick={() => incrementar (props.cantidadAincrementar)}>

        Incrementar
    </button>
<button disabled={cuenta <= 1} onClick={() => disminuir (props.cantidadAdisminuir)}>
        Disminuir
    </button>
    <button>Agregar al Carrito</button>
</div>
);
}

export default ContadorFuncional;