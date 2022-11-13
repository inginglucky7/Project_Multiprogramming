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
        <section id="FahsiamHero" className="xs:bg-red-300 sm:bg-yellow-300 md:bg-green-300 lg:bg-blue-300 xl:bg-pink-300">
            <div className="mt-12 max-w-[100%] max-h-[100%] relative mx-auto">
                <div id="container" className="relative max-w-full max-h-full h-auto">
                    <div className="absolute flex scale-[.5] left-[-40vw] z-10">
                        <img ref={el => {filmAnim = el}} className="" src={Film} alt="Film"/>
                        <img ref={el => {slateAnim = el}} className="" src={Slate} alt="Slate"/>
                    </div>
                </div>

                <div className="relative z-0">
                    <img className="w-full h-full xs:scale-[1.8] sm:scale-100 md:scale125 object-cover object-center z-10" src={FahsiamHero} alt="Fahsiam Theatre"/>
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