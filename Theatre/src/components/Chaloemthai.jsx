import React from 'react'
import './Chaloemthai.css';
import './Scala.css';
import CLTPaper from '../img/Chaloemthai/Paper.png'
import CLTLogo from '../img/Chaloemthai/Logo.png'
import CLTBG from '../img/Chaloemthai/CTLBuildingBG.png'
import CLTBuilding from '../img/Chaloemthai/CTLBuilding.png'
import CLTCar from '../img/Chaloemthai/CTLCar.png'
import CLTJit from '../img/Chaloemthai/Jit.png'
import CLTRoad from '../img/Chaloemthai/CTLRoad.png'
import CLTRoadBG from '../img/Chaloemthai/CTLRoadBG.png'
import CLTRedCar from '../img/Chaloemthai/CTLRedCar.png'
import CLTITIM from '../img/Chaloemthai/CTLITIM.png'
import CLTLights from '../img/Chaloemthai/CTLLights.png'
import CLT2L from '../img/Chaloemthai/CLT2L.png'
import CLTPaperTxt from '../img/Chaloemthai/CLTPaperTxt.png'
import CLTTPBG from '../img/Chaloemthai/CLTTPBG.png'
import CLTTP from '../img/Chaloemthai/CLTTP.png'
import CLTXSPaper from '../img/Chaloemthai/PaperTxt.png'
import * as ScalaJS from '../js/scala.js';

