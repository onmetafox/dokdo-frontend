import { Box, Grid } from "@mui/material";
import React from "react";
import cx from "classnames";
import lineIcon from "../assets/images/line.png"
import Link from "./Link";
const AboutCard = (props) => {
    const { image, title, detail, link, href} = props.data;
    let classNames;
    if(props.index % 2 === 0 ){
        classNames = cx("about-card", 'm-lr-20' , 'mt-80-m', props.className);
    }else{
        classNames = cx("about-card", 'm-lr-20' , 'mt-80', props.className);
    }
    return <>
        <Grid item className = {classNames} xs={props.xs} md={props.md} lg={props.lg} sm={props.sm}>
            <Box component="img" src={image} sx={{ marginLeft:2}}></Box>
            <Box className="fs-s t-p m-tb-5">{title}</Box>
            <Box className="fs-s2 t-s m-tb-5">{detail}</Box>
            <Box component="img" src={lineIcon} sx={{width:"10%"}}></Box>
            <Link icon = {true} status="active" className="t-o no-line" title={link} href={href}></Link>
        </Grid>
    </>
}

export default AboutCard;