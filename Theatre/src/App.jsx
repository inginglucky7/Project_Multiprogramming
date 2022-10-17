import React from 'react';
<<<<<<< Updated upstream
=======
// import './App.css';
import { useState } from 'react';
>>>>>>> Stashed changes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Chaloemkrung, Chaloemthai, Footer, Hero, Lido, Navbar, Promote, Scala} from "./components";
import styles from './style';

const App = () => (
   
  <div className='w-full overflow-hidden'>
    <div className={`flex justify-center ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.flexCenter} xl:px-0 xl:w-full`}>
      <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031330341950074910/4adc6e32ad68f46e.png" alt="Fah siam" />
    </div>


  </div>
);

export default App