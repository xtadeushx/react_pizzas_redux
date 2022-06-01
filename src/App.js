

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

import Header from './components/header'
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFoundPage';
import { Context } from './context';


function App() {
  const [isUkraine, setIsUkraine] = useState(true);


  return (
    <Context.Provider value={{ isUkraine, setIsUkraine }} >
      <div className="wrapper">
        <Header />
        <div className="content">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
