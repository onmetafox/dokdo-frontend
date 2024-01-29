import { Box, Grid } from "@mui/material";
import React from "react";
import Link from "./Link";

import cx from "classnames";

const CommonCard = (props) => {
    const { icon, title, detail, link} = props.data;
    let classNames = cx("common-card m-10", props.className)
    return <Grid container direction="row" justifyContent="center" sx = {props.sx} className={classNames}>
            <Grid item lg={2} md={2} sm = {2} xs={2}>
                <Box component="img" src={icon} sx={{width:'2em'}}></Box>
            </Grid>
            <Grid item lg={10} md={10} sm = {10} xs={10} sx={{textAlign: "left"}}>
                <Link href= {link} className="join-link fs-s no-line" title={title} icon={true} status="inactive" />
                <Box className= "t-s f-body m-tb-10"> {detail} </Box>
            </Grid>
        </Grid>
}

export default CommonCard;