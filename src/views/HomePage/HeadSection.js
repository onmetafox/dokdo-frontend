import { Grid, Box, Stack, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';

import solarIcon from "../../assets/logos/solar.svg";
import discordIcon from "../../assets/logos/discord.svg";
import upbitIcon from "../../assets/logos/upbit.svg";
import googleIcon from "../../assets/logos/google.svg";
import jumpIcon from "../../assets/logos/jump.svg";
import gateIcon from "../../assets/logos/gateio.svg";

import circleImg from "../../assets/images/circle.svg"
import Button from "src/components/Button";

const HeadSection = () => {

    const TEXTS = ['Save', 'innovative', 'powerful'];
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(
            ()=> setIndex((index) => index+1),
            3000
        );
        return () =>clearTimeout(intervalId);
    }, []);
    return <>
        <Box className="head-section container">
            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{ flexGrow: 1 }} justifyContent="center">
                    <Grid item xs= {12} >
                        <Grid container spacing={5} sx={{ flexGrow: 1 }} direction="row" justifyContent="center" alignItems="center">
                            <Grid item lg={6} md = {6} sm = {6}>
                                <Box className="h0 t-p">DOKDO</Box>
                                <TextTransition className = "h1 t-o" style={{color:"#ED5C15", display: 'flex', justifyContent: 'center'}} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                                <Box className="fs-s2 t-p mt-20">Dokdo is a business dedicated to enhancing the Solar Network ecosystem.</Box>
                                <Stack direction="row" className="mt-20" sx={{textAlign:'center'}} spacing={2}>
                                    <Button className="btn-lg bg-gp p-lr-20" title="Join community" />
                                    <Button className="btn-lg btn-s-d p-lr-20" title="Read docs" />
                                </Stack>
                            </Grid>
                            <Grid item lg={6} md = {6} sm = {6} textAlign="center">
                                <Box component= "img" src = {circleImg}  style={{width: '80%'}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box className="logo-container">
                        <Grid item xs= {12} justifyContent="center">
                            <Box className="fs-24-b t-o mt-20" style={{textAlign:'center'}}>Powering integrations from companies all around the world</Box>
                            <Stack direction="row" spacing={6} useFlexGap flexWrap="wrap" justifyContent='center' className="mt-20">
                                <Box component="img" src={solarIcon} />
                                <Box component="img" src={discordIcon} />
                                <Box component="img" src={upbitIcon} />
                                <Box component="img" src={googleIcon} />
                                <Box component="img" src={jumpIcon} />
                                <Box component="img" src={gateIcon} />
                            </Stack>
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </Box>
    </>
}

export default HeadSection