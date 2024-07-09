import React, { FC } from 'react';
import classes from './styles/Mx210opportunities.module.scss';
import SvgMx210427321481 from '../../../../ui/icon2/Mx210427321481';
import SvgMx210427321496 from '../../../../ui/icon2/Mx210427321496';
import SvgMx210427321497 from '../../../../ui/icon2/Mx210427321497';
import SvgMx210427321717 from '../../../../ui/icon2/Mx210427321717';
import { CardOpportuinities } from '../../../../ui/card-opportunities/card-opportunities';
import Image from 'next/image';

const cards = [
  { topInscription: 'Modbus TCP,', bottomInscription: 'MQTT, SNMP', svg: <SvgMx210427321481 /> },
  {
    topInscription: 'Daisy-Chain',
    bottomInscription: 'Wiring.LAN bypass',
    svg: <SvgMx210427321496 />
  },
  { topInscription: '2-port', bottomInscription: 'Ethernet Switch', svg: <SvgMx210427321497 /> },
  {
    topInscription: 'Up to 32DI / 24DO',
    bottomInscription: 'Up to 8AI / 6AO',
    svg: <SvgMx210427321717 />,
    path: 'path'
  }
];

export const Opportunities: FC = () => {
  return (
    <section className={classes.Mx210opportunities} id="Mx210">
      <div className={classes.Mx210opportunities_line}>Mx210</div>
      <div className={classes.Mx210opportunities_fullInfo}>
        <div className={classes.Mx210opportunities_wrapperList}>
          <div style={{ width: '100%', display: 'flex' }}>
            <ul className={classes.Mx210opportunities_listOpportunities}>
              {cards.map((card: any) => {
                return (
                  <li key={card.topInscription}>
                    <CardOpportuinities description={card} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={classes.Mx210opportunities_wrapperImg}>
          <Image
            width={580}
            height={580}
            className={classes.Mx210opportunities_imgModule}
            src="/png/main/Oppotunities/Mx210/Mx210.png"
            alt="Mx210"
          />
          <div>Compatibility with third-party PLCs</div>
          <Image
            src="/png/main/Oppotunities/Mx210/interfacesMx210.png"
            width={164}
            height={144}
            alt="interfacesMx210"
          />
        </div>
      </div>
    </section>
  );
};
