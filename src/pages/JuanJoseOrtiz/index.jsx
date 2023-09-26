import React, { useState }         from 'react';
import { Route, Routes, }          from 'react-router-dom';
import { NavigationJuanJoseOrtiz } from '../../utils/NavigationJuanJoseOrtiz';
import RendererList from './RendererList';

function JuanJoseOrtizApp() {

  return (
    <>
        <NavigationJuanJoseOrtiz />        
        <Routes>
          <Route path="/juanjoseortiz/rendererlist" element={<RendererList />} />          
        </Routes>
    </>
  )
}

export default JuanJoseOrtizApp;
