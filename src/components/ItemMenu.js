
import React from "react";
import cx from "classnames";

import "../styles/corners.scss";
import { Link, useLocation } from "react-router-dom";

const ItemMenu = ({ className, href, children }) => {
    const { pathname } = useLocation();
    let classNames;
    if (pathname === href){
        classNames = cx("link", 'corner-3', className);
    } else {
        classNames = cx("link", className);
    }
    
    return (
        <Link to={href} className={classNames}>
            {children}
        </Link>
    )
}

export default ItemMenu;