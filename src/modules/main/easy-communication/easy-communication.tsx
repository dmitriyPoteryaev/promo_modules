import React from "react";
import classes from "./style/easy-communication.module.scss";
import Image from "next/image";

export const EasyCommunication = () => {

    return (<section className={classes.easy_communication}>
        <header>Easy Communication</header>
        <Image src='/png/main/easy-communication/easy-communication.svg' width={790.12} height={540.77} alt=""/>
    </section>)
}