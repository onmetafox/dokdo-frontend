
import React from "react";
import cx from "classnames";

import "../styles/corners.scss";

const ItemMenu = (props) => {
    const classNames = cx("link", props.className);
    return <>
        <a href={props.href} className={classNames} target="_blank" rel="noopener noreferrer">
            {props.title}
        </a>
    </>
}

export default ItemMenu;