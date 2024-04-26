import React from 'react'
import HeroPage from './components/heroSection';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/salemydop' element={<HeroPage />} />
          <Route path='/salemydop/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
