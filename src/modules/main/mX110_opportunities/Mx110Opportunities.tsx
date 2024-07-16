import React, { FC } from "react";
import classes from "../mX210_opportunities/styles/Mx210opportunities.module.scss";
import SvgMx210427321481 from "../../../ui/icon2/Mx210427321481";
import SvgMx110427321542 from "../../../ui/icon2/Mx110427321542";
import SvgMx110427321769 from "../../../ui/icon2/Mx110427321769";
import SvgMx210427321717 from "../../../ui/icon2/Mx210427321717";
import SvgMx2101 from "../../../ui/icon2/Mx2101";
import Mx1102 from "../../../ui/icon2/Mx1102";
import { CardOpportuinities } from "../../../ui/card-opportunities/card-opportunities";
import Image from "next/image";

const cards =
    [{ topInscription: "Modbus RTU,", bottomInscription: "ASCII", svg: <SvgMx210427321481 /> },
    { topInscription: 'Galvanic', bottomInscription: "isolation", svg: <SvgMx110427321769 /> },
    { topInscription: 'Diagnostics of', bottomInscription: "network status", svg: <SvgMx110427321542 /> },
    { topInscription: 'Up to 32DI / 32DO', bottomInscription: 'Up to 8AI / 6AO', svg: <SvgMx210427321717 /> },
    { topInscription: 'Wide operating', bottomInscription: 'temperature range', svg: <SvgMx2101 /> },
    { topInscription: 'Sensor-based', bottomInscription: 'status diagnostics', svg: <Mx1102 /> }];


export const Mx110Opportunities: FC = () => {

    return <section className={classes.Mx210opportunities} id='Mx110'>
        <div className={classes.Mx210opportunities_line}><div>Mx110 <span>with RS485</span></div></div>
        <div className={classes.Mx210opportunities_fullInfo}>
            <article>
                <p><strong>Mx110</strong> - the line of universal I/O modules with RS485 interfaces offer a cost-effective and flexible 
                solution for centralized and decentralized systems. The modules are connected to the master via a two-wire 
                communication line over a distance of up to 1200 meters.</p>
                <div className={classes.Mx210opportunities_wrapperImg}>
                    <Image width={535} height={535} className={classes.Mx210opportunities_imgModule} src="/png/main/Oppotunities/Mx110/Mx110.png" alt="Mx110" />
                    <div>Compatibility with third-party PLCs</div>
                </div>
            </article>
            <div style={{ width: "100%", display: "flex" }}>
                <ul className={classes.Mx210opportunities_listOpportunities}>
                    {cards.map((card: any) => {
                        return (<li key={card.topInscription}><CardOpportuinities description={card} /></li>)
                    })}
                </ul>
            </div>
        </div>
    </section>
}