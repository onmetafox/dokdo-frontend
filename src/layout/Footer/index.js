import React, { useState, useCallback, useEffect } from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from 'src/components/Button';
import logoIcon from "../../assets/images/logo2.svg";
import checkIcon from "../../assets/icons/check.svg";
import Input from 'src/components/Input';
import ExternalLink from 'src/components/Link';
import { createSubscribeAsync, selectMsg, selectStatus } from 'src/features/contact/subscribeSlice';
import { validateEmail } from 'src/libs/validate';

const Footer = () => {
    const dispath = useDispatch();
    const msg = useSelector(selectMsg)
    const status = useSelector(selectStatus)
    const [email, setEmail] = useState();
    const [emailErr, setEmailErr] = useState();
    const [show, setShow] = useState(false)
    const validate = useCallback(()=>{
        let check = true;
        setEmailErr('');
    
        if (!email) {
          setEmailErr("Email is required!");
          check = false;
        } else if (!validateEmail(email)) {
          setEmailErr("Please provide a valid email address to subscribe");
          check = false;
        }
        return check;
    },[email])

    useEffect(()=>{
        if(status === "Success"){
            setShow(true)
        }
        if(status === "Failure"){
            setEmailErr(msg)
        }
    }, [status, msg])

    const handlerSubscribe = useCallback(()=>{
        if(validate()){
            dispath(createSubscribeAsync({email}))
        }
    }, [dispath, email, validate])

    return (
        <Box className='footer-section'>
            <Container maxWidth="xl">
                <Grid container justifyContent="flex-start" alignItems="center"  spacing={5}>
                    <Grid item sm={12} lg = {6} md={12}>
                        <Link to = "/home" ><Box component="img" src = {logoIcon} sx={{width:'120px'}} /></Link>
                        <Box className="t-p fs-s m-tb-10">Subscribe to get the latest news</Box>
                        {!show &&
                            <Grid container spacing={5}>
                                <Grid item xs = {7}>
                                    <Input handler={setEmail} value = {email} placeHolder = "Your Email" error={emailErr} sx={{width:'100%'}}/>
                                </Grid>
                                <Grid item xs = {5}>
                                    <Button handler = {handlerSubscribe} className="btn-lg bg-gp p-lr-20" title="Subscribe" />  
                                </Grid>
                            </Grid>
                        }
                        {show && (<Stack direction="row" alignItems='center'>
                                <Box component="img" src={checkIcon}></Box>
                                <Box className="p-lr-10 t-o f-body">Subscription Successful <br /> You have successfully subscribed to our newsletter. Stay tuned for the updates and news</Box>
                            </Stack>
                            )
                        }
                        
                    </Grid>
                    <Grid item xs = {12} sm={12} lg = {6} md={12}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Box className="f-body t-s m-tb-10">Site</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="f-body t-s m-tb-10">Company</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="f-body t-s m-tb-10">Legal</Box>
                            </Grid>
                        </Grid>
                            
                        <Grid container>
                            <Grid item xs={4}>
                                <Link  to="/home" className="ext-link t-body no-line m-tb-10">Home</Link>
                            </Grid>
                            <Grid item xs={4}>
                                <ExternalLink icon={false} title="Telegram" href="https://t.me/dokdo_official" className="t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link  to="/terms" className="ext-link t-body no-line m-tb-10">Terms and Conditions</Link>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Link to="/about" className="ext-link t-body no-line m-tb-10">Our team</Link>
                            </Grid>
                            <Grid item xs={4}>
                                <ExternalLink icon={false} title="X.com" href="https://x.com/dokdo_sh" className="t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link  to="/policy" className="ext-link t-body no-line m-tb-10">Privacy Policy</Link>
                            </Grid>

                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Link title="Contact us" to="/contact" className="ext-link t-body no-line m-tb-10">Contact us</Link>
                            </Grid>
                            <Grid item xs={4}>
                                <ExternalLink icon={false} title="Linkedin" href="https://www.linkedin.com/company/dokdo-sh/" className="t-body no-line m-tb-10" />
                            </Grid>
                            
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <ExternalLink icon={true} status="inactive" title="Blog" href="https://medium.com/@dokdo_sh" className="t-body no-line m-tb-10" />
                            </Grid>
                            {/* <Grid item xs={4}>
                                <ExternalLink icon={false} title="Github" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{textAlign:'center'}} className= "t-s t-body2 p-tb-40">@2023 DOKDO. All rights reserved.</Box>
            </Container>
        </Box>
    );
}

export default Footer;