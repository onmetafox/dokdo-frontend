import React from 'react';
import { Dialog, IconButton, DialogContent as MuiDialogContent, Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

import successIcon from "../assets/icons/success.svg";
import faieldIcon from "../assets/icons/failed.svg";
import {  } from '@mui/material';

const styles = {
    background: 'linear-gradient(180deg, #0B0B0F 40%, #B9713D 150%)',
    padding: '50px',
    textAlign: 'center',
    color: 'white', // Text color on the background
};

const DialogContent = ({ children }) => {
    return <MuiDialogContent style={styles}>{children}</MuiDialogContent>;
};

const Success = ({ open, title, msg, className, closeDlg, success }) =>{
    return(
        <Dialog open={open} onClose={closeDlg}>
            <IconButton
            aria-label="close"
            onClick={closeDlg}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>
            <DialogContent>
            {success && <Box component="img" src={successIcon}/>}
                {!success && <Box component="img" src={faieldIcon}/>}
                <Box className = "t-p h5 p-tb-10">{title}</Box>
                <Box className="f-body t-s">{msg}</Box>
            </DialogContent>
        </Dialog>
        
    )
}

export default Success;