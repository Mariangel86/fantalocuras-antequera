import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ContadorFuncional = ({cantidadAincrementar, cantidadAdisminuir, stock, onAdd, initial}) => {
    const [cuenta, CambiarCuenta ] = useState (parseInt(initial));
    const incrementar = (cantidad) =>CambiarCuenta(cuenta + cantidad);
    const disminuir = (cantidad) => CambiarCuenta(cuenta - cantidad);

    useEffect(()=>{
        CambiarCuenta (parseInt(initial))
    },[initial])
    
return (
<div>
    <h1>Contador: {cuenta}</h1>

<BotonIncrementar disabled={cuenta >= 10} onClick={() => incrementar (cantidadAincrementar)}>

        Incrementar
    </BotonIncrementar>
<BotonDisminuir disabled={cuenta <= 1} onClick={() => disminuir (cantidadAdisminuir)}>
        Disminuir
    </BotonDisminuir>
    <BotonAgregar  disabled={stock<=0} onClick={() => onAdd(cuenta)}>Agregar al Carrito</BotonAgregar>
</div>
);
}

const BotonIncrementar = styled.button`
padding: 18px;
background-color:rgb(255, 255, 128);
color: blue;
margin-left:55px;
margin-right:15px;
margin-bottom: 15px;
border-radius: 2rem; /* 10px */
`;
const BotonDisminuir = styled.button`
background-color:rgb(255, 255, 128);
color: blue;
padding: 18px;
margin-right:15px;
margin-bottom: 15px;
border-radius: 2rem; /* 10px */
`;
const BotonAgregar = styled.button`
background-color:rgb(255, 255, 128);
color: blue;
padding: 18px;

margin-right:15px;
margin-bottom: 15px;
border-radius: 2rem; /* 10px */
`;

export default ContadorFuncional;