import { Box, Grid } from "@mui/material";
import React from "react";
import Button from "./Button";
import Link from "./Link";

const ProductCard = (props) => {
    const { image, title, detail, button} = props.data;
    let direct = true;
    if(props.index % 2 === 0 ){
        direct = false;
    }else{
        direct = true;
    }
    return <Grid container direction="row" justifyContent="center" alignItems="center" className="product-card m-tb-10">
            {direct && (<>
                <Grid item lg={6}>
                    <Box component="img" src={image} sx={{width:'80%', marginLeft:2}}></Box>
                </Grid>
                <Grid item lg={6} sx={{textAlign: "left"}}>
                    <Button className = "product-button m-tb-10" title= {button}/>
                    <Box className= "t-p h5 m-tb-10"> {title} </Box>
                    <Box className= "t-p m-tb-10"> {detail} </Box>
                    <Link href= "github.com" className="t-o no-line" title="Read more" icon={true} status="active"/>
                </Grid>
            </>
            )}
            {!direct && (<>
                <Grid item lg={6} sx={{textAlign: "left"}}>
                    <Button className = "product-button m-tb-10" title= {button}/>
                    <Box className= "t-p h5 m-tb-10"> {title} </Box>
                    <Box className= "t-p m-tb-10"> {detail} </Box>
                    <Link href= "github.com" className="t-o no-line" title="Read more" icon={true} status="active" />
                </Grid>
                <Grid item lg={6}>
                    <Box component="img" src={image} sx={{width:'80%', marginLeft:2}}></Box>
                </Grid>
            </>
            )}
            
        </Grid>
}

export default ProductCard;