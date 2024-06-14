import React from "react";
import { CustomSwiper } from "../../../ui/custom-swiper/custom-swiper";
import classes from "./style/swiper-block.module.scss";

const pngsProtocolsMx210 = [
    require("../../../assets/png/main/multiple-protocols/Mx110/Mx110_protocols_1.png"),
    require("../../../assets/png/main/multiple-protocols/Mx110/Mx110_protocols_2.png"),
    require("../../../assets/png/main/multiple-protocols/Mx110/Mx110_protocols_3.png"),];

const protocols_logo = require("../../../assets/png/main/multiple-protocols/Mx110/logo.jpg");

export const Mx110_swiperBlock = () => {

    return (
        <section className={classes.swiper_block}>
            <article>
                <header>Multiple Protocols</header>
                <img src={protocols_logo} alt="protocols_logo" />
                <p>Universal Modbus RTU I/O modules Mx110 offer cost effective and flexible solution for centralized and decentralized systems.
                    The modules are connected to the Master using a two-wire communication line up to 1200 m.
                </p>
                <header>The master can be a device of various types:</header>
            <ul>
                <li>Third-party PLCs with RS485;</li>
                <li>PC with SCADA via IC4-M (converter RS485{"->"}USB);</li>
                <li>CLOUD services;</li>
                <li>Modbus display SMI2-M;</li>
                <li>Operator panels, etc.</li>
            </ul>
            </article>
          
            <div style={{ maxWidth: '620px', width: '100%' }}>
                <CustomSwiper arrayWithPng={pngsProtocolsMx210} />
            </div>
        </section>)

}