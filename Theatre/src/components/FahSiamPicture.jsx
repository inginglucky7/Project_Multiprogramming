import styles from "../style.js";
import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import Film from "../img/Svg/Film.svg";
import FahsiamHero from "../img/Hero/ฟ้าสยามภาพปก.png";

const FahSiamPicture = () => {
    let filmAnim = useRef(null);

    useEffect(() => {
        gsap.to(filmAnim,{

            }
        );
    }, []);

    
    return (
        <section id="FahsiamHero" className="xs:bg-red-300 sm:bg-yellow-300 md:bg-green-300 lg:bg-blue-300 xl:bg-pink-300">
            <div className="relative mt-12 max-w-[100vw] mx-auto">
                <img className="w-full h-full xs:scale-[1.25] sm:scale-100 object-center" src={FahsiamHero} alt="Fahsiam Theatre"/>
                <img className="absolute w-full xs:w-40 top-32" src={Film} alt=""/>
            </div>
        </section>

        /*<section id="FahsiamHero" className={`flex xs:bg-red-300 sm:bg-yellow-300 md:bg-green-300 lg:bg-blue-300 xl:bg-pink-300 md:flex-col flex-col`}>
            <div className={`${styles.flexCenter} flex-1 flex-col`}>
                <div className="z-10">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031330341950074910/4adc6e32ad68f46e.png"
                         className="scale-[1.95] pt-32 md:scale-100 xl:scale-100 xl:pt-0" alt="Fah siam"/>
                </div>

                <div>
                    <img ref={el => {filmAnim = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1035642824173031515/vt_.png" alt="film"
                         className="absolute w-[6.123rem] h-[6.054rem] top-[59.35rem] left-[.9rem]
                  xl:left-[25rem] xl:top-[84rem] xl:w-[22.75rem] xl:h-[22.563rem] z-0"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1035642823443239002/vt_.png" alt="slate"
                         className="absolute w-[7.687rem] h-[5.179rem] left-[17.1rem] top-[59.75rem] xl:w-[28.625rem] xl:h-[22.813rem] xl:left-[67.5rem] xl:top-[82.5rem] z-0"/>
                </div>
            </div>
        </section>*/
    )
}

export default FahSiamPicture;