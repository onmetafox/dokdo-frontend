import React from "react";
import { Box, Grid, Container } from "@mui/material";
import { developerData } from "src/config/const";
import CommonCard from "src/components/CommonCard";
const DeveloperSection = () => {
    return <Box className = "product-section p-tb-80">
        <Container maxWidth="xl">
            <Grid container textAlign="center" direction="column" alignItems="center" justifyContent="center" spacing={5}>
                <Grid item xs={12}>
                    <Box className="h3 t-p"> Developers</Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
                        {developerData.map((item, index) => (
                            <Grid item xs = {12} sm={12} md ={6} lg={6} key={index} >
                                <CommonCard data={item}  className="dev-card" sx={{width:'auto'}}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>               
            </Grid>
        </Container>
    </Box>
}

export default DeveloperSection