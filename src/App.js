import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './scss/app.scss';
import { Context } from '../src/context';
import Header from './components/header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFoundPage';
import CartEmpty from './pages/CartEmpty';


function App() {
  const [searchValue, setInputValue] = useState('');
  const { cartValue } = useSelector((state) => state.cart);

  return (
    <div className="wrapper">
      <Context.Provider value={{ searchValue, setInputValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={cartValue.length > 0 ? <Cart /> : <CartEmpty />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
