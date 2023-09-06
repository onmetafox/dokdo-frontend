import { Box, Grid } from "@mui/material";
import React from "react";

const SolarCard = (props) => {
    const { image, title, detail} = props.data;
    return <>
        <Grid item className = "solar-card" xs={props.xs} md={props.md} lg={props.lg} sm={props.sm}>
            <Box component="img" src={image} sx={{width:'25%', marginLeft:2}}></Box>
            <Box className="fs-s t-p m-tb-5">{title}</Box>
            <Box className="fs-s2 t-s m-tb-5">{detail}</Box>
        </Grid>
    </>
}

export default SolarCard;