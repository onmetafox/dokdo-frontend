
import React from "react";
import cx from "classnames";

import "../styles/corners.scss";
import { Link, useLocation } from "react-router-dom";
import ExternalLink from './Link';

const ItemMenu = ({ className, href, index, children }) => {
    const { pathname } = useLocation();
    let classNames;
    if(href === 'blog'){
        classNames = cx("link no-line", className);
    }else if (pathname === href && index){
        classNames = cx("link", 'corner-3', className);
    } else {
        classNames = cx("link", className);
    }
    
    return (
        <>
            {index && href!== '/blog' && (<Link to={href} className={classNames}>{children}</Link>)}
            {href === '/blog' && (<ExternalLink title="Blog" status="inactive" className = {classNames} icon={true} href = "https://medium.com/@dokdo_sh"/>)}
        </>
    )
}

export default ItemMenu;