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
    let turningPointInfoRef3 = useRef(null);
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
        gsap.to(
            turningPointInfoRef3, 1,{
                scrollTrigger: {
                    trigger: turningPointInfoRef2,
                    toggleActions: "restart pause restart pause"
                },
                opacity :1,
                y:-50,
                ease: "inOut"
            }
        );
        gsap.to(airplane1Ref, 1, {
            scrollTrigger: {
                trigger: airplane1Ref,
                scrub: 1,
            },
            x: 400,
            ease: "inOut"
        });
        gsap.to(soldierRef1, 2, {
            scrollTrigger: {
                trigger: soldierRef1,
                scrub: 1,
            },
            x: "20vw",
            ease: "inOut"
        });
        gsap.to(soldierRef2, 5, {
            scrollTrigger: {
                trigger: soldierRef2,
                scrub: 1,
            },
            x: "10vw",
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

                <div id="airplane_container" className="max-w-[100%] max-h-[100%] h-auto mx-auto">
                    <div className="relative">
                        <img ref={el => {airplane1Ref = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036627864428236901/1.png"
                             className="absolute h-auto w-[100%] max-w-[36vw]
                             xs:bottom-[46vw] xs:left-[5vw]
                             sm:bottom-[34vw]
                             xl:bottom-[37vw] xl:pl-[5vw] " alt="airplane1Xl"/>
                        <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036627863983636550/2.png"
                             className="absolute h-auto w-[100%] max-w-[36vw]
                             xs:bottom-[34vw] xs:left-[14vw]
                             sm:bottom-[26vw]
                             xl:bottom-[28vw] xl:pl-[12vw] xl:left-0" alt="airplane2Xl"/>
                    </div>
                </div>

                <div className="sm:max-w-[100%] max-h-[100%] h-auto w-[100%] mx-auto sm:mb-0 xs:max-w-sm">
                    <div className="relative">
                        <h2 ref={el => {turningPointRef = el}} className={`${styles.heading3Fahsiam} opacity-0 xs:relative
                        xs:pl-[10vw] xs:bottom-[14vw]
                        sm:
                        xl:pl-[40vw] xl:bottom-[60vh]`}>จุดเปลี่ยน</h2>
                        <p ref={el => {turningPointInfoRef1 = el}} className={`${styles.paragraph} opacity-0 xs:relative sm:absolute
                        xs:pl-[0%] xs:mx-[10%] xs:bottom-[5vw]
                        xl:pl-[20%] xl:bottom-[47vh] xl:mx-[20%]`}>การยุติลงของสงครามโลกครั้งที่ 2 ใน พ.ศ. 2488 นอกจากจะเป็นจุดหมายสำคัญในทางการเมืองและ
                            ความสัมพันธ์ระหว่างประเทศแล้ว การสิ้นสุดสงครามครั้งนี้ยังมีความสำคัญต่อมิติทางสังคมและ วัฒนธรรมอีกด้วย
                        </p>
                        <p ref={el => {turningPointInfoRef2 = el}} className={`${styles.paragraph} opacity-0 absolute top-0
                        xs:hidden sm:block
                        xl:pl-[44.5vw] xl:pt-10`}>ในวงการภาพยนตร์ไทยเมื่อสงครามอุบัติขึ้นทำให้กิจการฉายภาพยนตร์เข้าสู่ภาวะชะงักงันและซบเซา<br/>
                            แต่เมื่อภัยสงครามได้จบสิ้นลงในวงการภาพยนตร์ก็กลับมาฟื้นคืนชีพอีกครั้งรวมถึงเกิดความเปลี่ยนแปลง<br/>
                            อันพลิกโฉมหน้าของกิจการภาพยนตร์ก็มาพร้อมกับทศวรรษใหม่ที่ตามมา</p>
                        <p ref={el => {turningPointInfoRef3 = el}} className={`${styles.paragraph} xs:relative bottom-[22vw] sm:hidden mx-10 pt-40`}>
                            ในวงการภาพยนตร์ไทยเมื่อสงครามอุบัติขึ้นทำให้กิจการฉายภาพยนตร์เข้าสู่ภาวะชะงักงันและซบเซา<br/>
                            แต่เมื่อภัยสงครามได้จบสิ้นลงในวงการภาพยนตร์ก็กลับมาฟื้นคืนชีพอีกครั้งรวมถึงเกิดความเปลี่ยนแปลง
                            อันพลิกโฉมหน้าของกิจการภาพยนตร์ก็มาพร้อมกับทศวรรษใหม่ที่ตามมา
                        </p>
                    </div>
                </div>

                <div className="xs:bottom-0 sm:pb-[70vw] max-w-[100%] h-full w-[100%]">
                    <div className="relative max-w-[100%] h-full w-[100%]">
                        <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031371918131073055/1651bf59ec5b8680.png"
                             className="mix-blend-multiply relative sm:flex z-[0]
                             sm:bottom-[14vw]
                             xl:bottom-[14vw] max-w-[100%] h-auto w-[100%]" alt="ruin"/>
                        <img ref={el => {soldierRef1 = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676987571404811/2_1.png"
                             className="z-[1] absolute max-w-[42%] h-auto w-[100%]
                             xs:pl-[6%] xs:top-[29vw] xs:left-[20vw]

                             xl:pt-[22%] xl:pl-[22%] xl:top-[0vw] xl:left-[0vw]" alt="soldier1"/>
                        <img ref={el => {soldierRef2 = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676988011823124/3.png"
                             className="absolute z-[1] max-w-[38%] h-auto w-[100%]
                             xs:top-[22vw] xs:left-[0vw]
                             sm:block
                             xl:pt-[15%] xl:pl-[16%] xl:top-[0vw] xl:left-[0vw]" alt="soldier2"/>
                        <img ref={el => {soldierRef3 = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036677029833220096/1_1.png"
                             className="z-[1] max-w-[73vw] h-auto w-[100%]
                             xs:hidden
                             sm:absolute sm:block
                             xl:pl-[57%] xl:" alt="soldier3"/>
                        <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676987214909560/1.png"
                             className="z-[2] xs:absolute xs:top-[58vw]
                             sm:pt-[37vw]
                             max-w-[100%] h-auto w-[100%]" alt="tearedPaper"/>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Fahsiam