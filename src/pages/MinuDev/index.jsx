import React, { useState }               from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { CatsHome }                      from './Test/JuniorsAndTrainees/Cats/pages/CatsHome';
import { NavigationMinuDev }             from '../../utils/NavigationMinuDev';

function MinuDevApp() {

  return (
    <>
        <NavigationMinuDev />        
        <Routes>
          <Route path="/minudevs/catshome" element={<CatsHome />} />          
        </Routes>
    </>
  )
}

export default MinuDevApp;
