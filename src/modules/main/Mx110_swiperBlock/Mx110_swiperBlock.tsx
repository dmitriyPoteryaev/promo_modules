import React from "react";
import { CustomSwiper } from "../../../ui/custom-swiper/custom-swiper";
import classes from "./style/swiper-block.module.scss";
import { Button } from "../../../ui/buttons/button/button";
import Link from "next/link";

const pngsProtocolsMx210 = [
    {url: '/png/main/multiple-protocols/Mx110/Mx110_protocols_1.svg',center: false},
    {url: '/png/main/multiple-protocols/Mx110/Mx110_protocols_2.svg',center: true},
    {url: '/png/main/multiple-protocols/Mx110/Mx110_protocols_3.svg',center: false}, ];


export const Mx110_swiperBlock = () => {

    return (
       <section className={classes.swiper_block}>
        <div className={classes.swiper_wrapperBlock}>
        <article>
            <header>Connection options</header>
            <ul>
                <li>Increase the number of inputs and outputs of any PLC with RS485 in centralized and decentralized systems.</li>
                <li>Connecting modules to cloud services through routers or gateways for remote monitoring and control.</li>
                <li>Connecting to a PC for remote data acquisition into a SCADA system or other software.</li>
                <li>Compatibility with any equipment supporting the RS-485 interface and Modbus-RTU/ASCII protocols.</li>
            </ul>
            <div style={{marginTop: '69px'}}>
            <Link href='/'>
            <Button variant='magenta' size='large' >                   
                        EXPLORE MODELS {"&"} SPECS
                     </Button></Link></div>
        </article>
        <div style={{ maxWidth: '620px', width: '100%' }}>
        <CustomSwiper arrayWithPng={pngsProtocolsMx210}/>
        </div>
        </div>
       </section>)

}