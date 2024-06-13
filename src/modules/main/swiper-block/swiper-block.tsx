import React from "react";
import { CustomSwiper } from "../../../ui/custom-swiper/custom-swiper";
import classes from "./style/swiper-block.module.scss";

const pngsProtocolsMx210 = [
    require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_1.png"),
    require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_2.png"),
    require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_3.png"),
    require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_4.png"),
    require("../../../assets/png/main/multiple-protocols/Mx210/Mx201_protocols_5.png"), ];

    const protocols_logo = require("../../../assets/png/main/multiple-protocols/Mx210/logo.png");

export const SwiperBlock = () => {

    return (
       <section className={classes.swiper_block}>
        <article>
            <header>Multiple Protocols</header>
            <img src={protocols_logo} alt="protocols_logo"/>
            <p><span>MQTT</span> - Actively publish MQTT message with user defined interval and shortens downtime with alarm event notification.</p>
            <p><span>SNMP</span> - Simple way to monitor I/O data on NMS (Network Management System).</p>
            <p><span>Modbus TCP</span> - protocol for communication between industrial devices via TCP/IP networks.</p>
        </article>
        <div style={{ maxWidth: '620px', width: '100%' }}>
        <CustomSwiper arrayWithPng={pngsProtocolsMx210}/>
        </div>
       </section>)

}