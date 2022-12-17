import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componentes/Header';
import NavBar from './componentes/NavBar';
import ItemLista from './componentes/ItemListContainer';
import ItemDetalleContenedor from './componentes/ItemDetalleContenedor';
import Cart from './componentes/Cart';


const App = () => {


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Header/> 
      
      
    <Routes>
      <Route path='/' element= {<ItemLista/>}/>
      <Route path='/categoria/:categoriaId' element= {<ItemLista/>}/>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Detalle/:detalleId' element= {<ItemDetalleContenedor/>}/>
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
