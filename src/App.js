import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/home/Home';
import Layout from './layout/Layout';

import GetStarted from './Pages/about/GetStarted';
import AlertComponent from './Pages/alert/AlertComponent';


const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/introduction" element={<Layout><GetStarted/> </Layout>} />
        <Route path="/alert" element={<Layout><AlertComponent /> </Layout>} />
      </Routes>
    </BrowserRouter>
   </>
   
   
)
}

export default App