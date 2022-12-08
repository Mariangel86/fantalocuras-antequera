import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componentes/Header';
import NavBar from './componentes/NavBar';
import ItemLista from './componentes/ItemListContainer';

import ContadorFuncional from './componentes/ContadorFuncional2';
import ItemDetalleContenedor from './componentes/ItemDetalleContenedor';
import Cart from './componentes/Cart';


const App = () => {

 const onAdd=(cantidad)=>{
  console.log(`compraste ${cantidad} unidades`);
 };


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Header/> 
      
      
    <Routes>
      <Route path='/' element= {<ItemLista/>}/>
      <Route path='/Categoria/:categoriaId' element= {<ItemLista/>}/>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Detalle/:detalleId' element= {<ItemDetalleContenedor/>}/>
      
      </Routes>
      <ContadorFuncional cantidadAincrementar={1} cantidadAdisminuir= {1} stock={8} onAdd={onAdd} initial={1}/>
      </BrowserRouter>
    </>
  );
}

export default App;
