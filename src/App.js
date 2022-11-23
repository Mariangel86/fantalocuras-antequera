import React from 'react';
import './App.css';
import Header from './componentes/Header';
import NavBar from './componentes/NavBar';
import ContadorFuncional from './componentes/ContadorFuncional';
import ItemLista from './componentes/ItemListContainer';

const App = () => {

//const locunum = 5;

  return (
    <div className='App'>
      <NavBar/>
      <Header/>
      <ItemLista/>
      <ContadorFuncional />
    </div>
  );
}

export default App;
