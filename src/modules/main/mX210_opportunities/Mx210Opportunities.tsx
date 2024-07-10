import React, { FC } from "react";
import classes from "./styles/Mx210opportunities.module.scss";
import SvgMx210427321481 from "../../../ui/icon2/Mx210427321481";
import SvgMx210427321496 from "../../../ui/icon2/Mx210427321496";
import SvgMx110427321769 from "../../../ui/icon2/Mx110427321769";
import SvgMx210427321717 from "../../../ui/icon2/Mx210427321717";
import SvgMx2108 from "../../../ui/icon2/Mx2108";
import SvgMx2107 from "../../../ui/icon2/Mx2107";
import { CardOpportuinities } from "../../../ui/card-opportunities/card-opportunities";
import Image from "next/image";
 
const cards =
    [{ topInscription: "Modbus TCP,", bottomInscription: "MQTT, SNMP", svg: <SvgMx210427321481 /> },
    { topInscription: 'Daisy-Chain', bottomInscription: "Wiring.LAN bypass", svg: <SvgMx210427321496 /> },
    { topInscription: 'Galvanic',bottomInscription: "isolation", svg: <SvgMx110427321769/>},
    { topInscription: 'Up to 32DI / 24DO', bottomInscription: 'Up to 8AI / 6AO', svg: <SvgMx210427321717 /> },
    { topInscription: 'DIN-rail &', bottomInscription: 'wall mounting', svg: <SvgMx2108 />},
    { topInscription: 'Data', bottomInscription: 'logging', svg: <SvgMx2107 /> }];


export const Mx210Opportunities: FC = () => {

    return <section className={classes.Mx210opportunities} id='Mx210'>
        <div className={classes.Mx210opportunities_line}><div>Mx210</div></div>
        <div className={classes.Mx210opportunities_fullInfo}>
            <article>
            <p><strong>Mx210</strong> - the line of universal I/O modules with Ethernet interfaces. 
                These modules support a wide range of protocols, such as Modbus TCP, MQTT, and SNMP, making them suitable for both 
                centralized and decentralized industrial automation systems, <br/> as well as IIoT applications.</p>
                <div className={classes.Mx210opportunities_wrapperImg}>
                <Image width={535} height={535} className={classes.Mx210opportunities_imgModule} src="/png/main/Oppotunities/Mx210/Mx210.png" alt="Mx210" />
                {/* <div>Compatibility with third-party PLCs</div> */}
                </div>
            </article>
                <Image width={470} height={42} src='/png/main/multiple-protocols/Mx210/logo.png' alt="protocols_logo"/>
                <div style={{ width: "100%", display: "flex" }}>
                    <ul className={classes.Mx210opportunities_listOpportunities}>
                        {cards.map((card: any) => {
                            return (<li key={card.topInscription}><CardOpportuinities description={card} /></li>)
                        })}
                    </ul>
              
            {/* <div className={classes.Mx210opportunities_wrapperList}>
                <div style={{ width: "100%", display: "flex" }}>
                    <ul className={classes.Mx210opportunities_listOpportunities}>
                        {cards.map((card: any) => {
                            return (<li key={card.topInscription}><CardOpportuinities description={card} /></li>)
                        })}
                    </ul>
                </div>
            </div>
            <div className={classes.Mx210opportunities_wrapperImg}>
                <Image width={580} height={580} className={classes.Mx210opportunities_imgModule} src="/png/main/Oppotunities/Mx210/Mx210.png" alt="Mx210" />
                <div>Compatibility with third-party PLCs</div>
                <Image src="/png/main/Oppotunities/Mx210/interfacesMx210.png" width={164} height={144} alt="interfacesMx210" />
            </div> */}

 </div>
        </div>
    </section>
}