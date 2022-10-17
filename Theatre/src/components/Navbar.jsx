import React from 'react'
import { navLinks } from '../constants';
import styles from '../style';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6
    justify-between items-center navbar">
        <ul className='list-none md:flex sm:flex hidden justify-center items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} 
            className={`text-black font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex flex-1 justify-end items-center sm:hidden'>
            <MenuIcon className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}/>

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 
            min-w-[150px] rounded-xl sidebar`}>

              <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} 
                className={`text-black font-normal cursor-pointer 
                text-[16px] ${index === navLinks.length-1 ? 'mb-0' : 'mb-4'}`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
                ))}
              </ul>

            </div>
        </div>

    </nav>
  )
}

export default Navbar