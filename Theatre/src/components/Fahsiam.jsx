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
                <FahSiamPicture className={`z-10`} />
                <div className="mix-blend-difference">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031371918642782219/i.png"
                         className="sm:block z-[1] xl:mix-blend-multiply sm:absolute top-[146.45rem] xl:opacity-90 xs:hidden" alt="dustXl"/>
                </div>

                <div className="flex">
                    <img ref={el => {airplane1Ref = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036627864428236901/1.png"
                          className="sm:block z-[1] sm:absolute top-[155.25rem] pl-[3.5rem] xs:hidden" alt="airplane1Xl"/>

                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036627863983636550/2.png"
                         className="sm:block z-[1] sm:absolute top-[176.05rem] pl-52 xs:hidden" alt="airplane2Xl"/>

                    <div ref={el => {turningPointRef = el}} className={`${styles.heading3Fahsiam} opacity-0 sm:flex sm:absolute top-[184.75rem]
                          pl-[44rem] xs:hidden`}>
                        จุดเปลี่ยน
                    </div>

                    <div className={`${styles.paragraph} sm:justify-start sm:block sm:absolute sm:pl-[44rem] sm:top-[188.75rem] xs:hidden`}>
                        <p ref={el => {turningPointInfoRef1 = el}} className="opacity-0">การยุติลงของสงครามโลกครั้งที่ 2 ใน พ.ศ. 2488 นอกจากจะเป็นจุดหมายสำคัญในทางการเมืองและ<br/>
                            ความสัมพันธ์ระหว่างประเทศแล้ว การสิ้นสุดสงครามครั้งนี้ยังมีความสำคัญต่อมิติทางสังคมและ<br/>
                            วัฒนธรรมอีกด้วย
                        </p>
                    </div>
                </div>

                <div className="flex flex-1 flex-col mx-auto xs:hidden sm:block sm:relative">
                    <p ref={el => {turningPointInfoRef2 = el}} className={`${styles.paragraph} opacity-0 sm:absolute -top-[3.74rem] pl-[51rem]`}>ในวงการภาพยนตร์ไทยเมื่อสงครามอุบัติขึ้นทำให้กิจการฉายภาพยนตร์เข้าสู่ภาวะชะงักงันและซบเซา<br/>
                        แต่เมื่อภัยสงครามได้จบสิ้นลงในวงการภาพยนตร์ก็กลับมาฟื้นคืนชีพอีกครั้งรวมถึงเกิดความเปลี่ยนแปลง<br/>
                        อันพลิกโฉมหน้าของกิจการภาพยนตร์ก็มาพร้อมกับทศวรรษใหม่ที่ตามมา</p>
                </div>

                <div className="xs:bottom-0　xs:hidden sm:relative sm:pb-[60rem]">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031371918131073055/1651bf59ec5b8680.png"
                         className="mix-blend-multiply sm:flex z-[0] sm:absolute -top-72 xs:hidden" alt="ruin"/>
                    <img ref={el => {soldierRef1 = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676987571404811/2_1.png"
                         className="sm:block z-[1] sm:absolute top-[27rem] pl-[29.5rem] xs:hidden" alt="soldier1"/>
                    <img ref={el => {soldierRef2 = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676988011823124/3.png"
                         className="sm:block z-[1] sm:absolute top-[21rem] pl-[22rem] xs:hidden" alt="soldier2"/>
                    <img ref={el => {soldierRef3 = el}} src="https://cdn.discordapp.com/attachments/1031263201763016704/1036677029833220096/1_1.png"
                         className="sm:block z-[1] sm:absolute top-[27.5rem] pl-[66rem] xs:hidden" alt="soldier3"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676987214909560/1.png"
                         className="sm:block z-[2] sm:absolute top-[44rem] xs:hidden " alt="tearedPaper"/>
                </div>


                <div className="mix-blend-difference opacity-100 sm:hidden xl:hidden">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036032069177978990/2_2.png"
                         className={`z-[1] xs:absolute xs:top-[80.75rem] opacity-[90%] mix-blend-multiply 
                         xs:drop-shadow-[4px_0px_4px_rgba(0, 0, 0, 0.25)]`} alt="dustXs"/>
                </div>

                <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036026374198153296/Group_101.png"
                     className={`xs:absolute xs:top-[81.75rem] xs:left-5 z-[2]`} alt="airplane1"/>

                <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036026373824839680/3_2.png"
                     className={`xs:absolute xs:top-[87.75rem] xs:left-16 opacity-80 z-[2]`} alt="airplane2"/>
            </div>

            <div id={`ResponsiveFahsiam`} className="sm:hidden">
                <div className={`${styles.heading3Fahsiam} xs:ml-10 xs:mb-5 xs:relative flex flex-col flex-1`}>
                    จุดเปลี่ยน
                </div>

                <div className={`${styles.paragraph} xs:ml-10 xs:mb-36`}>
                    การยุติลงของสงครามโลกครั้งที่ 2<br/>
                    ใน พ.ศ. 2488 นอกจากจะเป็นจุดหมาย<br/>
                    สำคัญในทางการเมืองและความสัมพันธ์<br/>
                    ระหว่างประเทศแล้วการสิ้นสุดสงคราม<br/>
                    ครั้งนี้ยังมีความสำคัญต่อมิติทางสังคม<br/>
                    และวัฒนธรรมอีกด้วย
                </div>

                <div className={`${styles.paragraph} xs:ml-10 xs:mb-28`}>
                    ในวงการภาพยนตร์ไทยเมื่อสงครามอุบัติ<br/>
                    ขึ้นทำให้กิจการฉายภาพยนตร์เข้าสู่ภาวะ<br/>
                    ชะงักงัน และซบเซา<br/>
                    แต่เมื่อภัยสงครามได้จบสิ้นลงในวงการ<br/>ภาพยนตร์
                    ก็กลับมาฟื้นคืนชีพอีกครั้งรวมถึง<br/>
                    เกิดความเปลี่ยนแปลงอันพลิกโฉมหน้าของกิจการภาพยนตร์ก็มาพร้อมกับทศวรรษ<br/>
                    ใหม่ที่ตามมา
                </div>

                <div className="xs:bottom-0">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031371918131073055/1651bf59ec5b8680.png"
                         className="mix-blend-multiply xs:scale-[1.3] sm:hidden" alt="ruin"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036340759495966731/3.png"
                         className="xs:absolute xs:top-[147.55rem] xs:left-4 sm:hidden" alt="soldier1"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036340758564831302/2_1.png"
                         className="xs:absolute xs:top-[148.75rem] xs:left-[3.2rem] sm:hidden" alt="soldier2"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036340758174781651/1_1.png"
                         className="xs:absolute xs:top-[149.55rem] xs:left-[14.5rem] sm:hidden" alt="soldier3"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036340758946529311/2_2.png"
                         className="xs:absolute xs:top-[154.35rem] sm:hidden"
                         alt="tearedPaper"/>
                </div>
            </div>

        </section>
    )
}

export default Fahsiam