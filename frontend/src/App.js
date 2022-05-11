import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.js'
import Footer from './components/Footer.js'
import './style.css';


function App() {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={null} />
            <Route path='/explore' element={null} />
            <Route path='/profile' element={null} />
            <Route path="*" element={null} />
        </Routes>
        <Footer />
    </main>
  );
}

export default App;
