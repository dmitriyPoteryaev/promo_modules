import React from "react";
import classes from "./styles/moduleAd.module.scss";
import  {Button} from "../../../ui/buttons/button/button";

const backgroundComplexModuleAd = require("../../../assets/png/main/Ad/moduleAd_complex.png");
const backgroundEasyModuleAd = require("../../../assets/png/main/Ad/moduleAd_easy.png");
const modulePhoto = require("../../../assets/png/main/Ad/module.png");

export const ModuleAd = () => {
    return (
        <div className={classes.moduleAd} >
            <picture>
                <source className={classes.moduleAd_img} srcSet={backgroundEasyModuleAd} media="(max-width: 1160px)" />
                <img className={classes.moduleAd_img} src={backgroundComplexModuleAd} alt="" />
            </picture>
            <article>
                <div className={classes.moduleAd_description}>
                    <header className={classes.moduleAd_header}>Modbus TCP/RTU universal remote I/O modules</header>
                    <ul>
                       <li>Modules are compatible with third-party PLCs</li>
                       <li>Supported protocols: Modbus TCP/ RTU, MQTT, SNMP – ability to connect modules to CLOUD, SCADA, and IIoT APPs</li>
                       <li>Daisy-chain wiring & LAN bypass</li>
                       <li>DIN-rail & wall mounting</li>
                       <li>Free and easy-to-use software for configuring modules</li>
                    </ul>
                    <Button variant='magenta' size='medium'>REQUEST FOR QUOTE</Button>
                </div>
                <div className={classes.moduleAd_modulePhoto}><img  src={modulePhoto} alt="module" /></div>
            </article>
        </div>
    );
};
