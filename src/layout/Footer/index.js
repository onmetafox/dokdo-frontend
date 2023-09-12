import React, { useState } from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';

import Button from 'src/components/Button';

import logoIcon from "../../assets/images/logo.svg"
import Input from 'src/components/Input';
import Link from 'src/components/Link';



const Footer = () => {
    return (
        <Box className='footer-section'>
            <Container maxWidth="xl">
                <Grid container justifyContent="flex-start" alignItems="center"  spacing={5}>
                    <Grid item sm={12} lg = {6} md={12}>
                        <Box component="img" src = {logoIcon} sx={{width:'120px'}} />
                        <Box className="t-p fs-s m-tb-10">Subscrive to get the latest news</Box>
                        <Stack direction="row" spacing={5}>
                            <Input placeHolder = "Subscribe" />
                            <Button className="btn-lg bg-gp p-lr-20 m-lr-20" title="Subscribe" />
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
                                <Box className="f-body t-s m-tb-10">Developers</Box>
                            </Grid>
                        </Grid>
                            
                        <Grid container>
                            <Grid item xs={4}>
                                <Link icon={false} title="Home" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link icon={false} title="Telegram" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link icon={false} title="Github" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Link icon={false} title="About" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link icon={false} title="Twitter" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link icon={false} title="Whitepaper" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Link icon={false} title="Contact us" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link icon={false} title="Discord" href="/" className="t-p t-body no-line m-tb-10" />
                            </Grid>
                            <Grid item xs={4}>
                                <Link icon={true} status="inactive" title="Blog" href="/" className="t-p t-body no-line m-tb-10" />
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