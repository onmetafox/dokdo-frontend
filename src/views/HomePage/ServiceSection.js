import React from "react";
import { Box, Container, Grid, ImageList, ImageListItem } from "@mui/material";

import ServiceCard from "src/components/ServiceCard";

import { serviceData } from "../../config/const";

const ServiceSection = () => {
    return <Box className = "service-section p-tb-80">
        <Container maxWidth="xl">
            <Grid container textAlign="center" direction="column" alignItems="center" justifyContent="center" spacing={5}>
                <Grid item xs={12}>
                    <Box className="h3 t-p"> Services</Box>
                </Grid>
                <Grid item xs={6} >
                    <Box className="fs-2 t-p p-20" maxWidth={640}>The Solar Blockchain provides the end-user with rich libraries and tools to develop projects on the blockchain for many usecases.</Box>
                </Grid>
                <Grid item xs = {6}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" maxWidth={800}>
                        {serviceData.map((item, index) => (
                            <ServiceCard xs={12} md={6} lg={6} data={item} index = {index} key = {index}/>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>
}

export default ServiceSection