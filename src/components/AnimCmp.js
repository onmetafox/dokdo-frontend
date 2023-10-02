import React from "react";
import circle1 from "../assets/images/circle1.png";
import circle2 from "../assets/images/circle2.png";

import { Box } from "@mui/material";

const AnimComp = () => {
    return <Box sx={{position:"relative",overflow:'hidden', width:'100%'}}>
        <Box component="img" src={circle1} sx={{position:'absolute', width:'100%'}}></Box>
        <Box component="img" src={circle2} sx={{width: '100%'}} className="rotating-element"></Box>
    </Box>
}

export default AnimComp;