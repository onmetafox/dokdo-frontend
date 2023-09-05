import React, { useState } from 'react';
import { Box,  AppBar, Typography, Container, Toolbar, List, IconButton, ListItem, ListItemButton, ListItemText, Drawer, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Button from 'src/components/Button';

import logoIcon from "../../assets/images/logo1.svg"
import ItemMenu from 'src/components/ItemMenu';



const Header = (props) => {
    const { window } = props;
    const pages = ['Home', 'About us', 'Blog'];
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawerWidth = 240;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Box component="img"
            src={logoIcon}
          />
          <List sx={{backgroundColor:'black'}}>
            {pages.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
    );
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container direction="row"   justifyContent="space-between"  alignItems="center" spacing={0}>
                        <Grid item lg = {4} sm = {6} sx = {{display :{lg: 'block'}}}>
                            <Box
                                sx={{ padding: '5px' }}
                                component="img"
                                alt = "Go to Home"
                                src={logoIcon}
                            />
                        </Grid>
                        <Grid item lg = {4} sx={{display: {lg: 'flex', sm: 'none'}}}>
                            <Box sx={{ flexGrow: 1, justifyContent:'center', display: { xs: 'none', sm: 'flex' } }}>
                                {pages.map((page) => (
                                    <ItemMenu
                                        title={page}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </ItemMenu>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item lg={4} sm = {6} justifyContent='flex-end' sx = {{display :{lg: 'flex'}, textAlign:'right'}}>
                            <Box sx={{ flexGrow: 1,  justifyContent:'flex-end', alignItems:'center', display:{xs:'flex'} }}>
                                <Button title="Contact us"  className = "bg-gp t-p btn-sm p-lr-20"/>
                                <Box sx={{ flexGrow: 0, justifyContent:'flex-end', display: { lg: 'none', sm: 'flex' } }}>
                                    <nav style={{backgroundColor:'black'}}>
                                        <Drawer
                                            container={container}
                                            variant="temporary"
                                            open={mobileOpen}
                                            onClose={handleDrawerToggle}
                                            ModalProps={{
                                                keepMounted: true, // Better open performance on mobile.
                                            }}
                                            sx={{
                                                display: { xs: 'block', sm: 'none' },
                                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                            }}
                                        >
                                        {drawer}
                                        </Drawer>
                                    </nav>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleDrawerToggle}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            
                        </Grid>

                    </Grid>
                    
                    
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;