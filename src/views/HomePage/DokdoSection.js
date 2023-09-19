import { Box, Container, Divider, Grid, Stack } from "@mui/material";
import React from "react";

import dokdoIcon from "../../assets/images/dokdo.png"

const DokdoSection = () => {
    return <>
        <Box className="dokdo-section p-tb-80">
            <Container  maxWidth="xl">
                <Grid container direction="row" alignItems="center" spacing={5}>
                    <Grid item lg={5} md={12} sm={12} xs={12} p={5} className="ta-center">
                        <Box component="img" src={dokdoIcon} style={{width: '80%'}} />
                    </Grid>
                    <Grid item lg={7} md={12} sm={12} xs={12}>
                        <Box className="h3 t-p">Dokdo is a business</Box>
                        <Box className="h3 t-p">dedicated to enhancing the</Box>
                        <Box className="h3 t-p fg">Solar Network ecosystem</Box>
                        <Box className="fs-s2 t-p p-20">
                            Our goal is to contribute to the grwth and development of the Solar Network by providing innovative solutions, dApps and services.
                        </Box>
                        <Stack direction="row" sx={{display: {lg: "flex", md: 'flex', sm: 'flex', xs: 'block'}, textAlign:'center'}} justifyContent='flex-start' alignItems="center">
                            <Stack direction="column">
                                <Box className="fs-57-b t-p">8 years</Box>
                                <Box className="t-s"> of experience in crypto space</Box>
                            </Stack>
                            <Divider orientation="vertical" variant="middle" light = {true} sx={{marginLeft:5, marginRight:5, borderColor:"#393A47"}} flexItem />
                            <Stack direction="column">
                                <Box className="fs-57-b t-p">1K+</Box>
                                <Box className="t-s">Community</Box>
                            </Stack>
                            <Divider orientation="vertical" variant="middle" light = {true} sx={{marginLeft:5, marginRight:5,  borderColor:"#393A47"}} flexItem/>
                            <Stack direction="column">
                                <Box className="fs-57-b t-p">04</Box>
                                <Box className="t-s">products in development</Box>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
}

export default DokdoSection