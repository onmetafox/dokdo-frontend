import React from "react";
import { Box, Container, Grid, Stack } from "@mui/material";

import SolarCard from "src/components/SolarCard";

import { solarData } from "src/config/const";

const SolarSection = () => {
    return <Box className = "solar-section p-tb-80">
        <Container maxWidth="xl">
            <Grid container textAlign="center" direction="column" alignItems="center" justifyContent="center" spacing={5}>
                <Grid item xs={12}>
                    <Box className="h3 t-p"> Solar(SXP) Blockchain</Box>
                </Grid>
                <Grid item xs={6} >
                    <Box className="fs-2 t-p p-20" maxWidth={640}>Solar is a decentralised blockchain using a Delegated Proof of Stake consensus model which is secured by 53 elected block producers that produce blocks and validate transactions.</Box>
                </Grid>
                <Grid item xs={12} >
                    <Grid container>
                        {solarData.map((item, key)=>(
                            <SolarCard xs={12} md={6} lg={3} sm={6} data = {item} key= {key}/>)
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>
}

export default SolarSection