import React from 'react';
import { Container } from '@mui/material';
import HeadSection from './HeadSection';
import DokdoSection from './DokdoSection';
import SolarSection from './SolarSection';
import ServiceSection from './ServiceSection';
import ProductSection from './ProductSection';
import CommunitySection from './CommunitySection';
import DeveloperSection from './DeveloperSection';

const HomePage = () => {
    return <>
        <HeadSection />
        <DokdoSection />
        <SolarSection />
        <ServiceSection />
        <ProductSection />
        <CommunitySection />
        <DeveloperSection />
    </>
    
}

export default HomePage;