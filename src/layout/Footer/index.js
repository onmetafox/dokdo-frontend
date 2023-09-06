import React, { useState } from 'react';
import { Box,  AppBar, Typography, Container, Toolbar, List, IconButton, ListItem, ListItemButton, ListItemText, Drawer, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Button from 'src/components/Button';

import logoIcon from "../../assets/images/logo1.svg"
import ItemMenu from 'src/components/ItemMenu';



const Footer = (props) => {
    
    
    return (
        <Grid container spacing={1}>
            <Grid item sm={12} lg = {6} md={6}>
                
            </Grid>
            <Grid item sm={12} lg = {6} md={6}>

            </Grid>
            <Grid item xs = {12}>

            </Grid>
        </Grid>
    );
}

export default Footer;