import React from "react";
import { Box, Grid, Container } from "@mui/material";
import joinIcon from "../../assets/images/join.svg"

import  { joinData } from "../../config/const";

import CommonCard from "src/components/CommonCard";
const JoinSection = () => {
    return <Box className = "join-section p-tb-80">
    <Container maxWidth="xl">
        <Grid container textAlign="center" direction="row" alignItems="center" justifyContent="center" spacing={5}>
            <Grid item lg = {6} md= {6} sm = {12} xs={12}>
                <Box component="img" src={joinIcon} sx={{width:"100%"}}/>
            </Grid>
            <Grid item lg = {6} md= {6} sm = {12} xs={12} >
                {joinData.map((item, index) => (
                    <CommonCard data={item} index = {index} key = {index}/>
                ))}
            </Grid>
        </Grid>
    </Container>
</Box>
}

export default JoinSection