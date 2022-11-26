import React from 'react';
import './App.css';
import Header from './componentes/Header';
import NavBar from './componentes/NavBar';
import ItemLista from './componentes/ItemListContainer';
import UseReducer from './componentes/ContadorFuncional';
const App = () => {

//const locunum = 5;

  return (
    <div className='App'>
      <NavBar/>
      <Header/>
      <ItemLista title= "Hola"/>
      <UseReducer />
    </div>
  );
}

export default App;
