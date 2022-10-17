import React from 'react';
import './Scala.css';
import ScalaLogo from '../img/Scala/Scala Logo.png'
import Aura from '../img/Scala/Aura.png'
import Car from '../img/Scala/Car.png'

const Scala = () => {
  return (
    <div>
      <div className='head1'>
        <img className='scalalogo' src={ScalaLogo} />
      </div>
      <div className='head2'>
          <p className='herotext'>ตำนาน “โรงภาพยนตร์สกาลา” ราชาโรงหนังแห่งสยามที่เป็นมากกว่าสถานที่ฉายหนัง <br />
          แต่ยังดึงดูดกคนที่รักในการเสพความงามของสถาปัตยกรรม</p>
      </div>
      <div className='content1'>
        <div className='divaura1'>
          <img className='aura1' src={Aura} />
        </div>
        <div className='divaura2'>
          <img className='aura2' src={Aura} />
        </div>
        <div className='divcar'>
          <img className='car' src={Car} />
        </div>
      </div>
    </div>
  )
}

export default Scala