'use client';

import React, {useEffect} from "react";
import { BlockLayout } from "../../../ui/block-layout/block-layout";
import { ClientLayout } from "../../../ui/client-layout/client-layout";
import { ButtonToMainPage } from "../../../ui/buttons/button-to-main-page/button-to-main-page";
import { Application } from "../../main/application";
import classes from "./styles/application2.module.scss";
import { Button } from "../../../ui/buttons/button/button";
import Link from "next/link";
import Image from "next/image";

// const png_description = require("../../../assets/png/application2/desc.png");
// const png_main = require("../../../assets/png/application2/main.png");

export const Application2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ClientLayout>
      <BlockLayout>
         <ButtonToMainPage /> 
        <section className={classes.application2}>
          <header className={classes.application2_header}>
            Pharmaceutical Warehouse Automation
          </header>
          <div className={classes.application2_shotDescription}>
            <figure>
             <Image alt="description" src="/png/application2/desc.png" width={784} height={717.43}/>
            </figure>
            <article>
              <p>
                The client of akYtec needed a comprehensive set of services to
                establish a continuous monitoring system for collecting data on
                the temperature and humidity conditions in a pharmaceutical
                warehouse.
              </p>
              <header>Here's what our engineers did:</header>
              <ul>
                <li>
                  Development, supply, and installation of a continuous
                  monitoring system for temperature and humidity.
                </li>
                <li>
                  Integration of akYtec equipment into the system using PLC or
                  SCADA systems from other manufacturers.
                </li>
                <li>
                  Subsequent validation tests of the monitoring system with the
                  preparation of relevant protocols and reports
                </li>
                <li>Temperature mapping of premises to assess risk zones.</li>
              </ul>
            </article>
          </div>
          <figure className={classes.application2_mainImg}>
           <Image alt="main" src="/png/application2/main.png" width={1530} height={1149} /> 
          </figure>
          <article className={classes.application2_textDescription}>
            <header>
              For the creation of the monitoring system, akYtec equipment was
              used:
            </header>
            <ul>
              <li>Input modules MV210-101 — 4 units</li>
              <li>Temperature sensor DTS125 — 20 units</li>
              <li>Process indicator ITP14 — 32 units</li>
              <li>Temperature and humidity sensor PVT — 6 units.</li>
            </ul>
            <header>
              The sequence of implementation and integration of the system:
            </header>
            <ul className={classes.application2_textDescription_listSteps}>
              <li>
                <span>Step №1 </span> - Temperature mapping was conducted.
                Measurements were taken over 7 days for the most reliable
                analysis of temperature distribution in the premises. Based on
                this distribution, locations for the installation of sensors for
                the stationary monitoring system were identified.
              </li>
              <li>
                <span>Step №2 </span> - Development and installation of a
                continuous monitoring and data collection system for temperature
                and humidity regime. The key requirement of the client was to
                build a monitoring system using akYtec equipment and devices
                from other manufacturers, as some of the devices had already
                been purchased by the client.
              </li>
              <li>
                <span>Step №3 </span> - Validation of the monitoring system to
                meet the key requirements of the pharmaceutical industry. All
                tests were documented in protocols and reports, which were then
                handed over to the client.
              </li>
            </ul>
          </article>
          <div className={classes.application2_buttonBlock}>
            <Button variant="magenta" size="medium">
            <Link style={{width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}} href='/application/3'>
              NEXT APPLICATION
              </Link>
            </Button> 
          </div>
        </section>
      </BlockLayout>
      <Application excludedApp={2} header="Read more" />
    </ClientLayout>
  );
};
