import React from 'react'
import Stack from '@mui/material/Stack';
import cx from "classnames";

const Button = (props) => {
    const {title, className} = props;
    let classNames = cx("btn", className)
    return (
        <Stack direction='row' spacing={2}>
            <button className = {classNames}>{title}</button>
        </Stack>
    )
}

export default Button