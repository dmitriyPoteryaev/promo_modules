'use client';

import React, { useEffect } from 'react';
import { BlockLayout } from '../../../ui/block-layout/block-layout';
import { ClientLayout } from '../../../ui/client-layout/client-layout';
import { ButtonToMainPage } from '../../../ui/buttons/button-to-main-page/button-to-main-page';
import { Application } from '../../main/application';
import classes from './styles/application3.module.scss';
import { Button } from '../../../ui/buttons/button/button';
import Link from 'next/link';
import Image from 'next/image';

// const main_main = require("../../../assets/png/application3/main.png");

export const Application3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ClientLayout>
      <BlockLayout>
        <ButtonToMainPage />
        <section className={classes.application3}>
          <header className={classes.application3_header}>
            Solution for Wireless Farm Dispath
          </header>
          <div className={classes.application3_shotDescription}>
            <figure>
              <Image alt="main" src="/png/application3/main.png" width={1530} height={1044} />
            </figure>
            <article>
              <header>Project Overview:</header>
              <p>
                akYtec's engineering team has successfully completed a project for a client managing
                a dairy farm. The client sought to collect data from standalone structures,
                specifically cow shelters, to ensure optimal living conditions for the livestock. To
                achieve this, we utilized a beta version of akYtec Cloud, in conjunction with our
                sensors and I/O modules.
              </p>
            </article>
          </div>
          <article className={classes.application3_textDescription}>
            <header>System Description:</header>
            <p>
              Each standalone building is equipped with a dispatching panel that houses Mx210
              modules and a network gateway. The building's engineering system parameters are
              monitored by input/output modules featuring Ethernet Bypass technology. This
              technology ensures continuous data transmission between modules in the event of a
              module failure. The parameters monitored include:
            </p>
            <ul className={classes.application3_textDescription_listSteps}>
              <li>- Water temperature and pressure in the supply system.</li>
              <li>- Air temperature and humidity within the shelter.</li>
              <li>- Status of engineering systems, including signals from gas analyzers.</li>
              <li>- Position of automatic circuit breakers and backup supply parameters.</li>
            </ul>
            <header>akYtec Cloud Features:</header>
            <ul>
              <li>
                - Visualization of parameters on the dispatcher's workstation through schematics.
              </li>
              <li>- Maintenance of event logs and archives.</li>
              <li>- Adjustment of threshold values for various parameters.</li>
              <li>
                - Easy scalability and adaptability of the dispatching system to meet additional
                requirements.
              </li>
            </ul>
            <header>akYtec Products Used in the Project:</header>
            <ul>
              <li>- MV210-101</li>
              <li>- MV210-214</li>
              <li>- MV210-204</li>
              <li>- DTS</li>
              <li>- PD100</li>
              <li>- ToolPro</li>
            </ul>
            <header>Upcoming Releases:</header>
            <ul>
              <li>- akYtec Cloud</li>
              <li>- GG-24-Cloud</li>
            </ul>
            <header>Key Features of the Project:</header>
            <ul>
              <li>- Flexible and scalable monitoring system.</li>
              <li>- Wireless data transfer capabilities.</li>
              <li>- Integration of equipment from other manufacturers into the system.</li>
              <li>- Remote control of the system via smartphone, tablet, or computer.</li>
            </ul>
            <header>Additional akYtec Cloud Capabilities:</header>
            <ul>
              <li>- Schematic display of parameters on the workstation.</li>
              <li>- Event log and archive maintenance.</li>
              <li>- Threshold value adjustments for various parameters.</li>
              <li>
                - Easy scaling and adaptation of the monitoring system to meet future requirements.!
              </li>
            </ul>
          </article>
          <div className={classes.application3_buttonBlock}>
            <Button variant="magenta" size="medium">
              <Link
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                href="/application1"
              >
                NEXT APPLICATION
              </Link>
            </Button>
          </div>
        </section>
      </BlockLayout>
      <Application excludedApp={3} header="Read more" />
    </ClientLayout>
  );
};
