import React from 'react'
import Stack from '@mui/material/Stack';
import linkActiveIcon from "../assets/icons/active-link.svg";
import defaultLinkIcon from "../assets/icons/default-link.svg";
import cx from "classnames";

const Link = (props) => {
    const {title, className, href, icon, status} = props;
    let classNames = cx("ext-link", className)
    return (
        <Stack direction='row' spacing={2}>
            <a href = {href} className = {classNames} target='_blank' rel="noreferrer">{title}</a>
            {icon && status==="active" && (
                <img src={linkActiveIcon} style={{margin:0}} alt='link' />
            )}
            {icon && status==="inactive" && (
                <img src={defaultLinkIcon} style={{margin:0}} alt='link'/>
            )}
        </Stack>
    )
}

export default Link