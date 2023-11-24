import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Button from "./Button";
import Link from "./Link";

const ProductCard = (props) => {
    const [visible, setVisible] = useState(true)
    const { image, title, detail, button, link} = props.data;
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
                    <Box onMouseEnter={() =>{if(button !== "Game") setVisible(false)}} onMouseLeave={() => {if(button !== "Game") setVisible(true)}}>
                        {visible && <Link href= {link} className="t-o no-line" title="Read more" icon={true} status="active"/>}
                        {!visible && <Box className="t-o no-line ext-link" sx={{cursor:"pointer"}}>Comming soon</Box>}
                    </Box>
                </Grid>
            </>
            )}
            {!direct && (<>
                <Grid item lg={6} sx={{textAlign: "left"}}>
                    <Button className = "product-button m-tb-10" title= {button}/>
                    <Box className= "t-p h5 m-tb-10"> {title} </Box>
                    <Box className= "t-p m-tb-10"> {detail} </Box>
                    <Box onMouseEnter={() => {if(button !== "Game") setVisible(false)}} onMouseLeave={() => {if(button !== "Game") setVisible(true)}}>
                        {visible && <Link href= {link} className="t-o no-line" title="Read more" icon={true} status="active" />}
                        {!visible && <Box className="t-o no-line ext-link" sx={{cursor:"pointer"}}>Comming soon</Box>}
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <Box component="img" src={image} sx={{width:'80%', marginLeft:2}}></Box>
                </Grid>
            </>
            )}
            
        </Grid>
}

export default ProductCard;