import React from 'react'
import './Promote.css';
import './Scala.css';
import PMRollPaper from '../img/Promote/PMRollPaper.png'
import PMRollPaperBG from '../img/Promote/PMRollPaperBG.png'
import PMText from '../img/Promote/PMTXT.png'
import PMLT from '../img/Promote/PMLT.png'
import PMSales from '../img/Promote/PMSales.png'
import PMRedCar from '../img/Promote/PMRedCar.png'
import PMWatch from '../img/Promote/PMWatch.png'
import PMWallet from '../img/Promote/PMWallet.png'
import PMText2 from '../img/Promote/PMTXT2.png'
import * as ScalaJS from '../../scala';

const Promote = () => {
  return (
    <div className='promotebody'>

      <div>
        <img className='absolute scale-100' src={PMRollPaper} alt="pmpaper" />
        <img id='txt-01' className='absolute scale-100' src={PMText} alt="pmtxt" />
        <img className='scale-100' src={PMRollPaperBG} alt="pmpaperbg" />
      </div>

      <div className='xs:hidden sm:block'>
        <div className='flex justify-center items-center'>
          <div><img id='txt-02' src={PMLT} alt="lt" /></div>
          <div className='ml-56'>
            <p id='txt-01' className='text-xl text-promote mb-8'>บรรยากาศหน้าโรงหนังสมัยก่อน</p>
            <p id='txt-01' className='text-base text-promote'>สมัยก่อนโรงภาพยนตร์จะฉายวันธรรมดาเพียงสามเวลาด้วยกัน คือรอบแรกบ่ายสามโมงครึ่ง (15:30) <br />
              รอบค่ำประมาณหนึ่งทุ่มครึ่ง (19:30) และรอบดึกราวสามทุ่มครึ่ง (21:30) แต่ถ้าเป็นวันสุดสัปดาห์ <br />
              จะเพิ่มรอบเที่ยง (12:00) ขึ้นมาอีกหนึ่งรอบ ส่วนในช่วงเทศกาล จะมีการเพิ่มรอบมิดไนท์เที่ยงคืน (00:00) อีกด้วย <br /><br />
              
              ส่วนกิจกรรมหน้าโรงหนัง เช่น การเอาวงดนตรีมาจัดแสดงระหว่างรอชมภาพยนตร์ <br />
              เป็นอีกหนึ่งกิจกรรมการ โปรโมทหนังอีกด้วย และหากเป็นหนังดังจะมีการจัดทำพร็อพ <br /> 
              เช่น รถถัง รถมอเตอร์ไซค์ หรือให้คนมาแต่งกายเป็นตัวละครในเรื่องนั้น</p>
          </div>
        </div>
      </div>
      <div className='sm:hidden xs:block mt-20'>
        <div className='flex justify-center'><img id='txt-02' className='w-11/12' src={PMLT} alt="lt" /></div>
        <div className='mt-32'>
          <p id='txt-01' className='text-xl text-promote text-center mb-8'>บรรยากาศหน้าโรงหนังสมัยก่อน</p>
          <p id='txt-01' className='text-sm text-promote mx-8'>สมัยก่อนโรงภาพยนตร์จะฉายวันธรรมดาเพียงสามเวลาด้วยกัน คือรอบแรกบ่ายสามโมงครึ่ง (15:30)
            รอบค่ำประมาณหนึ่งทุ่มครึ่ง (19:30) และรอบดึกราวสามทุ่มครึ่ง (21:30) แต่ถ้าเป็นวันสุดสัปดาห์
            จะเพิ่มรอบเที่ยง (12:00) ขึ้นมาอีกหนึ่งรอบ ส่วนในช่วงเทศกาล จะมีการเพิ่มรอบมิดไนท์เที่ยงคืน (00:00) อีกด้วย <br /><br />
                
            ส่วนกิจกรรมหน้าโรงหนัง เช่น การเอาวงดนตรีมาจัดแสดงระหว่างรอชมภาพยนตร์
            เป็นอีกหนึ่งกิจกรรมการ โปรโมทหนังอีกด้วย และหากเป็นหนังดังจะมีการจัดทำพร็อพ
            เช่น รถถัง รถมอเตอร์ไซค์ หรือให้คนมาแต่งกายเป็นตัวละครในเรื่องนั้น</p>
        </div>
      </div>

      <div className='xs:hidden sm:block mt-40'>
        <div className='flex items-center'>
          <div className='w-1/2 ml-60'>
            <p id='txt-01' className='text-xl text-promote mb-8'>ของกินหน้าโรงหนัง</p>
            <p id='txt-01' className='text-base text-promote'>สมัยก่อนบรรยากาศหน้าโรงหนังจะดูคึกคักเป็นอย่างมาก จะมีรถเข็นนำผลไม้และอาหารคาวหวาน <br />
              อาทิ มะยมดอง ฝรั่งชุบบ๊วย ปลาหมึกย่าง คนสงขลาจะเรียกรถเข็นเหล่านี้ว่า "รถกุ๊งกิ๊ง" <br /><br />

              และถ้าย้อนไปที่ "สหภาพยนตร์" โรงหนังดังเมืองสงขลา จะมีอาแปะถือถาดหนึ่งใบภายในถาด <br />
              ประกอบไปด้วย บุหรี่ ของขบเคี้ยว หมากฝรั่ง ฯลฯ เดินเร่ขายภายในโรงภาพยนตร์ก่อนหนังฉาย</p>
          </div>
          <div className='w-1/2'><img id='txt-04' className='ml-36' src={PMSales} alt="sales" /></div>
        </div>
      </div>
      <div className='sm:hidden xs:block mt-40'>
        <div><img id='txt-04' className='w-11/12 ml-12' src={PMSales} alt="sales" /></div>
        <div className='mt-32'>
          <p id='txt-01' className='text-xl text-promote text-center mb-8'>ของกินหน้าโรงหนัง</p>
          <p id='txt-01' className='text-sm text-promote mx-8'>สมัยก่อนบรรยากาศหน้าโรงหนังจะดูคึกคักเป็นอย่างมาก จะมีรถเข็นนำผลไม้และอาหารคาวหวาน
            อาทิ มะยมดอง ฝรั่งชุบบ๊วย ปลาหมึกย่าง คนสงขลาจะเรียกรถเข็นเหล่านี้ว่า "รถกุ๊งกิ๊ง" <br /><br />

            และถ้าย้อนไปที่ "สหภาพยนตร์" โรงหนังดังเมืองสงขลา จะมีอาแปะถือถาดหนึ่งใบภายในถาด
            ประกอบไปด้วย บุหรี่ ของขบเคี้ยว หมากฝรั่ง ฯลฯ เดินเร่ขายภายในโรงภาพยนตร์ก่อนหนังฉาย</p>
        </div>
      </div>

      <div className='xs:hidden sm:block mt-40'>
        <div className='flex items-center'>
          <div className='w-1/2'><img id='txt-05' className='w-8/12' src={PMRedCar} alt="redcar" /></div>
          <div className='w-1/2 -ml-20'>
            <p id='txt-01' className='text-xl text-promote mb-8'>รถแห่หนังในสมัยก่อน</p>
            <p id='txt-01' className='text-base text-promote'>หลายคนคงจะเคยเห็นรถกระบะที่ติดป้ายไม้คัทเอาท์ภาพวาดโปสเตอร์ของหนังเรื่องต่างๆ รถแห่จะขับเวียนไปทั่วเมือง <br />
              พร้อมเสียงประกาศโดยโฆษกผ่านลำโพง ระบุชื่อหนัง วันฉาย โรงภาพยนตร์ และนักแสดง <br /><br />

              รถแห่เป็นอีกหนึ่งวิธีการประชาสัมพันธ์โฆษณาหนัง ซึ่งจะมีการโปรยใบปลิวหนังขนาดเท่ากระดาษ A4 อีกด้วย <br />
              มีภาพของพระเอกนางเอกสวย ๆ สมัยนี้กลายเป็นของสะสมล้ำค่า มีมูลค่าหลายพันบาทเลยทีเดียว</p>
          </div>
        </div>
      </div>
      <div className='sm:hidden xs:block mt-40'>
        <div><img id='txt-05' className='w-11/12' src={PMRedCar} alt="redcar" /></div>
        <div className='mt-32'>
          <p id='txt-01' className='text-xl text-promote text-center mb-8'>รถแห่หนังในสมัยก่อน</p>
          <p id='txt-01' className='text-sm text-promote mx-8'>หลายคนคงจะเคยเห็นรถกระบะที่ติดป้ายไม้คัทเอาท์ภาพวาดโปสเตอร์ของหนังเรื่องต่างๆ รถแห่จะขับเวียนไปทั่วเมือง
              พร้อมเสียงประกาศโดยโฆษกผ่านลำโพง ระบุชื่อหนัง วันฉาย โรงภาพยนตร์ และนักแสดง <br /><br />
              
              รถแห่เป็นอีกหนึ่งวิธีการประชาสัมพันธ์โฆษณาหนัง ซึ่งจะมีการโปรยใบปลิวหนังขนาดเท่ากระดาษ A4 อีกด้วย
              มีภาพของพระเอกนางเอกสวย ๆ สมัยนี้กลายเป็นของสะสมล้ำค่า มีมูลค่าหลายพันบาทเลยทีเดียว</p>
        </div>
      </div>

      <div className='xs:hidden sm:block mt-40'>
        <div className='flex justify-center items-center'>
          <div className='mr-56'>
            <p id='txt-01' className='text-xl text-promote mb-8'>เกร็ดความรู้</p>
            <p id='txt-01' className='text-base text-promote'>ปัจจุบันแทบทุกคนที่เข้าไปดูหนังภายในโรงภาพยนตร์เราจะต้องยืนทำความเคารพ <br />
              เพลงสรรเสริญพระบารมีก่อนหนังเริ่ม <br /><br />

              ซึ่งในอดีตเพลงสรรเสริญเคยเปิดหลังหนังฉายจบเหมือนการปิดสถานีโทรทัศน์ในยุคหนึ่ง <br />
              แต่ด้วยเหตุที่พอหนังจบคนต่างแย่งกันออกจากโรง ทำให้ไม่ค่อยสนใจเพลงสรรเสริญเท่าไหร่ <br />
              จึงมีการเปลี่ยนให้เพลงสรรเสริญพระบารมีมาฉายก่อนหนังฉายแทน</p>
          </div>
          <div><img id='txt-02' src={PMWatch} alt="watch" /></div>
        </div>
      </div>
      <div className='sm:hidden xs:block mt-40'>
        <div className='flex justify-center'><img id='txt-02' className='w-11/12' src={PMWatch} alt="watch" /></div>
        <div className='mt-32'>
          <p id='txt-01' className='text-xl text-promote text-center mb-8'>เกร็ดความรู้</p>
          <p id='txt-01' className='text-sm text-promote mx-8'>ปัจจุบันแทบทุกคนที่เข้าไปดูหนังภายในโรงภาพยนตร์เราจะต้องยืนทำความเคารพ
            เพลงสรรเสริญพระบารมีก่อนหนังเริ่ม <br /><br />

            ซึ่งในอดีตเพลงสรรเสริญเคยเปิดหลังหนังฉายจบเหมือนการปิดสถานีโทรทัศน์ในยุคหนึ่ง
            แต่ด้วยเหตุที่พอหนังจบคนต่างแย่งกันออกจากโรง ทำให้ไม่ค่อยสนใจเพลงสรรเสริญเท่าไหร่
            จึงมีการเปลี่ยนให้เพลงสรรเสริญพระบารมีมาฉายก่อนหนังฉายแทน</p>
        </div>
      </div>

      <div className='xs:hidden sm:block mt-80'>
        <div id='txt-01' className='flex justify-center mb-24'><img className='w-3/12' src={PMText2} alt="pmtxt2" /></div>
        <div id='txt-02' className='flex justify-center'><img src={PMWallet} alt="wallet" /></div>
      </div>
      <div className='sm:hidden xs:block mt-60'>
        <div id='txt-01' className='flex justify-center mb-20'><img className='w-8/12' src={PMText2} alt="pmtxt2" /></div>
        <div id='txt-02' className='flex justify-center'><img className='w-10/12' src={PMWallet} alt="wallet" /></div>
      </div>
    </div>
  )
}

export default Promote