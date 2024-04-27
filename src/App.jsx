import React from 'react'
import HeroPage from './components/heroSection';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Footer from './components/footer';
import SignIn from './components/Signin';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/salemydop' element={<HeroPage />} />
          <Route path='/salemydop/login' element={<Login />} />
          <Route path='/salemydop/signup' element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
