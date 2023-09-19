import React from "react";
import cx from "classnames";
const Input = ({ placeHolder, multiple, rows, className, handler, value }) => {
    let classnames = cx('input', className)
    return <>
        {multiple && (<textarea onChange={(e)=> handler(e.target.value)} value={value} className={classnames} rows={rows} placeholder={placeHolder}/>)}
        {!multiple && (<input onChange={(e)=> handler(e.target.value)} className={classnames} value={value} placeholder={placeHolder} rel="no referral"/>)}
    </>
        
    
}

export default Input;