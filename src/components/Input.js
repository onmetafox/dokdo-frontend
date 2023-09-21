import React from "react";
import cx from "classnames";
const Input = ({ placeHolder, multiple, rows, className, handler, value, error, sx }) => {
    let classnames = cx('input', className)
    if(error){
        classnames = cx(classnames,'err-border');
    }
    return <>
        {multiple && (<textarea onChange={(e)=> handler(e.target.value)} value={value} className={classnames} rows={rows} placeholder={placeHolder}/>)}
        {!multiple && (<input onChange={(e)=> handler(e.target.value)} className={classnames} value={value} placeholder={placeHolder} style = {sx} rel="no referral"/>)}
        {error && <span className = "f-body-2"style={{color:'#DB3B4B'}}>{error}</span>}
    </>
        
    
}

export default Input;