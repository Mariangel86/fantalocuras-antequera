import React, {useState,useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componentes/Header';
import NavBar from './componentes/NavBar';
//import ItemLista from './componentes/ItemListContainer';
// import UseReducer from './componentes/ContadorFuncional';
import ContadorFuncional from './componentes/ContadorFuncional2';
import Items from './componentes/Items';
import ItemDetalleContenedor from './componentes/ItemDetalleContenedor';
import Cart from './componentes/Cart';

const App = () => {
  const ejemplos=[
    {id:1, title: "Taza Mug", image:"https://grafico.online/wp-content/uploads/2021/05/Mug-1.png" },
    {id:2, title: "Taza Mug2", image:"https://grafico.online/wp-content/uploads/2021/05/Mug-1.png" },
    {id:3, title: "Taza Mug3", image:"https://grafico.online/wp-content/uploads/2021/05/Mug-1.png" }
  ];

const [productos, CambiarProductos ] = useState ([]);

 const onAdd=(cantidad)=>{
  console.log(`compraste ${cantidad} unidades`);
 };

useEffect(() => {
  const establecerProductos = new Promise(resolve => {
    setTimeout(() => {
      resolve(ejemplos);
     },3000);
    });
    establecerProductos.then(resl => CambiarProductos(resl));
  },[])

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Header/> 
      {/*<ItemLista title= "Hola"/>*/}
      
     {/* <UseReducer />*/}
      
    <Routes>
      <Route path='/' element= {<ItemDetalleContenedor/>}/>
      <Route path='/*' element= {<Items productos={productos}/>}/>
      <Route path='/Cart' element={<Cart/>}></Route>
      
      </Routes>
      <ContadorFuncional cantidadAincrementar={1} cantidadAdisminuir= {1} stock={8} onAdd={onAdd} initial={1}/>
      </BrowserRouter>
    </>
  );
}

export default App;
