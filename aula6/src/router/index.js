import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/home';
import Filmes from '../page/filmes';
import Details from '../page/details';


function RouterNavigation() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='filmes' element={<Filmes />} />
            <Route path='details/:id' element={<Details />} />
            {/* : significa que passaremos um parâmetro para essa rota */}
        </Routes>
    );
}

export default RouterNavigation