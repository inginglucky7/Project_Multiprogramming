import React from 'react'
import { navLinks } from '../constants';
import styles from '../style';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,

} from "@mui/material";

const Navbar = () => {
    const [toggle, setToggle] = useState(null);

    return (
        <div id="wrapbg" className="bg-[#f9f3e2]">
            <Drawer
                anchor="right"
                open={0}
                style={{backdropFilter: "blur(5px)",
                backgroundColor: "#f9f3e2"}}
            >
                <Box id="drawerwrap" style={{margin: "0rem",
                backgroundColor: "#f9f3e2", width: "280px"}}>
                    <Box id="menuwrap" style={{padding: "5rem 1rem",
                        flexDirection: "column",
                        backgroundColor: "#f9f3e2"}}>
                        {navLinks.map((nav, index) => (
                            <Button
                                key={index}
                                onClick={() => {
                                    setToggle();
                                }}
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                    justifyContent: "flex-start",
                                    ":hover": {
                                        backgroundColor: "#eee",
                                    },
                                    borderRadius: 13,
                                    margin: "1.17rem 0",
                                }}
                            >
                                <Typography href={`#${nav.id}`} style={{
                                    fontFamily: "Bai Jamjuree, sans-serif",
                                    fontSize: "24px"
                                }}>{nav.title}</Typography>
                            </Button>
                        ))}
                    </Box>
                </Box>
                <Box id="closewrap"
                     close = {
                     () => {setToggle((prev) => !prev)}}
                     style={{
                    width: "280px",
                    backgroundColor: "#f9f3e2",
                    padding: "2rem 0",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "fixed",
                }}>
                    <CloseRoundedIcon style={{
                        ":hover": {
                            backgroundColor: "#eee",
                            borderRadius: "100%",
                            pointerEvents: "visible",
                        },
                        cursor: "pointer",
                        padding: "0rem",
                        color: "#000",
                        transition: ".2s linear",
                        backgroundColor: "#f9f3e2",
                    }}/>
                </Box>
            </Drawer>
        </div>

    /*<nav className="w-full flex py-6
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

        <div className='flex flex-1 justify-end items-center'>
            <MenuIcon className='w-[28px] h-[28px] mx-4 object-contain'
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

    </nav>*/
  )
}

export default Navbar