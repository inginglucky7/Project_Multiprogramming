import React from 'react'
const Chaloemkrung = () => {
  return (
    <div className='bg-[#F3EEE1] pt-10 bg-[url("/img/Chaloemkrung/texture_bg_dot_clk.png")] text-xl transform-gpu'>
      <img className='max-w-6xl w-4/5 lg:w-full mx-auto' src="/img/Chaloemkrung/logoclk.png" alt="" />
      <p className='max-w-5xl w-4/5 mx-auto text-center'>ความเป็นมาของศาลาเฉลิมกรุงเริ่มขึ้นตั้งแต่ก่อนการเปลี่ยนแปลงการปกครอง เมื่อพระบาทสมเด็จพระปกเกล้าเจ้าอยู่หัว รัชกาลที่ 7 ทรงมีพระราชดำริให้จัดสร้างถาวรวัตุถุขนาดใหญ่ที่จะสามารถอำนวยประโยชน์ให้กับสาธารณชนได้เพื่อเป็นระลึกแห่งการเฉลิมฉลองที่
        กรุงเทพมหานครจะมีอายุครบ 150 ปี ในพ.ศ. 2475</p>

      {/* เจ้าที่เป็นคนสร้าง */}
      <div className='flex justify-center items-center flex-col'>
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
        <div className="relative flex justify-center items-center h-[80vh] md:h-full">
          <img className='object-cover h-full' src="/img/Chaloemkrung/building1.png" alt="" />
          <div className='absolute bg-[#D9D9D9] p-6 w-4/5 max-w-sm translate-y-24'>
            <p>ศาลาเฉลิมกรุงเปิดฉายครั้งแรกเมื่อวันที่ 2 กรกฎาคม พ.ศ.2476</p>
          </div>
        </div>
      </div>

      {/* ตึกเฉลิมกรุงและภายใน */}
      <div className='relative flex justify-center h-[90vh] items-center md:h-full'>
        <img className='object-cover h-full translate-x-0' src="/img/Chaloemkrung/building2.png" alt="" />
        <div className='flex justify-end flex-col gap-8 absolute right-0'>
          <p className='text-4xl'>สถาปัตยกรรม</p>
          <p className='max-w-lg'>
            ในแง่ของสถาปัตยกรรมอาคารศาลาเฉลิมกรุงเป็น
            รูปแบบสากลสมัย International or Modern Style ตัวอาคารมีลักษณะเป็นรูปทรงสี่เหลี่ยมสูง
            ตระหง่าน มั่นคง ผึ่งผาย ตามสไตล์ตะวันตกในส่วน
            โครงสร้างได้นำเทคโนโลยีใหม่ของยุคนั้นมาใช้โครง
            สร้างภายในเป็นตัวรับน้ำหนักแทนการใช้ผนังและเสา ช่วยพยุงน้ำหนักแบบสถาปัตยกรรมไทย
            ด้านหน้าชั้นล่างโรงละครเป็นโถงรับรองและบนชั้นลอยมีห้องรับรองเรียกว่า “ห้องเมขลา”สามารถใช้เป็นที่รับ เสด็จและรับรองแขกพิเศษรวมทั้งจัดการแถลงข่าวได้
          </p>
        </div>
      </div>

      {/* ลำโพงประกาศ */}
      <div className='bg-[#3A352A] w-full h-screen flex justify-center items-center relative md:h-full'>
        <img className='object-cover mix-blend-difference h-full w-full' src="/img/Chaloemkrung/rotate90.png" alt="" />
        <div className="absolute flex flex-col md:flex-row w-4/5 md:mx-auto z-10">
          <div className='flex justify-center items-center w-full'>
            <img src="/img/Chaloemkrung/anounce.png" alt="" />
          </div>
          <div className='text-white md:max-w-3xl flex items-center md:w-4/5 justify-start'>
            <p>เพราะความน่าเชื่อถือของตัวอาคารนี้เองจึงมีเรื่องเล่ากันว่าศาลาเฉลิมกรุงนอกจากจะเป็นโรงหนังที่ได้รับความนิยมแล้วในช่วงเวลาของสงครามโลกครั้งที่ 2 เฉลิมกรุงในวันเก่ายังเป็นที่หลบภัยทางอากาศที่ได้รับความนิยมอีกด้วยทุกครั้งเมื่อสัญญาณ หวอเตือนภัยทางอากาศดังขึ้นก็จะมีผู้คนมาหลบภัยที่ศาลาเฉลิมกรุงกันเนืองแน่นเพราะ เชื่อถือในความมั่นคงแข็งแรงของสถานที่แห่งนี้</p>
          </div>
        </div>
        <img className='absolute bottom-0 right-0 w-2/5 max-w-sm translate-y-8 md:translate-y-16 z-10' src="/img/Chaloemkrung/tape.png" alt="" />
      </div>

      {/* เวทีที่มีนางรำ */}
      <div className='relative flex items-center justify-center h-[55vh] md:h-full'>
        <img className='object-cover h-full' src="/img/Chaloemkrung/major2.png" alt="" />
        <div className='absolute w-14 z-10 md:w-20 flex md:gap-20'>
          <img className='' src="/img/Chaloemkrung/nangram1.png" alt="" />
          <img className='' src="/img/Chaloemkrung/nangramcenter.png" alt="" />
          <img className='' src="/img/Chaloemkrung/nangram2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chaloemkrung;
