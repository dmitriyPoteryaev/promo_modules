import React, { FC } from "react";
import classes from "./styles/moduleAd.module.scss";
import { Button } from "../../../ui/buttons/button/button";

import backgroundEasyModuleAd from '../../../../public/png/main/Ad/moduleAd_easy.png';

import modulePhoto from '../../../../public/png/main/Ad/module.png';

import Image from 'next/image';
import Link from "next/link";

export const ModuleAdAboutModBus: FC = () => {

    return (
        <div className={classes.moduleAd} >
            <div  className={classes.moduleAd_img}>
            <img src={'/png/main/Ad/moduleAd_easy.png'}  style={{ width: '100%', height: '100%' }} />
            </div>
            <div  className={classes.moduleAd_img_complex} style={{ width: '100%', height:"100%", display: 'flex', justifyContent:'end' }}>
                <img src={'/png/main/Ad/moduleAd_complex.svg'} alt="svg" />
                </div>
            <article style={{maxWidth: '1230px', width: '100%'}}>
                <div className={classes.moduleAd_description}>
                    <header className={classes.moduleAd_header}>Modbus TCP/RTU universal remote I/O modules</header>
                    <ul>
                        <li>Modules are compatible with third-party PLCs</li>
                        <li>Supported protocols: Modbus TCP/ RTU, MQTT, SNMP – ability to connect modules to CLOUD, SCADA, and IIoT APPs</li>
                        <li>Daisy-chain wiring & LAN bypass</li>
                        <li>DIN-rail & wall mounting</li>
                        <li>Free and easy-to-use software for configuring modules</li>
                    </ul>
                    <Link href='/'>
                    <Button variant='magenta' size='medium' >                   
                        REQUEST FOR QUOTE
                </Button></Link> 
                </div>

                
                <div className={classes.moduleAd_modulePhoto}><Image src={modulePhoto} alt="module" /></div>

            </article>
        </div>
    );
};

export const ModuleAdDeployment: FC = () => {

    return (
        <div className={classes.moduleAd_Mx210} >
            <Image width={100} height={100} className={classes.moduleAd_img} src={backgroundEasyModuleAd} alt="" />
            <article style={{maxWidth: '1230px', width: '100%', marginTop: '72px'}}>
                <div className={classes.moduleAd_description_Mx210} >
                    <header>Flexible Deployment with Daisy Chain Networking and <br/> Auto-Bypass Protection</header>
                    <p className={classes.description_Mx210}>Daisy chain connectivity offers flexible cabling and space saving capabilities. With Ethernet auto-bypass
                        function supported to prevent accidental power failures if one of the modules unexpectedly shuts down.</p>
                        <Link href='/'>
                        <Button variant='magenta' size='large' >                   
                        EXPLORE MODELS &amp; SPECS
                     </Button></Link>
                </div>
                <div className={classes.moduleAd_modulePhoto} style={{ marginTop: '117px', paddingTop: 'unset',margin: 'auto'}}><Image width={587} height={428} src={'/png/main/Ad/Mx210.svg'} alt="module" /></div>
            </article>
        </div>
    );
};