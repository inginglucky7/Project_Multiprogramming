import { Container } from 'postcss'
import React from 'react'
import styles from '../style';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HeroPicture from "./HeroPicture.jsx";

const Hero = () => {

    return (
        <section id="home" className={`flex md:flex-col flex-col`}>
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 py-`}>
                <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031263453240905859/Logo_StandAlone.png" alt="Stand Alone"/>
            </div>

            <div className={`flex-1 flex flex-col justify-between items-center w-full ${styles.flexCenter}`}>
                <h2 className={`font-medium mb-28 xl:mb-20 text-xl xl:text-2xl justify-center items-center flex`}>ตำนานจุดนัดฝัน สแตนด์อโลน</h2>
            </div>

            <div className={`flex-1 flex flex-col justify-between items-center w-full mb-6 xl:mb-20 ${styles.flexCenter} px-6`}>
                <p className={`${styles.paragraph} text-center text-lg`}>ครั้งหนึ่งเมื่อ 50-70 ปีที่แล้ว โรงภาพยนตร์แบบสแตนด์อโลน หรือโรงหนังเดี่ยวที่ตั้งอยู่โดด ๆ เคยได้รับความนิยมอย่างมาก </p>
                <br/>
                <p className={`${styles.paragraph} text-center text-lg`}>ก่อนที่วันเวลาและความเจริญก้าวหน้าของเทคโนโลยีจะพาโรงภาพยนตร์แบบมัลติเพล็กซ์สุดทันสมัยที่พร้อมด้วยสิ่งอำนวย<br/>
                    ความสะดวกต่าง ๆ เข้ามาแทนที่และค่อย ๆ ลดบทบาทของโรงหนังสแตนด์อโลนจนผู้คนต่างหลงลืมอดีตที่เคยแสนรุ่งเรื่องนี้กันไปโดยปริยาย
                </p>
                <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031335920475045938/Group_70.png" alt="bird"
                     className="xs:absolute xs:left-64 xs:right-0 xs:top-96 xl:right-64 xl:h-[8.7rem] xl:w-[14.875rem] xl:left-[93.5rem] xl:top-[48rem]"/>
            </div>

            <div className='flex flex-1 justify-center items-center'>
                <ArrowDownwardIcon className='w-[30px] h-[27px] object-contain' />
            </div>
        </section>
    )
}

export default Hero