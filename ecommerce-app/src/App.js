import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './app/components/layout';
import Home from './app/pages/Home';
import Contact from './app/pages/Contact';
import About from './app/pages/about';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="about" element={<About />}/>
      </Route>  
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