const Chaloemthai = () => {
  return (
    <div className='cltbody'>
      <div>
        <img src={CLTPaper} alt="paper" />
      </div>
      <div className='flex justify-center'>
        <img id='txt-03' className='sm:-mt-60 xs:-mt-12' src={CLTLogo} alt="logo" />
      </div>
      <div className='sm:my-0 xs:my-20'>
        <div className='text-center sm:-mt-28 xs:mx-20'>
          <p id='txt-01' className='sm:text-lg xs:text-base'>" บางครั้งหากต้องเสียบางสิ่งเพื่อเผยให้เห็นของเก่าที่งดงามกว่า <br />
            ก็สมควรและคุ้มค่าที่ต้องเสียไป "</p><br />
          <p id='txt-01' className='sm:text-lg xs:text-base'>จอมพล ป. พิบูลสงคราม</p>
        </div>
      </div>
      <div>
        <div className='absolute xs:hidden sm:block'>
          <p id='txt-01' className='text-black text-lg ml-24 mt-48'>ศาลาเฉลิมไทยสร้างขึ้นตามความประสงค์ของ <br />
            จอมพล ป. พิบูลสงคราม ซึ่งแต่ก่อนคือโรงมหรสพ <br />
            และในเวลาต่อมาถูกปรับปรุงให้เป็นโรงภาพยนตร์ <br />
            ที่ตั้งอยู่ที่มุมถนนราชดำเนินกลางกับถนนมหาไชย <br />
            สร้างขึ้นเมื่อราวปี พ.ศ. 2483 </p>
        </div>
        <div className='xs:mt-36 sm:mt-0'><img className='absolute sm:scale-100 xs:scale-150' src={CLTBuilding} alt="building" /></div>
        <div className='xs:mt-36 sm:mt-0'><img className='absolute sm:scale-100 xs:scale-150' src={CLTCar} alt="car" /></div>
        <div className='xs:mt-36 sm:mt-0'><img className='sm:scale-100 xs:scale-150' src={CLTBG} alt="cltbg" /></div>
      </div>

      <div className='xs:hidden sm:block'>
        <div className='flex justify-center items-center -mt-24'>
          <div>
            <img id='txt-01' src={CLTJit} alt="jit" />
          </div>
          <div>
            <p id='txt-01' className='ml-16 text-xl'>สถาปัตยกรรม</p> <br />
            <p id='txt-01' className='ml-16 text-base'>ออกแบบโดย นายจิตรเสน อภัยวงศ์ สถาปนิกที่จบการศึกษามาจากฝรั่งเศส <br />
              ซึ่งรูปแบบอาคารได้รับอิทธิพลจากสถาปัตยกรรมยุคใหม่ (Modern Architecture) <br />
              ด้วยรูปทรงโมเดิร์นตามแบบตะวันตกไม่มีหลังคา ให้ความสำคัญกับรูปทรงเรขาคณิต <br />
              โดยเฉพาะแบบคิวบิสซึ่ม (Cubism)</p>
          </div>
        </div>
      </div>
      <div className='sm:hidden xs:block'>
        <div className='mt-40'>
          <div className='flex justify-center'>
            <img id='txt-01' className='w-8/12' src={CLTJit} alt="jit" />
          </div>
          <div>
            <p id='txt-01' className='text-sm text-center'>ศาลาเฉลิมไทยสร้างขึ้นตามความประสงค์ของ <br />
              จอมพล ป. พิบูลสงคราม ซึ่งแต่ก่อนคือโรงมหรสพ <br />
              และในเวลาต่อมาถูกปรับปรุงให้เป็นโรงภาพยนตร์ <br />
              ที่ตั้งอยู่ที่มุมถนนราชดำเนินกลางกับถนนมหาไชย <br />
              สร้างขึ้นเมื่อราวปี พ.ศ. 2483 </p>
          </div>
          <div className='mt-60'>
            <p id='txt-01' className='text-xl text-center'>สถาปัตยกรรม</p> <br />
            <p id='txt-01' className='text-sm text-center mx-12 mb-60'>ออกแบบโดย นายจิตรเสน อภัยวงศ์ <br />
              สถาปนิกที่จบการศึกษามาจากฝรั่งเศส <br />
              ซึ่งรูปแบบอาคารได้รับอิทธิพลจากสถาปัตยกรรม <br />
              ยุคใหม่ (Modern Architecture) ด้วยรูปทรง <br />
              โมเดิร์นตามแบบตะวันตกไม่มีหลังคา <br />
              ให้ความสำคัญกับรูปทรงเรขาคณิต <br />
              โดยเฉพาะแบบคิวบิสซึ่ม (Cubism)</p>
          </div>
        </div>
      </div>

      <div className='mt-40'>
        <div className='roadtxt1 absolute left-1/2 xs:hidden sm:block'>
          <p id='txt-01' className='text-lg'>ในสมัยของจอมพล ป. พิบูลสงคราม นั้นได้มีการขยายถนนราชดำเนินกลางประดับประดาโคมไฟ <br />
            อย่างวิจิตรทันสมัย 2 ฟากถนน เพราะปรารถนาที่จะเห็นถนนรุ่งเรืองเฉกเช่นเดียวกันถนนในประเทศฝรั่งเศส</p>
        </div>
        <div className='roadtxt2 absolute left-1/2 xs:hidden sm:block'>
          <p id='txt-01' className='text-lg'>ศาลาเฉลิมไทยในขณะนั้นเป็นแหล่งบันเทิงและพักผ่อน บริเวณรอบเต็มไปด้วยของค้าขาย <br />
            และยังเป็นโรงภาพยนตร์แรก ๆ ที่มีร้านอาหารเครื่องดื่มไว้บริการผู้ชมภาพยนตร์ <br />
            ระหว่างรอหรือเมื่อชมเสร็จ <br /><br />
            โดยร้านที่กลายเป็นตำนานที่แห่งนี้คือ ร้านไอศกรีม “POP” <br />
            ที่ตกแต่งร้านสไตล์อเมริกัน ขายไอศกรีมตราเป็ดที่มีโลโก้เป็นโดนัลด์ดั๊ก <br />
            และเป็นที่แรกที่ขายข้าวโพดคั่ว “POP”</p>
        </div>
        <div className='roadtxt3 absolute left-1/2 ml-44 xs:hidden sm:block'>
          <p id='txt-01' className='text-lg'>ไอศกรีม มาแล้วจ้าาาา</p>
        </div>
        <div><img className='absolute sm:scale-100 xs:scale-150' src={CLTRoad} alt="road" /></div>
        <div><img className='absolute sm:scale-100 xs:scale-150' src={CLTRedCar} alt="redcar" /></div>
        <div><img className='absolute sm:scale-100 xs:scale-150' src={CLTITIM} alt="itim" /></div>
        <div><img className='absolute sm:scale-100 xs:scale-150' src={CLTLights} alt="lights" /></div>
        <div><img className='lights absolute sm:scale-100 xs:scale-150' src={CLT2L} alt="twol" /></div>

        <div className='xs:block sm:hidden'><p id='txt-01' className='absolute mt-56 ml-40 text-right text-xs'>ในสมัยของจอมพล ป. พิบูลสงคราม <br />
          นั้นได้มีการขยายถนนราชดำเนินกลาง <br />
          ประดับประดาโคมไฟอย่างวิจิตรทันสมัย <br />
          2 ฟากถนน เพราะปรารถนาที่จะเห็นถนน <br />
          รุ่งเรืองเฉกเช่นเดียวกันถนนในประเทศฝรั่งเศส</p></div>

        <div><img className='sm:scale-100 xs:scale-150' src={CLTRoadBG} alt="roadbg" /></div>
      </div>

      <div className='xs:block sm:hidden mt-60 text-center mx-12'>
        <p id='txt-01' className='text-sm'>ศาลาเฉลิมไทยในขณะนั้นเป็นแหล่งบันเทิง <br />
          และพักผ่อน บริเวณรอบเต็มไปด้วยของค้าขาย <br />
          และยังเป็นโรงภาพยนตร์แรก ๆ ที่มีร้านอาหาร <br /> 
          เครื่องดื่มไว้บริการผู้ชมภาพยนตร์ <br />
          ระหว่างรอหรือเมื่อชมเสร็จ <br /><br /><br />
              
              โดยร้านที่กลายเป็นตำนานที่แห่งนี้คือ <br />
              ร้านไอศกรีม “POP” ที่ตกแต่งร้านสไตล์อเมริกัน <br />
              ขายไอศกรีมตราเป็ดที่มีโลโก้เป็นโดนัลด์ดั๊ก <br />
              และเป็นที่แรกที่ขายข้าวโพดคั่ว “POP”</p>
      </div>
      <div className='xs:block sm:hidden mt-32 -mb-36'>
        <div className='flex justify-center'>
          <img id='txt-01' className='w-10/12 absolute' src={CLTXSPaper} alt="papertxtxs" />
        </div>
        <p id='txt-01' className='absolute text-2xl ml-16 mt-28'>จุดเปลี่ยน</p>
        <p id='txt-01' className='absolute text-base ml-16 mt-44'>พ.ศ. 2532 <br />
              คณะรัฐมนตรีรัฐบาลพลเอกชาติชาย <br />
              ชุณหะวัณ มีมติให้รื้อศาลาเฉลิมไทย <br />
              เนื่องจากบดบังทัศนียภาพ <br />
              ของวัดราชนัดดารามวรวิหาร <br /> 
              และโลหะปราสาท ซึ่งเป็นวัดสำคัญ <br />
              ในกรุงเทพฯ ทำให้ปัจจุบันพื้นที่ของ <br />
              ศาลาเฉลิมไทย ได้กลายมาเป็น <br />
              ลานพลับพลามหาเจษฎาบดินทร์ <br />
              และมองเห็นโลหะปราสาทได้อย่างแจ่มชัด</p>
        <img className='scale-75 invisible' src={CLTXSPaper} alt="papertxtxs" />
      </div>

      <div>
        <div className='mt-20'>
          <img id='txt-01' className='absolute xs:hidden sm:block' src={CLTPaperTxt} alt="pptxt" />

          <img className='absolute sm:scale-[1.275] xs:scale-150' src={CLTTP} alt="tb" />

          <div className='absolute cltchange xs:hidden sm:block'>
            <p id='txt-01' className='text-2xl'>จุดเปลี่ยน</p><br />
            <p id='txt-01' className='text-lg'>พ.ศ. 2532 <br />
              คณะรัฐมนตรีรัฐบาลพลเอกชาติชาย ชุณหะวัณ <br />
              มีมติให้รื้อศาลาเฉลิมไทย เนื่องจากบดบังทัศนียภาพ <br />
              ของวัดราชนัดดารามวรวิหาร และโลหะปราสาท <br />
              ซึ่งเป็นวัดสำคัญในกรุงเทพฯ ทำให้ปัจจุบันพื้นที่ <br />
              ของศาลาเฉลิมไทย ได้กลายมาเป็นลานพลับพลา <br />
              มหาเจษฎาบดินทร์ และมองเห็นโลหะปราสาท <br />
              ได้อย่างแจ่มชัด</p>
          </div>
          
          <img className='sm:scale-[1.275] xs:scale-150' src={CLTTPBG} alt="tbbg" />
        </div>
      </div>
    </div>
  )
}

export default Chaloemthai