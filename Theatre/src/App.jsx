import React from 'react';
import './App.css';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Scala from './components/Scala';
import Chaloemkrung from './components/Chaloemkrung';
import Lido from './components/Lido';
import Chaloemthai from './components/Chaloemthai';
import Promote from './components/Promote'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/scala" element={<Scala />} />
        <Route path="/chaloemkrung" element={<Chaloemkrung />} />
        <Route path="/lido" element={<Lido />} />
        <Route path="/chaloemthai" element={<Chaloemthai />} />
        <Route path="/promote" element={<Promote />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
