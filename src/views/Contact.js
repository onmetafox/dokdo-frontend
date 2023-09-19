import React, { useCallback, useEffect, useState } from "react";
import { Box, Container, Grid, Dialog, IconButton, DialogContent, Typography, DialogActions  } from "@mui/material"
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { createContactAsync, selectStatus } from "src/features/contact/contactSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
}));

const ContactPage  = () => {
    const dispath = useDispatch();
    const status = useSelector(selectStatus);
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [comment, setComment] = useState();
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        if(status === "Success"){
            setOpen(true);
        }
    },[status])
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
            <BootstrapDialog
                // onClose={setOpen(false)}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <IconButton
                aria-label="close"
                // onClick={setOpen(false)}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </Container>       
    </Box>
}

export default ContactPage;