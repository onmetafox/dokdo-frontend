import React from "react";
import cx from "classnames";
const Input = (props) => {
    const {placeHolder} = props
    let classnames = cx('input', props.className)
    return <>
        <input className={classnames} placeholder={placeHolder}/>
    </>
}

export default Input;