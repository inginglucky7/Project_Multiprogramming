import React, {useRef, useEffect} from 'react'
import styles from '../style';
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
        <section id="home" className={`flex md:flex-col flex-col`}>
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 xs:pb-5`}>
                <img ref={el => {logoStandAlone = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1031263453240905859/Logo_StandAlone.png"
                     className="scale-[0.2]" alt="Stand Alone"/>
            </div>

            <div className={`flex-1 flex flex-col justify-between items-center w-full ${styles.flexCenter}`}>
                <h2 ref={el => {textStandAlone = el}} className={`font-medium opacity-0 mb-28 xl:mb-20 text-xl xl:text-2xl justify-center items-center flex`}>ตำนานจุดนัดฝัน สแตนด์อโลน</h2>
            </div>

            <div ref={el => {infoHero = el}} className={`flex-1 flex flex-col opacity-0 justify-between items-center w-full mb-6 xl:mb-20 ${styles.flexCenter} px-6`}>
                <p className={`${styles.paragraph} text-center text-lg`}>ครั้งหนึ่งเมื่อ 50-70 ปีที่แล้ว โรงภาพยนตร์แบบสแตนด์อโลน หรือโรงหนังเดี่ยวที่ตั้งอยู่โดด ๆ เคยได้รับความนิยมอย่างมาก </p>
                <br/>
                <p className={`${styles.paragraph} text-center text-lg`}>ก่อนที่วันเวลาและความเจริญก้าวหน้าของเทคโนโลยีจะพาโรงภาพยนตร์แบบมัลติเพล็กซ์สุดทันสมัยที่พร้อมด้วยสิ่งอำนวย<br/>
                    ความสะดวกต่าง ๆ เข้ามาแทนที่และค่อย ๆ ลดบทบาทของโรงหนังสแตนด์อโลนจนผู้คนต่างหลงลืมอดีตที่เคยแสนรุ่งเรื่องนี้กันไปโดยปริยาย
                </p>

            </div>

            <div>
                <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031335920475045938/Group_70.png" alt="bird"
                     className="xs:absolute xs:left-64 xs:right-0 xs:top-[21rem] xl:right-64 xl:h-[8.7rem] xl:w-[14.875rem] xl:left-[93.5rem] xl:top-[48rem]"/>
            </div>

            <div className='flex flex-1 justify-center items-center'>
                <ArrowDownwardIcon className='w-[30px] h-[27px] object-contain' />
            </div>
        </section>
    )
}

export default Hero