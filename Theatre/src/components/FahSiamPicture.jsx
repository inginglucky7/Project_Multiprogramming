import styles from "../style.js";
import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import Film from "../img/Svg/Film.svg";
import FahsiamHero from "../img/Hero/ฟ้าสยามภาพปก.png";
import Slate from "../img/Svg/vt สเลด.svg"

const FahSiamPicture = () => {
    let filmAnim = useRef(null);
    let slateAnim = useRef(null);
    useEffect(() => {
        gsap.to(filmAnim,{

            }
        );
    }, []);

    
    return (
        <section id="FahsiamHero" className="sm:bg-yellow-300 md:bg-green-300 lg:bg-blue-300 xl:bg-pink-300">
            <div className="max-w-[100%] max-h-[100%] h-auto w-auto">
                <div id="container" className="relative">
                    <img ref={el => {filmAnim = el}} className="absolute xs:w-[300px] max-w-[100%] w-[100%] h-auto
                    xs:right-[40vw] xs:top-[-42vw] xs:scale-[.8]
                    sm:right-[48vw] sm:top-[8vw] sm:scale-[1]
                    md:right-[48vw] md:top-[9vw] md:scale-[1]
                    lg:right-[55vw] lg:top-[16vw] lg:scale-[1.25]
                    xl:right-[59vw] xl:top-[19vw] xl:scale-[1.5]
                    m-0 m-auto z-0" src={Film} alt="Film"/>
                    <img ref={el => {slateAnim = el}} className="absolute xs:w-[300px] max-w-[100%] w-[100%] h-auto
                    xs:left-[43vw] xs:top-[-39vw] xs:scale-[.5]
                    sm:left-[51.4vw] sm:top-[9.8vw] sm:scale-[.7]
                    md:left-[52vw] md:top-[10vw] md:scale-[.8]
                    lg:left-[58vw] lg:top-[16.5vw] lg:scale-[1]
                    xl:left-[61vw] xl:top-[19.5vw] xl:scale-[1.25]
                    m-0 m-auto z-0" src={Slate} alt="Slate"/>
                </div>

                <div className="relative z-0">
                    <img className="max-w-full w-full h-full xs:scale-[1.8] sm:scale-100 md:scale125 object-cover object-center z-10" src={FahsiamHero} alt="Fahsiam Theatre"/>
                </div>
            </div>
        </section>

        /*<section id="FahsiamHero" className={`flex xs:bg-red-300 sm:bg-yellow-300 md:bg-green-300 lg:bg-blue-300 xl:bg-pink-300 md:flex-col flex-col`}>
            <div className={`${styles.flexCenter} flex-1 flex-col`}>
                <div className="z-10">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031330341950074910/4adc6e32ad68f46e.png"
                         className="scale-[1.95] pt-32 md:scale-100 xl:scale-100 xl:pt-0" alt="Fah siam"/>
                </div>

                <div>
                    <img ref={el => {filmAnim = el}} src={Film} alt="film"
                         className="absolute w-[6.123rem] h-[6.054rem] top-[59.35rem] left-[.9rem]
                  xl:left-[25rem] xl:top-[84rem] xl:w-[22.75rem] xl:h-[22.563rem] z-0"/>
                    <img src={Slate} alt="slate"
                         className="absolute w-[7.687rem] h-[5.179rem] left-[17.1rem] top-[59.75rem] xl:w-[28.625rem] xl:h-[22.813rem] xl:left-[67.5rem] xl:top-[82.5rem] z-0"/>
                </div>
            </div>
        </section>*/
    )
}

export default FahSiamPicture;