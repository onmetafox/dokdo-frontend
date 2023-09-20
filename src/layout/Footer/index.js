import React, { useState, useCallback } from 'react';
import { Box, Container, Grid, Stack, Link } from '@mui/material';
import { useDispatch } from "react-redux";

import Button from 'src/components/Button';
import logoIcon from "../../assets/images/logo.svg"
import Input from 'src/components/Input';
import ExternalLink from 'src/components/Link';
import { createSubscribeAsync } from 'src/features/contact/subscribeSlice';


const Footer = () => {
    const dispath = useDispatch();
    // const status = useSelector(selectStatus);
    const [email, setEmail] = useState();
    const handlerSubscribe = useCallback(()=>{
        dispath(createSubscribeAsync({email}))
    }, [dispath, email])
    return (
        <Box className='footer-section'>
            <Container maxWidth="xl">
                <Grid container justifyContent="flex-start" alignItems="center"  spacing={5}>
                    <Grid item sm={12} lg = {6} md={12}>
                        <Box component="img" src = {logoIcon} sx={{width:'120px'}} />
                        <Box className="t-p fs-s m-tb-10">Subscrive to get the latest news</Box>
                        <Stack direction="row" spacing={5}>
                            <Input handler={setEmail} value = {email} placeHolder = "Subscribe" />
                            <Button handler = {handlerSubscribe} className="btn-lg bg-gp p-lr-20 m-lr-20" title="Subscribe" />
                        </Stack>
                    </Grid>
                    <Grid item xs = {12} sm={12} lg = {6} md={12}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Box className="f-body t-s m-tb-10">Site</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="f-body t-s m-tb-10">Join us</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="f-body t-s m-tb-10">Links</Box>
                            </Grid>
                        </Grid>
                            
                        <Grid container>
                            <Grid item xs={4}>
                                <Link  href="/home" className="ext-link t-p t-body no-line m-tb-10">Home</Link>
                            </Grid>
                            <Grid item xs={4}>
                                <ExternalLink icon={false} title="Telegram" href="https://t.me/dokdo_official" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link  href="/terms" className="ext-link t-p t-body no-line m-tb-10">Terms and Conditions</Link>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Link href="/about" className="ext-link t-p t-body no-line m-tb-10">About us</Link>
                            </Grid>
                            <Grid item xs={4}>
                                <ExternalLink icon={false} title="Twitter" href="https://twitter.com/dokdo_sh" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link  href="/policy" className="ext-link t-p t-body no-line m-tb-10">Privacy Policy</Link>
                            </Grid>

                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Link title="Contact us" href="/contact" className="ext-link t-p t-body no-line m-tb-10">Contact us</Link>
                            </Grid>
                            <Grid item xs={4}>
                                <ExternalLink icon={false} title="Discord" href="" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <ExternalLink icon={true} status="inactive" title="Blog" href="https://medium.com/@dokdo_sh" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <ExternalLink icon={false} title="Github" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{textAlign:'center'}} className= "t-s t-body2 mt-80">@2023 DOKDO. All rights reserved.</Box>
            </Container>
        </Box>
    );
}

export default Footer;