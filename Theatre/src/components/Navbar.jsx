import React, {useEffect, useRef} from 'react'
import { navLinks } from '../constants';
import { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Box,
    Button,
    Drawer,
    Typography,

} from "@mui/material";

const Navbar = () => {
    const [toggle, setToggle] = useState(true);


    return (
        <nav id="navbar">
            <MenuIcon className='max-w-[100%] h-auto w-[100%] ml-[89vw] mt-[8vw] relative bottom-[3vw] scale-[1.5]
             md:ml-[94.2vw] md:mt-[4.8rem] lg:mt-[6.5vw] lg:ml-[95.2vw] xl:mt-[6.5rem]
             object-contain border-solid border-[#a19893] border-2 rounded'
                onClick={() => {setToggle(!toggle)}}
                style={{
                    ":hover": {
                        backgroundColor: "#eee",
                        borderRadius: "100%",
                        pointerEvents: "visible",
                    },
                    cursor: "pointer",
                    padding: "0rem",
                    color: "#000",
                    transition: ".2s linear"}}/>
            <Drawer
                anchor="right"
                open={!toggle}
                onClose={() => {
                    setToggle(!toggle);
                }}

                style={{backdropFilter: "blur(5px)"
                }}>
                <Box id="drawerwrap" style={{margin: "0rem",
                    marginBottom: "0",
                backgroundColor: "#f9f3e2", width: "280px"}}>
                    <Box id="menuwrap" style={{padding: "7.4rem 1.5rem",
                        marginBottom: "0rem",
                        flexDirection: "column",
                        backgroundColor: "#f9f3e2"}}>
                        {navLinks.map((nav, index) => (
                            <Button
                                href={`#${nav.id}`}
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
                                    margin: "1rem 0",
                                }}
                            >
                                <Typography style={{
                                    fontFamily: "Bai Jamjuree, sans-serif",
                                    fontSize: "24px",
                                    color: "#000",
                                    fontWidth: 600,
                                }}>{nav.title}</Typography>
                            </Button>
                        ))}
                    </Box>
                </Box>
                <Box className="pt-[1.2rem] pl-[.23rem]
                    sm:pt-[1.7rem] sm:pr-[1.2rem]
                    md:pt-[2.6rem]"
                    id="closewrap"
                     style={{
                    width: "280px",
                    backgroundColor: "#f9f3e2",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "fixed",
                }}>
                    <CloseRoundedIcon
                        className="scale-[1.25]"
                        onClick = {() => {setToggle(!toggle)}}
                        style={{
                        ":hover": {
                            backgroundColor: "#eee",
                            borderRadius: "100%",
                            pointerEvents: "visible",
                        },
                        cursor: "pointer",
                        padding: "0rem",
                        marginRight: "1rem",
                        color: "#000",
                        transition: ".2s linear",
                        backgroundColor: "#f9f3e2",
                    }}/>
                </Box>
            </Drawer>
        </nav>
  )
}

export default Navbar