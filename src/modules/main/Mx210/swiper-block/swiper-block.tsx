import React, { FC } from 'react';
import { CustomSwiper } from '../../../../ui/custom-swiper/custom-swiper';
import classes from './style/swiper-block.module.scss';
import Image from 'next/image';

const pngsProtocolsMx210 = [
  '/png/main/multiple-protocols/Mx210/Mx201_protocols_1.png',
  '/png/main/multiple-protocols/Mx210/Mx201_protocols_2.png',
  '/png/main/multiple-protocols/Mx210/Mx201_protocols_3.png',
  '/png/main/multiple-protocols/Mx210/Mx201_protocols_4.png',
  '/png/main/multiple-protocols/Mx210/Mx201_protocols_5.png'
];

export const SwiperBlock: FC = () => {
  return (
    <section className={classes.swiper_block}>
      <article>
        <header>Multiple Protocols</header>
        <Image
          width={556}
          height={52.19}
          src="/png/main/multiple-protocols/Mx210/logo.png"
          alt="protocols_logo"
        />
        <p>
          <span>MQTT</span> - Actively publish MQTT message with user defined interval and shortens
          downtime with alarm event notification.
        </p>
        <p>
          <span>SNMP</span> - Simple way to monitor I/O data on NMS (Network Management System).
        </p>
        <p>
          <span>Modbus TCP</span> - protocol for communication between industrial devices via TCP/IP
          networks.
        </p>
      </article>
      {/* <div style={{ maxWidth: '620px', width: '100%' }}> */}
        <CustomSwiper arrayWithPng={pngsProtocolsMx210} />
      {/* </div> */}
    </section>
  );
};
