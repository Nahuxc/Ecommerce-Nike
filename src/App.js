import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Formulario from './components/Formulario/Formulario';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './components/Context/CartContext';
import { NotificationProvider } from './Notification/notification';
import './body.css';

const App = () => {


  return (
      <div className="body">
        <CartContextProvider>
          <NotificationProvider>
              <BrowserRouter>
                <NavBar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/:categoriaId' element={<ItemListContainer/>}/>
                  <Route path='/detalle/:productId' element={<ItemDetailContainer/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/usuario' element={<Formulario/>}/>
                  <Route path='*' element={<h1 className='advert'>PAGE NOT FOUND 404</h1>}/>
                </Routes>
                <Footer/>
              </BrowserRouter>
            </NotificationProvider>
          </CartContextProvider>
      </div>
  );
}

export default App;
