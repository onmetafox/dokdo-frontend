import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { productData } from "src/config/const";
import ProductCard from "src/components/ProductCard";

const ProductSection = () => {
    return <Box className = "product-section p-tb-80">
        <Container maxWidth="xl">
            <Grid container textAlign="center" direction="column" alignItems="center" justifyContent="center" spacing={5}>
                <Grid item xs={12}>
                    <Box className="h3 t-p"> Products</Box>
                </Grid>
                <Grid item xs={6} >
                    <Box className="fs-2 t-p" maxWidth={640}>Solar is a decentralized blockchain using a Delegated Proof of Stake consensus model which is secured by 53 elected block producers that produce blocks and validate transactions.</Box>
                </Grid>
                <Grid item xs = {12}>
                    {productData.map((item, index) => (
                        <ProductCard data={item} index = {index} key = {index}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    </Box>
}

export default ProductSection