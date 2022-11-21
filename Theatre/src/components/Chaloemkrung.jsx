import React, { useEffect } from 'react'
import TearPaper from '../img/Scala/Tear Paper.svg'
import "./Chaloemkrung.css"
const Chaloemkrung = () => {
  useEffect(() => {
    const cha_xx=document.querySelectorAll(".cha-xx")
    window.addEventListener("scroll", e => {
      for (let cha_01 of cha_xx) {
        let windowHeight = window.innerHeight
        let elementTop = cha_01.getBoundingClientRect().top
        let elementVisible = 10
        if (elementTop < windowHeight - elementVisible) {
          cha_01.classList.add("active");
        } else {
          cha_01.classList.remove("active");
        }
      }
    })
  }, [])
  return (
    <div className='bg-[#F3EEE1] pt-10 bg-[url("/img/Chaloemkrung/texture_bg_dot_clk.png")] text-xl transform-gpu'>
      <img className='sm:-mt-[18%] scale-[1] xs:-mt-[26%]' src={TearPaper} alt="tp" />
      <img id="chaloemkrung" className='max-w-6xl w-4/5 lg:w-full mx-auto cha-xx title' src="/img/Chaloemkrung/logoclk.png" alt="" />
      <p className='max-w-5xl w-4/5 mx-auto lg:text-center cha-xx text'>ความเป็นมาของศาลาเฉลิมกรุงเริ่มขึ้นตั้งแต่ก่อนการเปลี่ยนแปลงการปกครอง เมื่อพระบาทสมเด็จพระปกเกล้าเจ้าอยู่หัว รัชกาลที่ 7 ทรงมีพระราชดำริให้จัดสร้างถาวรวัตุถุขนาดใหญ่ที่จะสามารถอำนวยประโยชน์ <br />ให้กับสาธารณชนได้เพื่อเป็นระลึกแห่งการเฉลิมฉลองที่
        กรุงเทพมหานครจะมีอายุครบ 150 ปีในพ.ศ. 2475</p>

      {/* เจ้าที่เป็นคนสร้าง */}
      <div className='flex justify-center items-center lg:hidden my-32 flex-col gap-10'>
        <div className='w-3/5 md:w-2/5 flex justify-center items-center'>
          <img src="/img/Chaloemkrung/jao.png" alt="" />
        </div>
        <div className='flex justify-between md:w-3/5 pr-2 md:pr-6 items-center'>
          <p className='cha-xx text lg:block hidden'>ศาลาเฉลิมกรุงเป็นผลงานออกแบบสถาปัตยกรรมชิ้นแรก
            ของหม่อมเจ้าสมัยเฉลิม กฤดากร ตั้งแต่เมื่อสมัยกลับจากการศึกษาต่างประเทศมารับราชการ โดยลักษณะอาคารมีการผสมผสานของสถาปัตยกรรม
            ตะวันตกได้อย่างลงตัว </p>
            <p className='lg:hidden text-center cha-xx text mb-64'>ศาลาเฉลิมกรุงเป็นผลงานออกแบบ
            สถาปัตยกรรมชิ้นแรกของ<br />
หม่อมเจ้าสมัยเฉลิม กฤดากร </p>
          {/* <p>ศาลาเฉลิมกรุงเปิดฉายครั้งแรกเมื่อ
            วันที่ 2 กรกฎาคม พ.ศ.2476</p> */}
        </div>
      </div>

      <p className='cha-xx text text-center mb-60 lg:hidden'>ศาลาเฉลิมกรุงเปิดฉายครั้งแรกเมื่อ <br />
        วันที่ 2 กรกฎาคม พ.ศ.2476</p>
      <div className="relative flex justify-center items-center h-[80vh] md:h-full lg:mt-32 lg:pt-32 mb-32">
        <div className='hidden lg:flex flex-col items-start absolute top-0 gap-6' style={{ left: "5%" }}>
          <div>
            <img src="/img/Chaloemkrung/jao.png" alt="" />
          </div>
          <div style={{ maxWidth: "450px" }}>
            <p className='cha-xx text'>ศาลาเฉลิมกรุงเป็นผลงานออกแบบสถาปัตยกรรมชิ้นแรกของหม่อมเจ้าสมัยเฉลิม กฤดากร</p>
          </div>
        </div>
        <img className='object-cover h-full' src="/img/Chaloemkrung/nbd_1n.png" alt="" />
        <div className='absolute p-6 w-4/5 max-w-sm translate-y-24 lg:bg-transparent lg:right-20 lg:translate-y-0 lg:top-72 hidden lg:block'>
          <p className='cha-xx text'>• ศาลาเฉลิมกรุงเปิดฉายครั้งแรกเมื่อวันที่ 2 กรกฎาคม พ.ศ.2476</p>
        </div>
      </div>
      <div className="relative z-10 -translate-y-72 hidden lg:block">
        <img className='absolute right-0 w-2/6' src="/img/Chaloemkrung/grass.png" alt="" />
        <img className='absolute left-0 w-2/6' src="/img/Chaloemkrung/grass2.png" alt="" />
      </div>
      {/* ตึกเฉลิมกรุงและภายใน */}
      <div className="flex flex-col items-center">
        <div className='relative flex justify-center h-[90vh] items-center lg:h-full'>
          <img className='object-cover h-full -translate-x-0' src="/img/Chaloemkrung/bd2.png" alt="" />
          <div className='lg:flex justify-end flex-col gap-8 absolute right-10 -translate-y-24 hidden max-w-sm'>
            <p className='text-4xl cha-xx text'>สถาปัตยกรรม</p>
            <p className='max-w-lg cha-xx text'>
              ในแง่ของสถาปัตยกรรมอาคารศาลาเฉลิมกรุงเป็น
              รูปแบบสากลสมัย International or Modern Style ตัวอาคารมีลักษณะเป็นรูปทรงสี่เหลี่ยมสูง
              ตระหง่าน มั่นคง ผึ่งผาย ตามสไตล์ตะวันตกในส่วน
              โครงสร้างได้นำเทคโนโลยีใหม่ของยุคนั้นมาใช้โครง
              สร้างภายในเป็นตัวรับน้ำหนักแทนการใช้ผนังและเสา ช่วยพยุงน้ำหนักแบบสถาปัตยกรรมไทย
              ด้านหน้าชั้นล่างโรงละครเป็นโถงรับรองและบนชั้นลอยมีห้องรับรองเรียกว่า “ห้องเมขลา”สามารถใช้เป็นที่รับ เสด็จและรับรองแขกพิเศษรวมทั้งจัดการแถลงข่าวได้
            </p>
          </div>
        </div>
        <div className="flex flex-col p-8 lg:hidden gap-8">
        <br />
          <p className='text-4xl cha-xx text'>สถาปัตยกรรม</p>
          <p className='max-w-lg cha-xx text'>
            ในแง่ของสถาปัตยกรรมอาคารศาลา<br />เฉลิมกรุงเป็น
            รูปแบบสากลสมัย<br /> International or Modern Style <br />ตัวอาคารมีลักษณะเป็นรูปทรงสี่เหลี่ยมสูง
            ตระหง่าน มั่นคง ผึ่งผาย ตามสไตล์<br />ตะวันตกในส่วน
            โครงสร้างได้นำเทคโน<br />-โลยีใหม่ของยุคนั้นมาใช้โครง
            สร้าง<br />ภายในเป็นตัวรับน้ำหนักแทนการใช้ผนังและเสา ช่วยพยุงน้ำหนักแบบสถาปัตยกรรมไทย <br /><br />
            ด้านหน้าชั้นล่างโรงละครเป็นโถงรับรองและบนชั้นลอยมีห้องรับรองเรียกว่า “ห้องเมขลา”สามารถใช้เป็นที่รับ เสด็จและรับรองแขกพิเศษรวมทั้งจัดการแถลงข่าวได้<br /><br /><br /><br />
          </p>
        </div>
      </div>

      {/* ลำโพงประกาศ */}
      <div className='bg-[#3A352A] w-full h-screen flex justify-center items-center relative md:h-full'>
        <img className='object-cover mix-blend-difference h-full w-full sket1' src="/img/Chaloemkrung/rotate90.png" alt="" />
        <div className="absolute flex flex-col md:flex-row w-4/5 md:mx-auto z-10">
          <div className='flex justify-center items-center w-full'>
            <img src="/img/Chaloemkrung/anounce.png" alt="" id='cha-announce' />
          </div>
          <div className='text-white md:max-w-3xl flex items-center md:w-4/5 justify-start'>
            <p className='cha-xx text'>เพราะความน่าเชื่อถือของตัวอาคารนี้เองจึงมีเรื่องเล่ากันว่าศาลาเฉลิมกรุงนอกจากจะเป็นโรงหนังที่ได้รับความนิยมแล้วในช่วงเวลาของสงครามโลกครั้งที่ 2 เฉลิมกรุงในวันเก่ายังเป็นที่หลบภัยทางอากาศที่ได้รับความนิยมอีกด้วยทุกครั้งเมื่อสัญญาณ หวอเตือนภัยทางอากาศดังขึ้นก็จะมีผู้คนมาหลบภัยที่ศาลาเฉลิมกรุงกันเนืองแน่นเพราะ เชื่อถือในความมั่นคงแข็งแรงของสถานที่แห่งนี้</p>
          </div>
        </div>
        <img className='absolute bottom-0 right-0 w-2/5 max-w-sm translate-y-8 md:translate-y-16 z-10' src="/img/Chaloemkrung/tape.png" alt="" />
      </div>

      {/* เวทีที่มีนางรำ */}
      <div className='relative flex items-center justify-center h-[55vh] md:h-full'>
        <img className='object-cover h-full' src="/img/Chaloemkrung/major2.png" alt="" />
        <div className='absolute z-10 flex lg:gap-20 nangrum-wraper md:gap-14'>
          <img className='w-14 lg:w-24 nangrum1' src="/img/Chaloemkrung/nangram1.png" alt="" />
          <img className='w-14 lg:w-24 nangrum2' src="/img/Chaloemkrung/nangramcenter.png" alt="" />
          <img className='w-14 lg:w-24 nangrum3' src="/img/Chaloemkrung/nangram2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chaloemkrung;
