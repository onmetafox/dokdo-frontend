import React from "react";
import { Grid, Container, Box } from "@mui/material";
import AboutCard from "src/components/AboutCard";
import { aboutData } from "src/config/const";
const AboutPage = ({route}) => {
    return <Box className = "about-section p-tb-80">
    <Container maxWidth="xl">
        <Grid container textAlign="center" direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                    <Box className="h3 t-p"> Meet Our Team</Box>
                </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Grid item lg={11} md={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            {aboutData.map((item, index) => (
                                <AboutCard xs={12} md={6} sm={6} lg={4} data={item} index = {index} key = {index}/>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>               
        </Grid>
    </Container>       
</Box>
}

export default AboutPage