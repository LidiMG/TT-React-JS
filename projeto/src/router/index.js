import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Contato from '../page/Contato';


function RouterNavigation() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Contato' element={<Contato/>} />
    </Routes>
    )
}

export default RouterNavigation;