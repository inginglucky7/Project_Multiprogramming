import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Chaloemkrung, Chaloemthai, Footer, Hero, Lido, Navbar, Promote, Scala, Fahsiam} from "./components";
import styles from './style';

const App = () => (

    <div className='w-full overflow-hidden'>
        <div className={`flex justify-center ${styles.paddingX}`}>
            <div className={`xl:fixed xl:z-20 ${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>

        <div>
            <Fahsiam/>
        </div>


        <div className={`${styles.boxWidth}`}>
            <Scala/>
        </div>


        <Chaloemkrung />

        {/* <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Chaloemkrung />
      </div>
    </div> */}

        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Lido />
            </div>
        </div>

        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Chaloemthai />
            </div>
        </div>

        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Promote />
            </div>
        </div>

        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
);

export default App