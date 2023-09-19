import React from 'react'
import Stack from '@mui/material/Stack';
import cx from "classnames";

const Button = ({title, className, handler}) => {
    let classNames = cx("btn", className)
    return (
        <Stack direction='row' spacing={2}>
            <button onClick={handler} className = {classNames}>{title}</button>
        </Stack>
    )
}

export default Button