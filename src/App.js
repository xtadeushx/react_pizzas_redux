

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import {Context} from '../src/context'
import Header from './components/header'
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFoundPage';


function App() {
     const [searchValue, setInputValue] = useState('');

  return (
    <div className="wrapper">
      <Context.Provider value={{searchValue,setInputValue}}>
      <Header />
      <div className="content">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      </Context.Provider>
    </div>
  );
}

export default App;
