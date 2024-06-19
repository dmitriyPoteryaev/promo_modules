import React from "react";
import classes from "./style/mobile-modal-menu.module.scss";


export const MobileMenu = () => {


    return (<aside className={classes.modal}>
        <span>MX210 Modules</span>
        <span>MX110 Modules</span>
        <span>Applications</span>
        <span>Mx Modifications</span>
        <span>More Info</span>
        </aside>)
}