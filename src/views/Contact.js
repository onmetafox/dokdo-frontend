import React from "react";
import { Box, Container, Grid } from "@mui/material"
import Input from "src/components/Input";
import Button from "src/components/Button";

const ContactPage  = () => {
    return<Box className = "contact-section p-tb-80">
        <Container maxWidth="xl">
            <Grid container direction="row" alignItems="center" justifyContent="flex-start" spacing={5}>
                <Grid item xs={12} md={12} lg={5}>
                    <Box className="h2 t-p"> Contact us for partnership</Box>
                    <Box className="fs-s2 t-p p-tb-20" maxWidth={640}>The night is dar and full of terrors. what is dead may never die. And now his watch is ended. all men must die.</Box>
                </Grid>
                <Grid item xs={12} md={12} lg={7}>
                    <Box className="contact-box">
                        <Input placeHolder="Email"></Input>
                        <Input placeHolder="Phone number"></Input>
                        <Input placeHolder="Name"></Input>
                        <Input placeHolder="Comment" multiple={true} rows={4}></Input>
                        <Button className="btn bg-gp t-p btn-sm p-lr-10" title= "Send"/>
                    </Box>
                </Grid>               
            </Grid>
        </Container>       
    </Box>
}

export default ContactPage;