import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.js'
import Feed from './pages/Feed.js'

import Profile from './pages/Profile.js'
import Explore from './pages/Explore.js'
// import Footer from './components/Footer.js'

import './style.css';


function App() {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="*" element={<p>Temporary Error Page: 404</p>} />
        </Routes>
        {/* <Footer /> */}
    </main>
  );
}

export default App;
