import React from "react";
import { useRef, useState } from "react";
import cx from "classnames";
import Autosize from "./Autosize";


const Input = ({ placeHolder, multiple, rows, className, handler, value, error, sx, onBlur }) => {
    const [val, setVal] = useState("");
    const textAreaRef = useRef(null);

    Autosize(textAreaRef.current, val);

    let classnames = cx('input', className)
    if (error){
        classnames = cx(classnames,'err-border');
    }
    return <>
        {multiple && (<textarea onChange={(e)=> {handler(e.target.value); setVal(e.target.value)}} value={value} className={classnames} rows={rows} placeholder={placeHolder} onBlur={!onBlur ? () => {} : onBlur} ref={textAreaRef}/>)}
        {!multiple && (<input onChange={(e)=> handler(e.target.value)} className={classnames} value={value} placeholder={placeHolder} style = {sx} rel="no referral" onBlur={!onBlur ? () => {} : onBlur}/>)}
        {error && <span className = "f-body-2"style={{color:'#DB3B4B'}}>{error}</span>}
    </>
}

export default Input;