import { Box, Container, Divider, Grid, Stack } from "@mui/material";
import React from "react";

import dokdoIcon from "../../assets/images/dokdo.svg"

const DokdoSection = () => {
    return <>
        <Box className="dokdo-section">
            <Container  maxWidth="xl">
                <Grid container direction="row" alignItems="center" spacing={5}>
                    <Grid item lg={5} md={12} p={5} className="ta-center">
                        <Box component="img" src={dokdoIcon} style={{width: '80%'}} />
                    </Grid>
                    <Grid item lg={7} md={12}>
                        <Box className="h3 t-p">Dokdo is a business</Box>
                        <Box className="h3 t-p">dedicated to enhancing the</Box>
                        <Box className="h3 t-p fg">Solar Network ecosystem</Box>
                        <Box className="fs-s2 t-p p-20">
                            Our goal is to contribute to the grwth and development of the Solar Network by providing innovative solutions, dApps and services.
                        </Box>
                        <Stack direction="row" sx={{display: {lg: "flex", md: 'flex', sm: 'flex', xs: 'block'}, textAlign:'center'}} justifyContent='flex-start' alignItems="center">
                            <Box className="fs-57-b t-p">1700% +</Box>
                            <Divider orientation="vertical" variant="middle" light = {true} sx={{marginLeft:5, marginRight:5, color:"white"}} flexItem />
                            <Box className="fs-57-b t-p">5M +</Box>
                            <Divider orientation="vertical" variant="middle" light = {true} sx={{marginLeft:5, marginRight:5, color:"white"}} flexItem/>
                            <Box className="fs-57-b t-p">80 +</Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
}

export default DokdoSection