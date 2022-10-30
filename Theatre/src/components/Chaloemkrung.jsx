import React from 'react'
import "../lido.css";
import Film from '../img/Lido/flim-lido.png';
const Chaloemkrung = () => {
  return (
    <div className='bg-[#F3EEE1] pt-40 bg-[url("/img/Chaloemkrung/texture_bg_dot_clk.png")] text-xl'>
      <img className='max-w-md w-4/5 lg:w-full lg:h-1/2 mx-auto' src="/img/Chaloemkrung/logoclk.png" alt="" />
      <p className='max-w-lg w-4/5 mx-auto text-center'>ความเป็นมาของศาลาเฉลิมกรุงเริ่มขึ้นตั้งแต่ก่อนการเปลี่ยนแปลงการปกครอง เมื่อพระบาทสมเด็จพระปกเกล้าเจ้าอยู่หัว รัชกาลที่ 7 ทรงมีพระราชดำริให้จัดสร้างถาวรวัตุถุขนาดใหญ่ที่จะสามารถอำนวยประโยชน์ให้กับสาธารณชนได้เพื่อเป็นระลึกแห่งการเฉลิมฉลองที่
        กรุงเทพมหานครจะมีอายุครบ 150 ปี ในพ.ศ. 2475</p>
      <div className='flex my-32'>
        <div className='w-2/5 flex justify-center items-center'>
          <img className='w-1/2 ' src="/img/Chaloemkrung/jao.png" alt="" />
        </div>
        <div className='flex justify-between w-3/5 pr-6 items-center'>
          <p>ศาลาเฉลิมกรุงเป็นผลงานออกแบบสถาปัตยกรรมชิ้นแรก
            ของหม่อมเจ้าสมัยเฉลิม กฤดากร ตั้งแต่เมื่อสมัยกลับจากการศึกษาต่างประเทศมารับราชการ โดยลักษณะอาคารมีการผสมผสานของสถาปัตยกรรม
            ตะวันตกได้อย่างลงตัว </p>
          {/* <p>ศาลาเฉลิมกรุงเปิดฉายครั้งแรกเมื่อ
            วันที่ 2 กรกฎาคม พ.ศ.2476</p> */}
        </div>
      </div>
      <img src="/img/Chaloemkrung/building1.png" alt="" />
      <img src="/img/Chaloemkrung/building2.png" alt="" />
      <div className='flex justify-end mx-12 my-32'>
        <p className='max-w-lg'>สถาปัตยกรรม
          ในแง่ของสถาปัตยกรรมอาคารศาลาเฉลิมกรุงเป็น
          รูปแบบสากลสมัย International or Modern Style ตัวอาคารมีลักษณะเป็นรูปทรงสี่เหลี่ยมสูง
          ตระหง่าน มั่นคง ผึ่งผาย ตามสไตล์ตะวันตกในส่วน
          โครงสร้างได้นำเทคโนโลยีใหม่ของยุคนั้นมาใช้โครง
          สร้างภายในเป็นตัวรับน้ำหนักแทนการใช้ผนังและเสา ช่วยพยุงน้ำหนักแบบสถาปัตยกรรมไทย
          ด้านหน้าชั้นล่างโรงละครเป็นโถงรับรองและบนชั้นลอยมีห้องรับรองเรียกว่า “ห้องเมขลา”สามารถใช้เป็นที่รับ เสด็จและรับรองแขกพิเศษรวมทั้งจัดการแถลงข่าวได้
        </p>
      </div>
      <div className='bg-[#3A352A] w-full h-screen flex flex-col relative'>
        <img className='absolute object-cover h-screen mix-blend-difference' src="/img/Chaloemkrung/sket1.png" alt="" />
        <div className='relative flex justify-center items-center w-full h-3/5'>
          <img className='absolute max-w-sm w-1/2' src="/img/Chaloemkrung/rectangle-white.png" alt="" />
          <img className='absolute w-2/5' src="/img/Chaloemkrung/speaker1.png" alt="" />
          <img className='absolute' src="/img/Chaloemkrung/polaroi.png" alt="" />
          <img className='absolute translate-x-20 -translate-y-6 w-1/5' src="/img/Chaloemkrung/triangle.png" alt="" />
        </div>
        <div className='text-center items-center text-white px-10 z-10'>
          <p>เพราะความน่าเชื่อถือของตัวอาคารนี้เองจึงมีเรื่องเล่ากันว่าศาลาเฉลิมกรุงนอกจากจะเป็นโรงหนังที่ได้รับความนิยมแล้วในช่วงเวลาของสงครามโลกครั้งที่ 2 เฉลิมกรุงในวันเก่ายังเป็นที่หลบภัยทางอากาศที่ได้รับความนิยมอีกด้วยทุกครั้งเมื่อสัญญาณ หวอเตือนภัยทางอากาศดังขึ้นก็จะมีผู้คนมาหลบภัยที่ศาลาเฉลิมกรุงกันเนืองแน่นเพราะ เชื่อถือในความมั่นคงแข็งแรงของสถานที่แห่งนี้</p>
        </div>
        <img className='absolute bottom-0 right-0 w-2/5 max-w-sm translate-y-8 md:translate-y-16 z-10' src="/img/Chaloemkrung/tape.png" alt="" />
      </div>
      <div className='relative flex items-center justify-center h-[60vh] '>
        <img className='object-cover h-full' src="/img/Chaloemkrung/inside.png" alt="" />
        <img className='absolute z-10 w-14 -translate-x-20 translate-y-24' src="/img/Chaloemkrung/nangram1.png" alt="" />
        <img className='absolute z-10 w-14 translate-x-20 translate-y-24' src="/img/Chaloemkrung/nangram2.png" alt="" />
        <img className='absolute z-10 w-14 translate-y-24' src="/img/Chaloemkrung/nangramcenter.png" alt="" />
        <img className='absolute z-10 w-24 translate-y-4 left-0 -translate-x-10' src="/img/Chaloemkrung/red_left.png" alt="" />
        <img className='absolute z-10 w-24 translate-y-3 right-0 translate-x-14' src="/img/Chaloemkrung/red_right.png" alt="" />
      </div>
    </div>
  )
}

export default Chaloemkrung;
