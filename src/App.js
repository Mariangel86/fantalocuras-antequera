import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componentes/Header';
import NavBar from './componentes/NavBar';
import ItemLista from './componentes/ItemListContainer';
import ItemDetalleContenedor from './componentes/ItemDetalleContenedor';
import Cart from './componentes/Cart';
import CartProvider from './Contextos/CartContext';
import InicioSesion from './componentes/InicioSesion';
import RegistroUsuarios from './componentes/RegistroUsuarios';

const App = () => {


  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Header/> 
      
    <Routes>
      <Route path='/' element= {<ItemLista/>}/>
      <Route path='/categoria/:categoriaId' element= {<ItemLista/>}/>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Detalle/:detalleId' element= {<ItemDetalleContenedor/>}/>
      <Route path='/IniciarSesion' element= {<InicioSesion/>}></Route>
      <Route path="/Crear-cuenta" element={<RegistroUsuarios/>}/>
      
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
