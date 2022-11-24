import React from 'react'
import "../css/lido.css";
import BrownCurve from '../img/Lido/browncurve.svg';
import BrownCurveMobile from '../img/Lido/browncurve-mobile.svg';
import Film from '../img/Lido/film.svg';
import Texture from '../img/Lido/Texture.png';
import Texture1 from '../img/Lido/Texture1.png';
import LidoTex from '../img/Lido/แถบเทคเจอร์ลิโด้.png';
import LidoLogo from '../img/Lido/LogoLido.png';
import LidoLogoFull from '../img/Lido/Logo-Lido-Full1.png';
import LidoLogoSemi from '../img/Lido/Logo-Lido-Full.png';
import BuildingLido from '../img/Lido/Building-Lido.png';
import Vector from '../img/Lido/Vector 37.png';
import VectorGrayMobile  from '../img/Lido/gray-mobile.png';
import VectorLightBrown  from '../img/Lido/brown-mobile.svg';
import PeopleInBuilding from '../img/Lido/PPinBuilding1.png';
import Tape1 from '../img/Lido/เทป.png';
import Tape2 from '../img/Lido/tape.png';
import Gobchai from '../img/Lido/Gobchai.png';
import People1 from '../img/Lido/Woman.png';
import People2 from '../img/Lido/Man.png';
import Change1 from '../img/Lido/2511.png';
import Change2 from '../img/Lido/2536.png';
import Change3 from '../img/Lido/2561.png';
import Camera from '../img/Lido/RedCam.png';
import CLTPaper from '../img/Chaloemthai/Paper.png'

