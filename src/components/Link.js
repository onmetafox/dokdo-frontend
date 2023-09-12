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
            <a href = {href} className = {classNames}>{title}</a>
            {icon && status=="active" && (
                <img src={linkActiveIcon} />
            )}
            {icon && status=="inactive" && (
                <img src={defaultLinkIcon} />
            )}
        </Stack>
    )
}

export default Link