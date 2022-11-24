import React, {useRef, useEffect, useState} from 'react'
import styles from '../style.js';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = () => {
    let textStandAlone = useRef(null);
    let infoHero = useRef(null);
    let logoStandAlone = useRef(null);

    useEffect(() => {
        gsap.to(
            textStandAlone,1,{
                scrollTrigger: {
                    trigger: textStandAlone,
                    toggleActions: "restart pause restart pause"
                },
                opacity :1,
                y:-50,
                ease: "inOut"
            }
        );
        gsap.to(
            infoHero, 1,{
                scrollTrigger: {
                    trigger: infoHero,
                    toggleActions: "restart pause restart pause"
                },
                opacity :1,
                y:-50,
                ease: "inOut"
            }
        );
        gsap.to(
            logoStandAlone, .8, {
                scrollTrigger: {
                    trigger: logoStandAlone,
                    toggleActions: "restart pause resume play"
                },
                transform : "scale(1)",
                ease:"Power3.inOut",
            }
        );
    }, []);

    return (
        <section id="starting" className={`flex md:flex-col flex-col max-w-[100%] h-[100%] w-[100%]`}>
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 xs:pb-5`}>
                <img ref={el => {logoStandAlone = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1031263453240905859/Logo_StandAlone.png"
                     className="scale-[0.2]" alt="Stand Alone"/>
            </div>

            <div className={`w-full xs:mt-4 
            mb-20 xl:mb-20 text-xl xl:text-2xl ${styles.flexCenter}`}>
                <h2 ref={el => {textStandAlone = el}} className={`font-medium opacity-0`}>ตำนานจุดนัดฝัน สแตนด์อโลน</h2>
            </div>

            <div className="relative max-w-full max-h-full h-auto">
                <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031335920475045938/Group_70.png" alt="bird"
                     className="absolute xs:scale-[0.7] xs:w-40 xs:bottom-10 xs:left-[65vw] sm:left-[68vw] md:scale-[1] md:left-[70vw]
                     lg:left-[72vw] xl:scale-[1.25] xl:bottom-[-4vh] xl:left-[165vh] z-20"/>
            </div>

            <div ref={el => {infoHero = el}} className={`flex-1 flex flex-col opacity-0 justify-between items-center w-full xs:mb-0 mb-6 xl:mb-10 ${styles.flexCenter} px-6`}>
                <p className={`${styles.paragraph} text-center text-lg`}>ครั้งหนึ่งเมื่อ 50-70 ปีที่แล้ว โรงภาพยนตร์แบบสแตนด์อโลน หรือโรงหนังเดี่ยวที่ตั้งอยู่โดด ๆ เคยได้รับความนิยมอย่างมาก </p>
                <br/>
                <p className={`${styles.paragraph} text-center text-lg`}>ก่อนที่วันเวลาและความเจริญก้าวหน้าของเทคโนโลยีจะพาโรงภาพยนตร์แบบมัลติเพล็กซ์สุดทันสมัยที่พร้อมด้วยสิ่งอำนวย<br/>
                    ความสะดวกต่าง ๆ เข้ามาแทนที่และค่อย ๆ ลดบทบาทของโรงหนังสแตนด์อโลนจนผู้คนต่างหลงลืมอดีตที่เคยแสนรุ่งเรื่องนี้กันไปโดยปริยาย
                </p>
            </div>

            <div className='flex flex-1 justify-center items-center'>
                <ArrowDownwardIcon className='w-[30px] h-[27px] object-contain xs:mb-24 sm:mb-0' />
            </div>

        </section>
    )
}

export default Hero