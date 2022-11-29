import React, {useState} from 'react';

const ContadorFuncional = ({cantidadAincrementar, cantidadAdisminuir, stock, onAdd, initial}) => {
    const [cuenta, CambiarCuenta ] = useState (initial);
    const incrementar = (cantidad) =>CambiarCuenta(cuenta + cantidad);
    const disminuir = (cantidad) => CambiarCuenta(cuenta - cantidad);

return (
<div>
    <h1>Contador: {cuenta}</h1>

<button disabled={cuenta >= 10} onClick={() => incrementar (cantidadAincrementar)}>

        Incrementar
    </button>
<button disabled={cuenta <= 1} onClick={() => disminuir (cantidadAdisminuir)}>
        Disminuir
    </button>
    <button disabled={stock<=0} onClick={() => onAdd(cuenta)}>Agregar al Carrito</button>
</div>
);
}

export default ContadorFuncional;