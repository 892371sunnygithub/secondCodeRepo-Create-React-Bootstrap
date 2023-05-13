import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/home/Home';
import Layout from './layout/Layout';
import MainData from './common/main/MainData';
import About from './Pages/about/About';
// import Checkbox from './Checkbox'
// import Table from './Table'

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home/> </Layout>} />
        <Route path="/about" element={<Layout><About/> </Layout>} />
      </Routes>
    </BrowserRouter>
   </>
   
   
)
}

export default App