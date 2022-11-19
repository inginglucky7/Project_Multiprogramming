import React, {useEffect, useRef} from 'react'
import styles from '../style.js';
import FahSiamPicture from "./FahSiamPicture.jsx";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Fahsiam = () => {
    let airplane1Ref = useRef(null);
    let turningPointRef = useRef(null);
    let turningPointInfoRef1 = useRef(null);
    let turningPointInfoRef2 = useRef(null);
    let soldierRef1 = useRef(null);
    let soldierRef2 = useRef(null);
    let soldierRef3 = useRef(null);
    useEffect(()=> {
        gsap.to(
            turningPointRef, 1,{
                scrollTrigger: {
                    trigger: turningPointRef,
                    toggleActions: "restart pause restart pause"
                },
                opacity :1,
                y:-50,
                ease: "inOut"
            }
        );
        gsap.to(
            turningPointInfoRef1, 1,{
                scrollTrigger: {
                    trigger: turningPointInfoRef1,
                    toggleActions: "restart pause restart pause"
                },
                opacity :1,
                y:-50,
                ease: "inOut"
            }
        );
        gsap.to(
            turningPointInfoRef2, 1,{
                scrollTrigger: {
                    trigger: turningPointInfoRef2,
                    toggleActions: "restart pause restart pause"
                },
                opacity :1,
                y:-50,
                ease: "inOut"
            }
        );
        gsap.to(airplane1Ref, 6, {
            scrollTrigger: {
                trigger: airplane1Ref,
                scrub: 1,
            },
            x: 1200,
            ease: "inOut"
        });
        gsap.to(soldierRef1, 5, {
            scrollTrigger: {
                trigger: soldierRef1,
                scrub: 1,
            },
            x: 500,
            ease: "inOut"
        });
        gsap.to(soldierRef2, 5, {
            scrollTrigger: {
                trigger: soldierRef2,
                scrub: 1,
            },
            x: 200,
            ease: "inOut"
        });
        gsap.to(soldierRef3, 5, {
            scrollTrigger: {
                trigger: soldierRef3,
                scrub: 2,
            },
            x: 100,
            ease: "inOut"
        });
    }, []);

    return (
        <section id="fahsiam" className="flex md:flex-col flex-col">
            <div id="image-fahsiam">

                <div className="max-w-[100%] max-h-[100%] h-full mx-auto">
                    <div className="relative">
                        <FahSiamPicture className={`z-10`} />
                        <div className="mix-blend-difference z-0">
                            <img className="absolute top-[55vw] sm:hidden md:hidden lg:hidden" src="https://cdn.discordapp.com/attachments/1031263201763016704/1036032069177978990/2_2.png"/>
                            <img className="absolute top-[70vw] xs:hidden sm:block" src="https://cdn.discordapp.com/attachments/1031263201763016704/1031371918642782219/i.png"/>
                        </div>
                    </div>
                </div>


                <div id="airplane_container" className="max-w-[100%] max-h-[100%] h-full mx-auto">
                    <div className="relative">
                        <img ref={el => {airplane1Ref = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036627864428236901/1.png"
                             className="absolute sm:bottom-[37vw] sm:pl-[5vw]" alt="airplane1Xl"/>
                        <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036627863983636550/2.png"
                             className="absolute sm:bottom-[28vw] sm:pl-[12vw]" alt="airplane2Xl"/>
                    </div>
                </div>

                <div className="max-w-[100%] max-h-[100%] h-full mx-auto">
                    <div className="relative">
                        <h2 ref={el => {turningPointRef = el}} className={`${styles.heading3Fahsiam} opacity-0 absolute 
                        xl:pl-[40vw] xl:bottom-[60vh]`}>จุดเปลี่ยน</h2>
                        <p ref={el => {turningPointInfoRef1 = el}} className={`${styles.paragraph} opacity-0 absolute 
                        xl:pl-[40vw] xl:bottom-[47vh]`}>การยุติลงของสงครามโลกครั้งที่ 2 ใน พ.ศ. 2488 นอกจากจะเป็นจุดหมายสำคัญในทางการเมืองและ<br/>
                            ความสัมพันธ์ระหว่างประเทศแล้ว การสิ้นสุดสงครามครั้งนี้ยังมีความสำคัญต่อมิติทางสังคมและ<br/>
                            วัฒนธรรมอีกด้วย
                        </p>
                    </div>

                    <div className={`${styles.paragraph} sm:justify-start sm:block sm:absolute sm:pl-[44rem] sm:top-[188.75rem] xs:hidden`}>

                    </div>
                </div>

                <div className="flex flex-1 flex-col mx-auto xs:hidden sm:block sm:relative">
                    <p ref={el => {turningPointInfoRef2 = el}} className={`${styles.paragraph} opacity-0 sm:absolute -top-[3.74rem] pl-[51rem]`}>ในวงการภาพยนตร์ไทยเมื่อสงครามอุบัติขึ้นทำให้กิจการฉายภาพยนตร์เข้าสู่ภาวะชะงักงันและซบเซา<br/>
                        แต่เมื่อภัยสงครามได้จบสิ้นลงในวงการภาพยนตร์ก็กลับมาฟื้นคืนชีพอีกครั้งรวมถึงเกิดความเปลี่ยนแปลง<br/>
                        อันพลิกโฉมหน้าของกิจการภาพยนตร์ก็มาพร้อมกับทศวรรษใหม่ที่ตามมา</p>
                </div>

                <div className="xs:bottom-0　xs:hidden sm:relative sm:pb-[60rem]">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031371918131073055/1651bf59ec5b8680.png"
                         className="mix-blend-multiply sm:flex z-[0] sm:absolute -top-72 xs:hidden z-10" alt="ruin"/>
                    <img ref={el => {soldierRef1 = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676987571404811/2_1.png"
                         className="sm:block z-[1] sm:absolute top-[27rem] pl-[29.5rem] xs:hidden" alt="soldier1"/>
                    <img ref={el => {soldierRef2 = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676988011823124/3.png"
                         className="sm:block z-[1] sm:absolute top-[21rem] pl-[22rem] xs:hidden" alt="soldier2"/>
                    <img ref={el => {soldierRef3 = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036677029833220096/1_1.png"
                         className="sm:block z-[1] sm:absolute top-[27.5rem] pl-[66rem] xs:hidden" alt="soldier3"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676987214909560/1.png"
                         className="sm:block z-[2] sm:absolute top-[44rem] xs:hidden " alt="tearedPaper"/>
                </div>
            </div>

        </section>
    )
}

export default Fahsiam