import React from "react";
import { Grid, Container, Box } from "@mui/material";
import AboutCard from "src/components/AboutCard";
import { aboutData } from "src/config/const";
import lineIcon from "../assets/images/line.png";
import aboutImg from "../assets/images/about.png";

import Link from "src/components/Link";
const AboutPage = ({route}) => {
    return <Box className = "about-section p-tb-80">
    <Container maxWidth="xl">
        <Grid container textAlign="center" direction="column" alignItems="center" justifyContent="center" spacing={5}>
            <Grid item xs={12}>
                    <Box className="h3 t-p"> About Us</Box>
                </Grid>
                <Grid item xs={6} >
                    <Box className="fs-2 t-p p-20" maxWidth={640}>The Solar blockchain provides the end-user with rich libraries and tools to develop projects on the blockchain for many usecases.</Box>
                </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5}>
                    <Grid item lg={6} md={12}>
                        <Box className="t-p h4">"The night is dark and ull of terrors. What is dead may never die. And now his watch is ended. All men must die."</Box>
                        <Box className="about-card">
                            <Box component="img" src={aboutImg} sx={{ marginLeft:2}}></Box>
                            <Box className="fs-s t-p m-tb-5">Nick</Box>
                            <Box className="fs-s2 t-s m-tb-5">Developer</Box>
                            <Box component="img" src={lineIcon} sx={{width:'10%'}}></Box>
                            <Link icon = {true} status="active" title="Github link/Twitter" href="github.com" className="t-o no-line"></Link>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            {aboutData.map((item, index) => (
                                <AboutCard xs={12} md={6} sm={6} lg={6} data={item} index = {index} key = {index}/>
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