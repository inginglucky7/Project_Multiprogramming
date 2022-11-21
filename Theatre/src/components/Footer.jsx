import React from 'react'
import EndPicture from '../img/End/all_pic_end.png'
import RedCurtain from '../img/End/ผ้าม่านแดง.png'
import RedCurtainDeskRight from '../img/End/ผ้าม่านขวา.png'
import RedCurtainDeskLeft from '../img/End/ผ้าม่านซ้าย.png'
import SmallRedCurtain from '../img/End/ม่านลาโรง1.png'
import Larong from '../img/End/ลาโรง.png'
import LarongDesk from '../img/End/ลาโรงDesk.png'
import Logo from '../img/End/logo_group.png'
import LogoDesk from '../img/End/logo_group_desktop.png'

const Footer = () => {
  return (
      <section className="flex flex-col bg-[#3a352a] xs:pt-[80vw] sm:pt-[25vw]">
          <div id="footer">
              <div id="ending" className="max-w-[100%] max-h-[100%] h-auto w-[100vw] mx-auto">
                  <div id="FahSiam_ending" className="relative">
                      <p id="textFull" className="xs:hidden xl:block relative
                       top-[15vw] text-[#ffffff] justify-center text-center">"สถานที่ที่ให้อารมณ์ความรู้สึก และพบเจอเหตุการ์ณมากมาย <br/>
                          เปลื่ยนแปลงจากเก่าไปสู่ใหม่ จากยุคที่รุ่งเรืองที่สุด สู่ตำนาน"</p>

                      <p id="textRes" className="xl:hidden relative
                       top-[15vw] text-[#ffffff] justify-center text-center pb-[60vw]">"สถานที่ที่ให้อารมณ์ความรู้สึกและพบเจอ<br/>เหตุการ์ณมากมาย
                          เปลื่ยนแปลงจากเก่า<br/>ไปสู่ใหม่ จากยุคที่รุ่งเรืองที่สุด สู่ตำนาน"</p>

                      <img className="xs:hidden xl:block max-w-[100%] w-[100%] h-auto" src={EndPicture} alt=""/>
                      <img className="xl:hidden scale-[1.8]" src={EndPicture} alt=""/>
                  </div>

                  <div id="curtain" className="relative mb-[5vw] sm:mb-[49vw]">
                      <img className="absolute mx-[42.3vw] pt-[25vw] sm:hidden" src={Larong} alt=""/>
                      <img className="absolute mx-[42.3vw] pt-[15vw] hidden sm:block" src={LarongDesk} alt=""/>
                      <img className="relative right-[88vw] bottom-[2vw] sm:hidden" src={RedCurtain} alt=""/>
                      <img className="absolute left-[88vw] bottom-[2vw] sm:hidden" src={RedCurtain} alt=""/>
                      <img className="absolute right-[88vw] top-[-16vw] xs:hidden sm:block" src={RedCurtainDeskLeft} alt=""/>
                      <img className="absolute left-[88vw] top-[-16vw] xs:hidden sm:block" src={RedCurtainDeskRight} alt=""/>
                  </div>

                  <div id="curtain" className="flex xs:flex-col xl:flex-row relative mb-[5vw] sm:mb-[0vw]">
                      <img className="mx-auto mb-[6vw] xl:hidden" src={Logo} alt=""/>
                      <img className="my-[1vw] ml-[28vw] hidden xl:block" src={LogoDesk} alt=""/>
                      <p className="text-center text-[14px] text-[#ffffff] mx-[2vw] xl:hidden">เว็บไซต์นี้เป็นส่วนหนึ่งของวิชาออกแบบเว็บไซต์<br/>
                          หลักสูตรนิเทศศิลป์ คณะสถาปัตยกรรมศาสตร์และ<br/>
                          การโปรแกรมและสื่อผสม แขนงวิชาการพัฒนา<br/>สื่อประสมและเกม
                          คณะเทคโนโลยีสารสนเทศ<br/> สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง 2022</p>
                      <p className="relative text-[14px] text-[#ffffff] top-[1vw] mx-[2vw] xs:hidden xl:block">เว็บไซต์นี้เป็นส่วนหนึ่งของวิชาออกแบบเว็บไซต์
                          หลักสูตรนิเทศศิลป์ คณะสถาปัตยกรรมศาสตร์และ<br/>
                          การโปรแกรมและสื่อผสม แขนงวิชาการพัฒนา สื่อประสมและเกม
                          คณะเทคโนโลยีสารสนเทศ<br/> สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง 2022</p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Footer