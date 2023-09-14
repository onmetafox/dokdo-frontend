import React from "react";
import cx from "classnames";
const Input = ({ placeHolder, multiple, rows, className }) => {
    let classnames = cx('input', className)
    return <>
        {multiple && (<textarea className={classnames} rows={rows} placeholder={placeHolder}/>)}
        {!multiple && (<input className={classnames} placeholder={placeHolder} rel="no referral"/>)}
    </>
        
    
}

export default Input;