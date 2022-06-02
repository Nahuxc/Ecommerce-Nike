import React from 'react';
import './body.css';
import NavBar from './components/nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="body">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:productId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
