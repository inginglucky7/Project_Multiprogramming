import { Container } from 'postcss'
import React from 'react'
import styles from '../style';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero = () => {

  return (
    <section id="home" className={`flex md:flex-col flex-col`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031263453240905859/Logo_StandAlone.png" alt="Stand Alone"/>
      </div>
      
      <div className={`flex-1 flex flex-col justify-between items-center w-full ${styles.flexCenter} xl:px-0 sm:px-16 px-6`}>
        <h2 className={`font-medium mb-20 xl:text-2xl sm:text-lg ${styles.heading2} justify-center items-center flex`}>ตำนานจุดนัดฝัน สแตนด์อโลน</h2>
      </div>
      
      <div className={`flex-1 flex flex-col justify-between items-center w-full mb-20 ${styles.flexCenter} xl:px-0 sm:px-16 px-6`}>
        <p className={`${styles.paragraph} text-center text-lg`}>ครั้งหนึ่งเมื่อ 50-70 ปีที่แล้ว โรงภาพยนตร์แบบสแตนด์อโลน หรือโรงหนังเดี่ยวที่ตั้งอยู่โดด ๆ เคยได้รับความนิยมอย่างมาก </p>
        <br/>
        <p className={`${styles.paragraph} text-center text-lg`}>ก่อนที่วันเวลาและความเจริญก้าวหน้าของเทคโนโลยีจะพาโรงภาพยนตร์แบบมัลติเพล็กซ์สุดทันสมัยที่พร้อมด้วยสิ่งอำนวย<br/>
        ความสะดวกต่าง ๆ เข้ามาแทนที่และค่อย ๆ ลดบทบาทของโรงหนังสแตนด์อโลนจนผู้คนต่างหลงลืมอดีตที่เคยแสนรุ่งเรื่องนี้กันไปโดยปริยาย
        </p>
      </div>

      <div className='absolute right-40 bottom-40 w-[120px] h-[70px] sm:w-[238px] sm:h-[139px]'>
        <img src="https://cdn.discordapp.com/attachments/1031263201763016704/1031335920475045938/Group_70.png" alt="" 
        className='w-[238px] h-[139px]'/>
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <ArrowDownwardIcon className='w-[30px] h-[27px] object-contain' />
      </div>

    </section>
  )
}

export default Hero