import React from 'react'
import styles from '../style.js';
import HeroPicture from "./HeroPicture.jsx";

const Fahsiam = () => {
    return (
        <section id="fahsiam" className="flex md:flex-col flex-col">
            <div id="image-fahsiam">
                <HeroPicture className={`z-10`}/>

                <div className="mix-blend-difference">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031371918642782219/i.png"
                         className="sm:block z-[1] xl:mix-blend-multiply sm:absolute top-[145.3rem] xl:opacity-90 xs:hidden" alt="dustXl"/>
                </div>

                <div>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036627864428236901/1.png"
                          className="sm:block z-[1] sm:absolute top-[154rem] pl-[3.5rem] xs:hidden" alt="airplane1Xl"/>
                    <div className={`${styles.heading3Fahsiam} sm:flex sm:absolute top-[184.5rem]
                          pl-[44rem] xs:hidden`}>
                        จุดเปลี่ยน
                    </div>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036627863983636550/2.png"
                         className="sm:block z-[1] sm:absolute top-[174.8rem] pl-52 xs:hidden" alt="airplane2Xl"/>
                </div>

                <div className="xs:bottom-0　xs:hidden sm:relative sm:pb-[80rem] md:">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031371918131073055/1651bf59ec5b8680.png"
                         className="mix-blend-multiply sm:flex z-[1] sm:absolute -top-72 xs:hidden" alt="ruin"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676987571404811/2_1.png"
                         className="sm:block z-[1] sm:absolute sm:absolute xs:hidden" alt="soldier1"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676988011823124/3.png"
                         className="sm:block z-[1] sm:absolute sm:absolute xs:hidden" alt="soldier2"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036677029833220096/1_1.png"
                         className="sm:block z-[1] sm:absolute sm:absolute xs:hidden" alt="soldier3"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036676987214909560/1.png"
                         className="sm:block z-[1] sm:absolute sm:absolute xs:hidden" alt="tearedPaper"/>
                </div>


                <div className="mix-blend-difference opacity-100 sm:hidden xl:hidden">
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036032069177978990/2_2.png"
                         className={`z-[1] xs:absolute xs:top-[79.5rem] opacity-[90%] mix-blend-multiply 
                         xs:drop-shadow-[4px_0px_4px_rgba(0, 0, 0, 0.25)]`} alt="dustXs"/>
                </div>

                <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036026374198153296/Group_101.png"
                     className={`xs:absolute xs:top-[80.5rem] xs:left-5 z-[2]`} alt="airplane1"/>

                <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036026373824839680/3_2.png"
                     className={`xs:absolute xs:top-[86.5rem] xs:left-16 opacity-80 z-[2]`} alt="airplane2"/>
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
                         className="xs:absolute xs:top-[146.3rem] xs:left-4 sm:hidden" alt="soldier1"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036340758564831302/2_1.png"
                         className="xs:absolute xs:top-[147.5rem] xs:left-[3.2rem] sm:hidden" alt="soldier2"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036340758174781651/1_1.png"
                         className="xs:absolute xs:top-[148.3rem] xs:left-[14.5rem] sm:hidden" alt="soldier3"/>
                    <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1036340758946529311/2_2.png"
                         className="xs:absolute xs:top-[153.1rem] sm:hidden"
                         alt="tearedPaper"/>
                </div>
            </div>

        </section>
    )
}

export default Fahsiam