import React from 'react';
import './Scala.css';
import ScalaLogo from '../img/Scala/Scala Logo.png'
import ScalaAura from '../img/Scala/Scala Aura.png'
import ScalaContent from '../img/Scala/Scala Content.png'
import ScalaCar from '../img/Scala/Scala Car.png'
import ScalaBG from '../img/Scala/Scala BG.png'
import ScalaJira from '../img/Scala/Scala Jira.png'
import ScalaInside from '../img/Scala/Scala Inside.png'
import ScalaPopcornCeiling from '../img/Scala/Scala Popcorn Ceiling.png'
import ScalaMenWPack from '../img/Scala/Scala Men with Pack.png'
import ScalaEx from '../img/Scala/Scala Ex.png'

const Scala = () => {
  return (
    <div className='body'> 
      <div className='flex justify-center xs:mx-16 sm:mx-8'>
        <img src={ScalaLogo} alt="logo" />
      </div>
      <div className='flex justify-center text-center xs:mx-20 mt-32 mb-44 sm:my-20'>
        <p className='text-white xs:text-base sm:text-xl'>ตำนาน “โรงภาพยนตร์สกาลา” ราชาโรงหนังแห่งสยามที่เป็นมากกว่าสถานที่ฉายหนัง <br />
          แต่ยังดึงดูดกคนที่รักในการเสพความงามของสถาปัตยกรรม</p>
      </div>
      <div className='xs:block md:hidden'><p className='text-white text-sm text-center mb-20'>• สกาลาเปิดฉายครั้งแรกเมื่อ <br />
          วันที่ 31 ธันวาคม 2512</p></div>
      <div className='relative xs:mt-4 sm:mt-64'>
        <div className='xs:hidden lg:block'><p className='text-white text-xl absolute left-1/2 top-28'>• สกาลาเปิดฉายครั้งแรกเมื่อ วันที่ 31 ธันวาคม 2512</p></div>
        <div><img className='sm:scale-100 absolute xs:scale-150' src={ScalaAura} alt="aura" /></div>
        <div><img className='sm:scale-100 absolute xs:scale-150' src={ScalaContent} alt="content" /></div>
        <div><img className='sm:scale-100 absolute xs:scale-150' src={ScalaCar} alt="car" /></div>
        <div><img className='sm:scale-100 xs:scale-150' src={ScalaBG} alt="bg" /></div>
      </div>

      <div className='sm:grid sm:grid-cols-2 sm:grid-rows-3 gap-2 mt-40 xs:grid xs:grid-cols-1 xs:grid-rows-4'>
        
        <div className='sm:box row-start-1 xs:box'>
          <div className='flex'>
            <div className='sm:block xs:hidden'>
              <img className='sm:ml-60 mb-4' src={ScalaJira} alt="jira" />
              <p className='text-white sm:text-xl ml-64'>พันเอกจิระ ศิลป์กนก</p>
            </div>
            <div className='lg:block xs:hidden'>
              <p className='text-white text-base ml-20 mt-12'>โรงหนังสกาลาถูกออกแบบโดยพันเอกจิระ ศิลป์กนก <br />
                สถาปนิกที่มีชื่อเสียงโดดเด่นในช่วงหลังสงครามโลกครั้งที่ 2 <br />
                ด้วยการใช้สถาปัตย์การออกแบบในศิลปะ Art Deco <br />
                และได้ตั้งชื่อโรงภาพยนตร์ตั้งชื่อตามโรงอุปรากร Teatro alla Scala <br />
                แห่งเมืองมิลาน ประเทศอิตาลี โดยคำว่า Scala ที่มีความหมายว่า <br />
                บันไดในภาษาอิตาลี
              </p>
            </div>
          </div>
          <div>
            <div className='xs:block sm:hidden'>
              <img className='mx-auto mt-12' src={ScalaJira} alt="jira" />
              <p className='text-white text-center text-xl mt-4'>พันเอกจิระ ศิลป์กนก</p>
              <p className='text-white text-center text-sm mt-16 mx-8'>โรงหนังสกาลาถูกออกแบบโดยพันเอกจิระ ศิลป์กนก <br />
                สถาปนิกที่มีชื่อเสียงโดดเด่นในช่วงหลังสงครามโลก <br />
                ครั้งที่ 2 ด้วยการใช้สถาปัตย์การออกแบบในศิลปะ <br />
                Art Deco และได้ตั้งชื่อโรงภาพยนตร์ตั้งชื่อตาม <br /> 
                โรงอุปรากร Teatro alla Scala แห่งเมืองมิลาน <br />
                ประเทศอิตาลี โดยคำว่า Scala ที่มีความหมายว่า <br />
                บันไดในภาษาอิตาลี
              </p>
            </div>
          </div>
        </div>

        <div className='sm:box row-start-2 xs:box'>
          <div className='flex'>
            <div className='sm:block xs:hidden'>
              <img className='ml-60' src={ScalaInside} alt="inside" />
            </div>
            <div className='lg:block xs:hidden'>
              <p className='text-white text-xl ml-52 mt-20'>• โคมไฟแก้วที่หรูหราทำให้อยากเดินเข้าไปค้นหาความงามในชั้นถัดไป</p>
            </div>
          </div>
          <div>
            <div className='xs:block mt-24 sm:hidden'>
              <img className='mx-auto w-4/6' src={ScalaInside} alt="inside" />
              <p className='text-white text-xl text-center mx-8 mt-12'>• โคมไฟแก้วที่หรูหราทำให้อยากเดินเข้าไปค้นหาความงามในชั้นถัดไป</p>
            </div>
          </div>
        </div>

        <div className='sm:box row-start-3 xs:box'>
          <div className='lg:block xs:hidden'>
            <p className='text-white text-xl ml-60 mt-36'>สถาปัตยกรรม</p>
            <p className='text-white text-base ml-60 mt-8'>โรงภาพยนตร์สกาลาเป็นงานศิลป์ขนาดใหญ่ผสมผสานตะวันออกและตะวันตกได้อย่างลงตัว <br />
              การตกแต่งมีทั้งไม้แกะสลักและภาพสำริดนูนต่ำ มีโถงบันไดขนาดใหญ่อันเป็นที่มาของชื่อ “สกาลา” <br />
              และโคมไฟแชนเดอเลียก็สั่งพิเศษมาจากอิตาลีเช่นกัน ตัวบันไดเป็นทางขึ้นสองทางเรียก Double Staircase <br />
              ทำจากคอนกรีต ปิดผิวขั้นบันไดด้วยหินอ่อน ตกแต่งราวจับด้วยอลูมิเนียมและไม้ <br />
              ด้วยวัสดุและการออกแบบที่ปราณีตนี้จึงทำให้โถงบันไดของสกาลาโ่ด่งดังในเรื่องของความโอ่อ่าหรูหรา</p>
          </div>
          <div className='xs:block mt-16 sm:hidden'>
            <div className='flex justify-center items-center'>
              <img className='scale-125' src={ScalaPopcornCeiling} alt="inside" />
            </div>
          </div>
        </div>

        <div className='sm:box row-span-3 xs:box'>
          <div className='sm:block xs:hidden'>
            <div className='flex justify-center items-center'>
              <img className='scale-100' src={ScalaPopcornCeiling} alt="inside" />
            </div>
          </div>
          <div className='xs:block sm:hidden mt-32'>
            <p className='text-white text-xl text-center'>สถาปัตยกรรม</p>
            <p className='text-white text-sm text-center mx-8 mt-8'>โรงภาพยนตร์สกาลาเป็นงานศิลป์ขนาดใหญ่ผสมผสาน <br />
              ตะวันออกและตะวันตกได้อย่างลงตัว การตกแต่งมีทั้ง <br />
              ไม้แกะสลักและภาพสำริดนูนต่ำ มีโถงบันไดขนาดใหญ่ <br />
              อันเป็นที่มาของชื่อ “สกาลา” และโคมไฟแชนเดอเลีย <br />
              ก็สั่งพิเศษมาจากอิตาลีเช่นกัน ตัวบันไดเป็นทางขึ้น <br />
              สองทางเรียก Double Staircase ทำจากคอนกรีต <br />
              ปิดผิวขั้นบันไดด้วยหินอ่อน ตกแต่งราวจับด้วยอลูมิเนียม <br />
              และไม้ ด้วยวัสดุและการออกแบบที่ปราณีตนี้ <br />
              จึงทำให้โถงบันไดของสกาลาโ่ด่งดังในเรื่องของ <br />
              ความโอ่อ่าหรูหรา</p>
          </div>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-2 sm:grid-rows-1 gap-2 xs:grid xs:grid-cols-1 xs:grid-rows-2'>

        <div className='sm:box xs:box'>
          <div className='sm:block xs:hidden'>
            <img className='mx-auto' src={ScalaMenWPack} alt="menwithpack" />
          </div>
          <div className='xs:block sm:hidden'>
            <img className='mx-auto w-5/6' src={ScalaMenWPack} alt="menwithpack" />
          </div>
        </div>

        <div className='sm:box xs:box'>
          <div className='lg:block mt-32 xs:hidden'>
            <p className='text-white text-xl'>จุดเปลี่ยน</p>
            <p className='text-white text-base mt-8'>จนกระทั่งเมื่อวันที่ 5 กรกฎาคม พ.ศ. 2563 ทางโรงหนังได้ประกาศปิดตัว <br />
              เนื่องจากสาเหตุการแพร่ระบาดของเชื้อไวรัสโควิด-19 ในประเทศส่งผลทำให้ยอดผู้เข้าชมลดลง <br />
              ผนวกกับการแบกรับ ภาระต้นทุนการเช่าพื้นที่ไม่ไหว แม้สัญญาดังกล่าวจะสิ้นสุดในปี พ.ศ. 2564 </p>
          </div>
          <div className='xs:block mt-8 sm:hidden'>
            <p className='text-white text-xl text-center'>จุดเปลี่ยน</p>
            <p className='text-white text-sm text-center mx-8 mt-8'>จนกระทั่งเมื่อวันที่ 5 กรกฎาคม พ.ศ. 2563 <br />
              ทางโรงหนังได้ประกาศปิดตัว เนื่องจากสาเหตุ <br />
              การแพร่ระบาดของเชื้อไวรัสโควิด-19 ในประเทศ <br />
              ส่งผลทำให้ยอดผู้เข้าชมลดลง ผนวกกับการแบกรับภาระ <br />
              ต้นทุนการเช่าพื้นที่ไม่ไหว แม้สัญญาดังกล่าวจะสิ้นสุด <br />
              ในปี พ.ศ. 2564 </p>
          </div>
        </div>
      </div>

      <div className='mt-64'>
        <div className='lg:block xs:hidden'>
          <p className='mx-auto text-center text-white text-lg'>สกาลาจึงปิดตำนานโรงหนังสุดคลาสสิคของชาวสยามสแควร์ไปอย่างเป็นทางการ <br />
            เมื่อวันที่ 1 พฤศจิกายน พ.ศ. 2563</p>
        </div>
        <div className='sm:block xs:hidden relative'>
          <img className='w-full mx-auto' src={ScalaEx} alt="ex" />
        </div>
      </div>

      <div className='-mt-28'>
        <div className='xs:block sm:hidden'>
          <p className='mx-12 mb-16 text-center text-white text-base'>สกาลาจึงปิดตำนานโรงหนังสุดคลาสสิค <br /> 
            ของชาวสยามสแควร์ไปอย่างเป็นทางการ <br />
            เมื่อวันที่ 1 พฤศจิกายน พ.ศ. 2563</p>
        </div>
        <div className='xs:block sm:hidden relative'>
          <img className='w-full mx-auto' src={ScalaEx} alt="ex" />
        </div>
      </div>
    </div>
  )
}

export default Scala