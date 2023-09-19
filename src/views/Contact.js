import React, { useCallback, useState } from "react";
import { Box, Container, Grid } from "@mui/material"
import { useDispatch } from "react-redux";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { createContactAsync } from "src/features/contact/contactSlice";

const ContactPage  = () => {
    const dispath = useDispatch()
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [comment, setComment] = useState();

    const handlerContact = useCallback(()=>{
        dispath(createContactAsync({email, name, phone, comment})).then(()=>{
        })
    }, [dispath, email, comment, name, phone])
    return<Box className = "contact-section p-tb-80">
        <Container maxWidth="xl">
            <Grid container direction="row" alignItems="center" justifyContent="flex-start" spacing={5}>
                <Grid item xs={12} md={12} lg={5}>
                    <Box className="h2 t-p"> Contact us for partnership</Box>
                    <Box className="fs-s2 t-p p-tb-20" maxWidth={640}>The night is dar and full of terrors. what is dead may never die. And now his watch is ended. all men must die.</Box>
                </Grid>
                <Grid item xs={12} md={12} lg={7}>
                    <Box className="contact-box">
                        <Input handler={setEmail} value = {email} placeHolder="Email"></Input>
                        <Input handler={setPhone} value = {phone} placeHolder="Phone number"></Input>
                        <Input handler={setName} value = {name} placeHolder="Name"></Input>
                        <Input handler={setComment} value = {comment} placeHolder="Comment" multiple={true} rows={4}></Input>
                        <Button handler = {handlerContact}  className="btn bg-gp t-p btn-sm p-lr-10" title= "Send"/>
                    </Box>
                </Grid>               
            </Grid>
        </Container>       
    </Box>
}

export default ContactPage;