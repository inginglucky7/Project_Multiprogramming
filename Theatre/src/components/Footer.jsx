import React, {useEffect, useRef} from 'react'
import EndPicture from '../img/End/all_pic_end.png'
import RedCurtainleft from '../img/End/ผ้าม่านแดง.png'
import RedCurtainDeskRight from '../img/End/ผ้าม่านขวา.png'
import RedCurtainDeskLeft from '../img/End/ผ้าม่านซ้าย.png'
import RedCurtainright from '../img/End/ผ้าม่านแดง2.png'
import Larong from '../img/End/ลาโรง.png'
import LarongDesk from '../img/End/ลาโรงDesk.png'
import Logo from '../img/End/logo_group.png'
import LogoDesk from '../img/End/logo_group_desktop.png'
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Footer = () => {
    let textFooter = useRef(null);
    let textFooterRes = useRef(null);
    let endingLarong = useRef(null);
    let endingLarongRes = useRef(null);
    let leftRedCurtain = useRef(null);
    let rightRedCurtain = useRef(null);
    let leftRedCurtainRes = useRef(null);
    let rightRedCurtainRes = useRef(null);

    useEffect(() => {
        gsap.to(
            textFooter, 1,{
                scrollTrigger: {
                    trigger: textFooter,
                    toggleActions: "restart pause reverse pause"
                },
                opacity :1,
                y:-50,
                ease: "inOut"
            }
        );
        gsap.to(
            textFooterRes, 1,{
                scrollTrigger: {
                    trigger: textFooterRes,
                    toggleActions: "restart pause reverse pause",
                },
                opacity :1,
                y: -50,
                ease: "inOut"
            }
        );
        gsap.to(
            endingLarong, 5,{
                scrollTrigger: {
                    trigger: endingLarong,
                    toggleActions: "restart pause restart pause"
                },
                opacity :1,
                y:-100,
                ease: "inOut"
            }
        );
        gsap.to(
            endingLarongRes, 2,{
                scrollTrigger: {
                    trigger: endingLarongRes,
                    toggleActions: "restart pause restart pause"
                },
                opacity :1,
                y:-20,
                ease: "inOut"
            }
        );
        gsap.to(
            leftRedCurtain, 5, {
                scrollTrigger: {
                    trigger: leftRedCurtain,
                    toggleActions: "restart pause reverse pause",
                    start: "300px center",
                    scrub: 3,
                },
                x: 1200,
                ease: "inOut"
            });
        gsap.to(
            rightRedCurtain, 5, {
                scrollTrigger: {
                    trigger: rightRedCurtain,
                    toggleActions: "restart pause reverse pause",
                    start: "300px center",
                    scrub: 3,
                },
                x: -1200,
                ease: "inOut"
            });
        gsap.to(
            leftRedCurtainRes, 5, {
                scrollTrigger: {
                    trigger: leftRedCurtain,
                    toggleActions: "restart pause reverse pause",
                    scrub: 3,
                },
                x: 210,
                ease: "inOut"
            });
        gsap.to(
            rightRedCurtainRes, 5, {
                scrollTrigger: {
                    trigger: rightRedCurtain,
                    toggleActions: "restart pause reverse pause",
                    scrub: 3,
                },
                x: -210,
                ease: "inOut"
            });
    }, []);

  return (
      <section className="flex flex-col bg-[#3a352a] xs:pt-[80vw] sm:pt-[25vw]">
          <div id="footer">
              <div id="ending" className="max-w-[100%] max-h-[100%] h-auto w-[100vw] mx-auto">
                  <div id="FahSiam_ending" className="relative">
                      <p ref={el => {textFooter = el}} id="textFull" className="xs:hidden xl:block relative
                       top-[15vw] text-[#ffffff] justify-center text-center opacity-0">"สถานที่ที่ให้อารมณ์ความรู้สึก และพบเจอเหตุการ์ณมากมาย <br/>
                          เปลื่ยนแปลงจากเก่าไปสู่ใหม่ จากยุคที่รุ่งเรืองที่สุด สู่ตำนาน"</p>

                      <p ref={el => {textFooterRes = el}} id="textRes" className="xl:hidden relative
                       top-[15vw] text-[#ffffff] justify-center text-center pb-[60vw] opacity-0">"สถานที่ที่ให้อารมณ์ความรู้สึกและพบเจอ<br/>เหตุการ์ณมากมาย
                          เปลื่ยนแปลงจากเก่า<br/>ไปสู่ใหม่ จากยุคที่รุ่งเรืองที่สุด สู่ตำนาน"</p>

                      <img className="xs:hidden xl:block max-w-[100%] w-[100%] h-auto" src={EndPicture} alt=""/>
                      <img className="xl:hidden scale-[1.8]" src={EndPicture} alt=""/>
                  </div>

                  <div id="curtain" className="relative mb-[5vw] sm:mb-[49vw]">
                      <img ref={el => {endingLarongRes = el}} className="absolute opacity-0 mx-[42.3vw] pt-[25vw] sm:hidden" src={Larong} alt=""/>
                      <img ref={el => {endingLarong = el}} className="absolute opacity-0 mx-[42.3vw] pt-[15vw] hidden sm:block" src={LarongDesk} alt=""/>
                      <img ref={el => {leftRedCurtainRes = el}} className="relative right-[88vw] bottom-[2vw] sm:hidden" src={RedCurtainleft} alt=""/>
                      <img ref={el => {rightRedCurtainRes = el}} className="absolute left-[88vw] bottom-[2vw] sm:hidden" src={RedCurtainright} alt=""/>
                      <img ref={el => {leftRedCurtain = el}} className="absolute right-[88vw] top-[-16vw] xs:hidden sm:block" src={RedCurtainDeskLeft} alt=""/>
                      <img ref={el => {rightRedCurtain = el}} className="absolute left-[88vw] top-[-16vw] xs:hidden sm:block" src={RedCurtainDeskRight} alt=""/>
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