import styles from "../style.js";
import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";

const FahSiamPicture = () => {
    let filmAnim = useRef(null);

    useEffect(() => {
        gsap.to(filmAnim,{

            }
        );
    }, []);

    
    return (
        <div className={`${styles.flexCenter} flex-1 flex-col`}>
            <div className="z-10">
                <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031330341950074910/4adc6e32ad68f46e.png"
                     className="scale-[1.95] pt-32 xl:scale-100 xl:pt-0" alt="Fah siam"/>
            </div>

            <img ref={el => {filmAnim = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1035642824173031515/vt_.png" alt="film"
                 className="absolute w-[6.123rem] h-[6.054rem] top-[59.35rem] left-[.9rem]
                  xl:left-[25rem] xl:top-[84rem] xl:w-[22.75rem] xl:h-[22.563rem] z-0"/>
            <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1035642823443239002/vt_.png" alt="slate"
                 className="absolute w-[7.687rem] h-[5.179rem] left-[17.1rem] top-[59.75rem] xl:w-[28.625rem] xl:h-[22.813rem] xl:left-[67.5rem] xl:top-[82.5rem] z-0"/>
        </div>
    )
}

export default FahSiamPicture;