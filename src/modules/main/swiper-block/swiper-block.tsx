import React from "react";
import { CustomSwiper } from "../../../ui/custom-swiper/custom-swiper";
import classes from "./style/swiper-block.module.scss";
import Image from "next/image";

const pngsProtocolsMx210 = [
    {url: '/png/main/multiple-protocols/Mx210/1.svg',center: false},
    {url: '/png/main/multiple-protocols/Mx210/2.svg',center: false},
    {url: '/png/main/multiple-protocols/Mx210/3.svg',center: false},
    {url: '/png/main/multiple-protocols/Mx210/4.svg',center: true },
    {url: '/png/main/multiple-protocols/Mx210/5.svg',center: false}, ];


export const SwiperBlock = () => {

    return (
       <section className={classes.swiper_block}>
        <div className={classes.swiper_wrapperBlock}>
        <article>
            <header>Connection options</header>
            <ul style={{maxWidth: '480px'}}>
                <li>Increase the number of inputs and outputs of any PLC with Ethernet in centralized and decentralized systems.</li>
                <li>Connecting modules to CLOUD services through routers or gateways for remote monitoring and control.</li>
                <li>Connecting to a PC for remote data acquisition <br/> into a SCADA system or other software.</li>
                <li>Connection to any equipment supporting Ethenet interface and Modbus TCP, SNMP, MQTT communication protocols.</li>
            </ul>
            <Image style={{marginTop: '30px'}} width={470} height={50} src='/png/main/multiple-protocols/Mx210/logo.svg' alt="protocols_logo"/>
        </article>
        <div style={{ maxWidth: '620px', width: '100%' }}>
        <CustomSwiper arrayWithPng={pngsProtocolsMx210}/>
        </div>
        </div>
       </section>)

}