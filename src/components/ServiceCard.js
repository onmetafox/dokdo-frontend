import { Box, Grid } from "@mui/material";
import React from "react";

import cx from 'classnames';
const ServiceCard = (props) => {
    const {link, image, title, detail } = props.data;
    let classNames;
    console.log(props.index % 2);
    if(props.index % 2 == 0 ){
        classNames = cx("service-card", 'm-lr-20' , 'mt-80-m', props.className);
    }else{
        classNames = cx("service-card", 'm-lr-20' , 'mt-80', props.className);
    }
    return <>
        <Grid item className = {classNames} xs={props.xs} md={props.md} lg={props.lg}>
            <Box className="f-body-2 t-s m-tb-5">{link}</Box>
            <Box className="ta-center">
                <Box component="img" src={image} sx={{width:'40%', marginLeft:2}}></Box>
            </Box>
            <Box className="fs-d t-p m-tb-10">{title}</Box>
            <Box className="f-body t-s p-lr-10">{detail}</Box>
        </Grid>
    </>
}

export default ServiceCard;