const Lido = () => {
  return (
    
    <div class="flex justify-center item-center xl:px-0 xl:w-full" id="wrapper">
      <p id="text-2" class="invisible md:visible md:text-[0.875vw] sm:visible sm:text-[1.8vw]">จุดเริ่มต้นของโรงภาพยนตร์ลิโด ตั้งบนทำเลกลางเมืองย่านสยามสแควร์<br></br>
        ทำให้พื้นที่โดยรอบมีความเจริญขึ้นอย่างรวดเร็วและกลายเป็นแหล่งวัยรุ่น<br></br>
        ระดับตำนานที่ไม่ว่าจะกี่ยุคกี่สมัยก็ยังคงสามารถดึงดูดเหล่าวัยรุ่นได้เสมอ</p>
      <p id="text-22" class="xs:visible sm:text-[3.5vw] xs:visible xs:text-[3.5vw] md:invisible">จุดเริ่มต้นของโรงภาพยนตร์ลิโด
        ตั้งบนทำเลกลางเมืองย่านสยามสแควร์
        ทำให้พื้นที่โดยรอบมีความเจริญขึ้นอย่าง
        รวดเร็วและกลายเป็นแหล่งวัยรุ่นระดับ
        ตำนานที่ไม่ว่าจะกี่ยุคกี่สมัยก็ยังคงสามารถดึงดูดเหล่าวัยรุ่นได้เสมอ</p>
      <li id="text-3" class="ss:visible text-[2vw] xs:visible text-[1.25vw]">ลิโด้เปิดฉายครั้งแรกเมื่อ<br></br>
        27 มิถุนายน พ.ศ. 2511</li>
      <li id="text-33" class="">ลิโด้เปิดฉายครั้งแรกเมื่อ<br></br>
        27 มิถุนายน พ.ศ. 2511</li>



      
      <img id="ttlido" src={Texture} />
      <img id="ttlido1" src={Texture1} />
      <img id="building" src={BuildingLido} />
      {/* <img id="tablido" src={LidoTex}/>
      <img id="logo" src={LidoLogo}/> */}
      <img id="lidologo" src={LidoLogoFull} />
      <img id="lidologosemi" src={LidoLogoSemi} />
      <img id="vector-gray1" src={VectorGrayMobile} />
      <img id="vector-gray" src={Vector} />
      <img id="gobchai" src={Gobchai} />
      <img id="people-lido" src={PeopleInBuilding} />
      <img id="people1" src={People1} />
      <img id="people2" src={People2} />
      <img id="tape" src={Tape1} />
      <img id="tape1" src={Tape2} />
      <img id="light-brown" src={VectorLightBrown} />
      <img id="change1" src={Change1} />
      <img id="change2" src={Change2} />
      <img id="change3" src={Change3} />
      <img id="camera" src={Camera} />
      <img id="paper" src={CLTPaper} />
      <p id="text-4">
        <b>คุณกอบชัย ลูกชายคุณวิชัย อโสตถิกุล </b> ผู้บริหารบริษัท เซาท์อีสท์เอเชียก่อสร้าง จำกัด <br></br>
        ได้รับโอกาสจากทางจุฬาฯ ให้เข้าไปพัฒนาที่ดินผืนใหญ่ 52 ไร่ พร้อมกับโจทย์ให้พัฒนาที่ดินผืนนี้ <br></br>
        เป็นศูนย์การค้าเต็มรูปแบบ โดยได้จับมือกับ “คุณพิสิษฐ์ ตันสัจจา” แห่งกลุ่ม Apex เป็นพันธมิตรร่วม <br></br>
        ก่อสร้างโรงภาพยนตร์ ในแรกเริ่มโรงภาพยนตร์มีเพียง 2 แห่งคือโรงภาพยนตร์ ‘สยาม’ กับ ‘ลิโด’ <br></br>
        แต่แล้วก็เกิดปัญหากับโครงการไอซ์สเก็ต คุณกอบชัยจึงตัดสินใจให้กลุ่ม Apex ปรับพื้นที่ไอซ์สเก็ตให้ <br></br>
        เป็นโรงภาพยนตร์แห่งที่ 3 ในชื่อว่า ‘สกาลา’</p>
        <p id="text-44">
        <b>คุณกอบชัย ลูกชายคุณวิชัย อโสตถิกุล</b> <br></br> ผู้บริหารบริษัท เซาท์อีสท์เอเชียก่อสร้าง จำกัด <br></br>
        ได้รับโอกาสจากทางจุฬาฯ ให้เข้าไปพัฒนาที่ดินผืนใหญ่ 52 ไร่ พร้อมกับโจทย์ให้พัฒนาที่ดินผืนนี้ 
        เป็นศูนย์การค้าเต็มรูปแบบ โดยได้จับมือกับ “คุณพิสิษฐ์ ตันสัจจา” แห่งกลุ่ม Apexเป็นพันธมิตรร่วม 
        ก่อสร้างโรงภาพยนตร์  ในแรกเริ่มโรงภาพยนตร์มีเพียง 2 แห่งคือ โรงภาพยนตร์ ‘สยาม’ กับ ‘ลิโด’ 
        แต่แล้วเมื่อเกิดปัญหากับโครงการไอซ์สเก็ต จึงตัดสินใจให้กลุ่ม Apex ปรับพื้นที่ไอซ์สเก็ตให้เป็นโรงภาพยนตร์แห่งที่ 3 ในชื่อว่า ‘สกาลา’</p>
      <p id="text-5">
        <span class="topic-1">สถาปัตยกรรม</span><br></br>
        โรงภาพยนตร์ลิโดถือเป็นอาคารที่แสดงลักษณะของสถาปัตยกรรมโมเดิร์นยุค 60s และ 70s ไว้ได้เป็นอย่างดี <br></br>
        บรรดาสิ่งปลูกสร้างจากช่วงยุค 40s ถึง 70s เหล่านี้เปรียบเสมือนสัญลักษณ์ของการเปลี่ยนผ่านไปสู่รัฐสมัยใหม่ <br></br>
        โดยสื่อให้เห็นถึงความก้าวหน้าในระบบการศึกษา การธนาคาร และกฎหมายของประเทศ<br></br><br></br>
        ซึ่งถือกำเนิดจากขบวนการเบาเฮาส์ (Bauhaus) ในเยอรมนีเมื่อช่วงทศวรรษที่ 20 นั้น มุ่งสร้างสรรค์งานทาง<br></br>
        สถาปัตยกรรมที่เรียบง่ายและเผยให้เห็นเนื้อแท้ของโครงสร้าง อาคารส่วนมากไร้เครื่องตกแต่งใดๆ <br></br>
        ด้วยความคิดที่ว่ารูปทรงควรถูกกำหนดโดยการใช้งานเป็นหลัก สถาปนิกผู้บุกเบิกแนวคิดดังกล่าว <br></br>
        อย่าง มีสเตฟาน เดอร์ โรห์ และ เลอ กอร์บูซิเอร์ ได้แผ่ขยายอิทธิพลไปทั่วทุกมุมโลก รวมถึงประเทศไทย <br></br>
        อย่างไรก็ตาม เมื่อแนวคิดนี้ดำรงอยู่มา 40 ปี คติประจำลัทธิที่ว่า Less is more ได้ถูกคนมองว่านำไปสู่อาคาร <br></br>
        แบบมีแต่แท่งคอนกรีตและแผ่นกระจก
      </p>
      
      
      <p id="text-55">
      <span id="topic-12"><b>สถาปัตยกรรม</b></span><br></br>
        โรงภาพยนตร์ลิโดถือเป็นอาคารที่แสดงลักษณะของสถาปัตยกรรมโมเดิร์นยุค 60s และ 70s ไว้ได้เป็นอย่างดี 
        บรรดาสิ่งปลูกสร้างจากช่วงยุค 40s ถึง 70s เหล่านี้เปรียบเสมือนสัญลักษณ์ของการเปลี่ยนผ่านไปสู่รัฐสมัยใหม่ 
        โดยสื่อให้เห็นถึงความก้าวหน้าในระบบการศึกษา การธนาคาร และกฎหมายของประเทศ<br></br><br></br>
        ซึ่งถือกำเนิดจากขบวนการเบาเฮาส์ (Bauhaus) ในเยอรมนีเมื่อช่วงทศวรรษที่ 20 นั้น มุ่งสร้างสรรค์งานทาง
        สถาปัตยกรรมที่เรียบง่ายและเผยให้เห็นเนื้อแท้ของโครงสร้าง อาคารส่วนมากไร้เครื่องตกแต่งใดๆ 
        ด้วยความคิดที่ว่ารูปทรงควรถูกกำหนดโดยการใช้งานเป็นหลัก<br></br><br></br> สถาปนิกผู้บุกเบิกแนวคิดดังกล่าว 
        อย่าง มีสเตฟาน เดอร์ โรห์ และ เลอ กอร์บูซิเอร์ ได้แผ่ขยายอิทธิพลไปทั่วทุกมุมโลก รวมถึงประเทศไทย 
        อย่างไรก็ตาม เมื่อแนวคิดนี้ดำรงอยู่มา 40 ปี คติประจำลัทธิที่ว่า Less is more ได้ถูกคนมองว่านำไปสู่อาคาร 
        แบบมีแต่แท่งคอนกรีตและแผ่นกระจก</p>

      <p id="topic-2">จุดเปลี่ยน</p>
      <p id="text-6"><span id="topic-all">2511</span><br></br><br></br>
        เปิดให้บริการตั้งแต่ 27 มิ.ย.2511 หรือเมื่อราว 50 ปีที่แล้วกับความอลังการ<br></br>
        ของการเป็นโรงภาพยนตร์ความจุ 1,000 ที่นั่งทำให้ลิโด้เป็นหนึ่งในโรงหนัง<br></br>
        ขนาดใหญ่ยักษ์ในเวลานั้น</p>
      <p id="text-66"><span id="topic-all-6">2511</span><br></br><br></br>
        เปิดให้บริการตั้งแต่ 27 มิ.ย.2511<br></br>หรือเมื่อราว 50 ปีที่แล้วกับความอลังการ
        <br></br>ของการเป็นโรงภาพยนตร์ความจุ 1,000 ที่นั่ง<br></br>ทำให้ลิโด้เป็นหนึ่งในโรงหนัง
        ขนาดใหญ่ยักษ์ในเวลานั้น</p>
      <p id="text-7"><span id="topic-all">2536</span><br></br><br></br>
        เกิดเหตุไม่คาดฝันขึ้นเมื่อเกิดเหตุเพลิงไหม้โรงภาพยนตร์ลิโดจนต้องปิดปรับปรุง<br></br>
        ต่อมาในปี พ.ศ. 2553 ก็เกิดเหตุไม่คาดคิดขึ้นอีกครั้งเมื่อโรงภาพยนตร์สยาม<br></br>
        ถูกลอบวางเพลิงจากการชุมนุมทางการเมืองจนทำให้โรงภาพยนตร์สยามจำต้อง<br></br>
        ปิดตัวลง</p>
      <p id="text-77"><span id="topic-all-7">2536</span><br></br><br></br>
      เกิดเหตุไม่คาดฝันขึ้นเมื่อเกิดเหตุเพลิงไหม้โรงภาพยนตร์ลิโดจนต้องปิดปรับปรุง
      ต่อมาในปี พ.ศ. 2553 ก็เกิดเหตุไม่คาดคิดขึ้นอีกครั้งเมื่อโรงภาพยนตร์สยาม
      ถูกลอบวางเพลิงจากการชุมนุมทางการเมืองจนทำให้โรงภาพยนตร์สยามจำต้อง
      ปิดตัวลง</p>
      <p id="text-8"><span id="topic-all">2561</span><br></br><br></br>
        ลิโดเป็นโรงภาพยนตร์แห่งที่ 2 ในเครือ Apex (เอเพ็กซ์) ที่เปิดให้บริการนานถึง 5 ทศวรรษ<br></br>
        ก่อนจะหมดสัญญาและปิดตัวไปเมื่อ 31 พฤษภาคม 2561 โดย “PMCU” <br></br>
        ในฐานะผู้ถือสัมปทานพื้นที่สยามสแควร์ ซึ่งได้ “Loveis Entertainment” <br></br>
        เข้ามาเป็นพันธมิตรทางธุรกิจ จัดตั้งบริษัท Lido Connect <br></br>
        เพื่อชุบชีวิตใหม่ให้กับลิโด้ในอีก 1 ปี ให้หลัง</p>
      <p id="text-88" class="xs:visible sm:invisible"><span id="topic-all-8">2561</span><br></br><br></br>
      ลิโดเป็นโรงภาพยนตร์แห่งที่ 2 ในเครือ Apex (เอเพ็กซ์) ที่เปิดให้บริการนานถึง 5 ทศวรรษ
      ก่อนจะหมดสัญญาและปิดตัวไปเมื่อ 31 พฤษภาคม 2561 โดย “PMCU”
      ในฐานะผู้ถือสัมปทานพื้นที่สยามสแควร์ ซึ่งได้ “Loveis Entertainment” 
      เข้ามาเป็นพันธมิตรทางธุรกิจ จัดตั้งบริษัท Lido Connect 
      เพื่อชุบชีวิตใหม่ให้กับลิโด้ในอีก 1 ปี ให้หลัง</p>

      <img id="brown" src={BrownCurve} />
      <img id="brown" class="sm:visible  xs:visible  md:invisible" src={BrownCurveMobile} />
      <img id="film" src={Film} />
      <h1 id="topic" class="invisible md:visible md:text-[1.25vw]  sm:visible sm:text-[5vw] ">จุดเปลี่ยน</h1>
      <p id="text-1" class="invisible md:visible sm:text-[3vw]  sm:visible sm:text-[3.75vw] md:text-[0.875vw]">
        ศาลาเฉลิมกรุงสะดุดหยุดลงชั่วคราวในสงครามโลกเนื่องจากเหตุผลทางสงครามจึงไม่สามารถนำฟิลม์เข้ามาฉายได้<br></br>
        จึงเปลี่ยนบทบาทมาเป็นละครเวทีก่อนกลับสู่ฐานะโรงหนังยอดนิยมอีกครั้ง แต่เมื่อถึงยุคที่โรงหนังซบเซาอีกครั้ง<br></br>
        ก็เลยทำให้ศาลาเฉลิมกรุงกลายเป็นโรงละครเวทีในที่สุด</p>
      <h1 id="topic-11" class="xs:visible xs:text-[5vw] sm:invisible">จุดเปลี่ยน</h1>
      <p id="text-11" class="xs:visible xs:text-[3.75vw]  sm:invisible">
        ศาลาเฉลิมกรุงสะดุดหยุดลงชั่วคราวในสงครามโลกเนื่องจากเหตุผลทางสงครามจึงไม่สามารกนำฟิลม์เข้ามาฉายได้
        สงครามโลกเนื่องจากเหตุผลทางสงคราม
        จึงไม่สามารกนำฟิลม์เข้ามาฉายได้จึง
        เปลี่ยนบทบาทมาเป็นละครเวทีก่อนกลับสู่
        ฐานะโรงหนังยอดนิยมอีกครั้ง
        แต่เมื่อถึงยุคที่โรงหนังซบเซาอีกครั้งก็เลยทำ
        ให้ศาลาเฉลิมกรุงกลายเป็นโรงละครเวทีในที่สุด</p>
    </div>
  )
}
import * as LidoJava from '../js/lido.js';
export default Lido 

