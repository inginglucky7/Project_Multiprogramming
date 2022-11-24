import React from 'react';
import {Chaloemkrung, Chaloemthai, Footer, Hero, Lido, Navbar, Promote, Scala, Fahsiam} from "./components/index.js";
import styles from './style.js';

const App = () => (
    <div className='w-full h-[100%]'>
        <div className={`flex justify-center max-w-full`}>
            <div className={`fixed z-20 ${styles.boxWidth}`}>
                <Navbar/>
            </div>
        </div>

        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
            </div>
        </div>

        <div>
            <Fahsiam/>
        </div>


        <div className={`${styles.boxWidth}`}>
            <Scala/>
        </div>

        <Chaloemkrung />

        <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Lido />
            </div>
        </div>

        <div className={`${styles.boxWidth}`}>
            <Chaloemthai/>
        </div>

        <div className={`${styles.boxWidth}`}>
            <Promote />
        </div>
        
        <div className={`${styles.boxWidth}`}>
            <Footer />
        </div>
        
    </div>
);

export default App