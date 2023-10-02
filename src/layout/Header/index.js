import React, { useCallback, useState } from 'react';
import { Box,  AppBar, Container, Toolbar, List, IconButton, ListItem, ListItemButton, ListItemText, Drawer, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link, useLocation  } from 'react-router-dom';
import Button from 'src/components/Button';

import logoIcon from "../../assets/images/logo.svg"
import ItemMenu from 'src/components/ItemMenu';
import routes from 'src/routes';

const Header = (props) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const gotoContact = useCallback(()=>{
        navigate('/contact');
    },[navigate])
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawerWidth = 300;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
            <Link to="/">
                <Box component="img" src={logoIcon} sx={{width:'70%'}}/>
            </Link>
            <List>
                {routes.map(({title, href}, key) =>
                   (
                    <ListItem key={key} disablePadding>
                        <ListItemButton sx={{justifyContent:'center'}}>
                            {pathname === href &&  (
                                <Link to={href} className='link f-body corner-3' sx={{justifyContent:'center'}}><ListItemText primary={title} /></Link>
                            )}
                            {pathname != href &&  (
                                <Link to={href} className='link f-body' sx={{justifyContent:'center'}}><ListItemText primary={title} /></Link>
                            )}
                        </ListItemButton>
                    </ListItem>
                ))}
          </List>
        </Box>
    );
    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container direction="row"   justifyContent="space-between"  alignItems="center" spacing={0}>
                        <Grid item lg = {2} md = {2} sm = {2} xs = {6} sx = {{display :{sm: 'block'}}}>
                            <Link to="/home">
                                <Box
                                    sx={{ padding: '5px', height: 60 }}
                                    component="img"
                                    alt = "Go to Home"
                                    src={logoIcon}
                                />
                            </Link>
                        </Grid>
                        <Grid item lg = {8} md = {8} sm = {8} xs={6} sx={{display: {sm: 'flex', xs: 'none'}}}>
                            <Box sx={{ flexGrow: 1, justifyContent:'center', display: { xs: 'none', sm: 'flex' } }}>
                                {routes.map(({title, href, index}, key) => (
                                    <ItemMenu
                                        className = "f-body m-lr-10"
                                        href={href}
                                        key = {key}
                                        index = {index}
                                    >
                                        {title}
                                    </ItemMenu>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item lg = {2} md = {2} sm = {2} xs={6} justifyContent='flex-end' sx = {{display :{lg: 'flex'}, textAlign:'right'}}>
                            <Box sx={{ flexGrow: 1,  justifyContent:'flex-end', alignItems:'center', display:{xs:'flex'} }}>
                                <Button title="Contact us"  className = "bg-gp t-p btn-sm p-lr-10" handler={gotoContact}/>
                                <Box sx={{ flexGrow: 0, justifyContent:'flex-end', display: { sm: 'none', xs: 'flex' } }}>
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
                                                '& .MuiDrawer-paper': {backgroundColor:'black', color:'white', boxSizing: 'border-box', width: drawerWidth },
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