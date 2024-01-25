import { Box, Grid } from "@mui/material";
import React from "react";
import cx from "classnames";
import lineIcon from "../assets/images/line.png"
import Link from "./Link";
const AboutCard = (props) => {
    const { image, title, detail, link, href} = props.data;
    let classNames;
    if(props.index % 2 === 0 ){
        classNames = cx("about-card corner-4", 'm-20' , props.className);
    }else{
        classNames = cx("about-card corner-4", 'm-20' , props.className);
    }
    return <>
        <Grid item className = {classNames} xs={props.xs} md={props.md} lg={props.lg} sm={props.sm}>
            <Box component="img" className="photo" src={image}></Box>
            <Box className="fs-s t-p m-tb-5">{title}</Box>
            <Box className="f-body-2 t-s m-tb-5">{detail}</Box>
            <Box component="img" src={lineIcon} sx={{width:"10%"}}></Box>
            <Link icon = {true} status="inactive" className="link no-line" title={link} href={href}></Link>
        </Grid>
    </>
}

export default AboutCard;