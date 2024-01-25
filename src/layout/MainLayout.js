import React from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';

import Header from './Header';
import Footer from './Footer'
// import LoadingScreen from 'src/components/LoadingScreen';
import ScrollTop from 'src/components/ScrollTop';

import "../styles/style.css";
const MainLayout = (props) => {
  
    // const [loading, setLoading] = useState(false);

    // if (loading) return <LoadingScreen />;

    return (
        <Box className = "body">
            <Header />
            <Box minHeight="calc(100vh - 460px)" display="flex" flexDirection="column">
                <Outlet />
            </Box>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            <Footer/>
        </Box>
    );
};

export default MainLayout;
