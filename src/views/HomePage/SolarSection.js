import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";

const SolarSection = () => {
    return <Box className = "solar-section p-tb-40">
        <Container maxWidth="xl">
            <Grid container textAlign="center" direction="column" alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <Box className="h3 t-p"> Solar(SXP) Blockchain</Box>
                </Grid>
                <Grid item xs={6} >
                    <Box className="fs-2 t-p p-20" maxWidth={640}>Solar is a decentralised blockchain using a Delegated Proof of Stake consensus model which is secured by 53 elected block producers that produce blocks and validate transactions.</Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" sx={{display: {lg: "flex", md: 'flex', sm: 'flex', xs: 'block'}, textAlign:'center'}}>

                    </Stack>
                </Grid>
            </Grid>
        </Container>
    </Box>
}

export default SolarSection