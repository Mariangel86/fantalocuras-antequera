import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import NavBar from './componentes/NavBar';
import ItemLista from './componentes/ItemListContainer';
// import UseReducer from './componentes/ContadorFuncional';
import ContadorFuncional from './componentes/ContadorFuncional2';
import Items from './componentes/Items';

const App = () => {
  const ejemplos=[
    {id:1, title: "Taza Mug", image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmagifotoonline.com%2Fproducto%2Fmugs-fotografico-personalizado%2F&psig=AOvVaw0jA5rGHOEB2vuhm9-WREGL&ust=1669778516450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCRu-y30vsCFQAAAAAdAAAAABAJ" },
    {id:2, title: "Taza Mug2", image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmagifotoonline.com%2Fproducto%2Fmugs-fotografico-personalizado%2F&psig=AOvVaw0jA5rGHOEB2vuhm9-WREGL&ust=1669778516450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCRu-y30vsCFQAAAAAdAAAAABAJ" },
    {id:3, title: "Taza Mug3", image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmagifotoonline.com%2Fproducto%2Fmugs-fotografico-personalizado%2F&psig=AOvVaw0jA5rGHOEB2vuhm9-WREGL&ust=1669778516450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCRu-y30vsCFQAAAAAdAAAAABAJ" }
  ];

  const [productos, CambiarProductos ] = useState ([]);

 const onAdd=(cantidad)=>{
  console.log(`compraste ${cantidad} unidades`);
 }

useEffect(()=>{
  const establecerProductos= new Promise(resolve => {
    setTimeout(()=>{
      resolve(ejemplos);
     },3000);
    });
    establecerProductos.then(resl=> CambiarProductos(resl));
},[])

  return (
    <div className='App'>
      <NavBar/>
      <Header/>
      <ItemLista title= "Hola"/>
      <Items productos={productos}/>
     {/* <UseReducer />*/}
      <ContadorFuncional cantidadAincrementar={1} cantidadAdisminuir= {1} stock={8} onAdd={onAdd} initial={1}/>
    </div>
  );
}

export default App;
